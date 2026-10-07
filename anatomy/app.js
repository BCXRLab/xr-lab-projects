const grid = document.querySelector("#grid");
const emptyEl = document.querySelector("#empty");
const statusEl = document.querySelector("#status");
const pageWrap = document.querySelector(".wrap");
const skipLinks = document.querySelectorAll(".skip");
const crossEl = document.querySelector("#cross");
const heading = document.querySelector("#heading");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#q");
const tabModels = document.querySelector("#tab-models");
const tabAnimations = document.querySelector("#tab-animations");
const modal = document.querySelector("#modal");
const panel = modal.querySelector(".panel");
const modalBody = document.querySelector("#modal-body");
const closeBtn = document.querySelector("#modal-close");
const collectionLink = document.querySelector("#collection-link");

const state = {
  tab: "models",
  query: "",
  collection: null,
  openId: null,
};

function norm(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[_-]+/g, " ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

// Related anatomy terms. A search for one word also accepts the others,
// so "lung" finds pulmonary models and "renal" finds the kidney.
const SYNONYM_GROUPS = [
  ["lung", "pulmonary", "respiratory"],
  ["heart", "cardiac", "cardio", "cardiovascular"],
  ["kidney", "renal", "nephron"],
  ["eye", "eyeball", "ocular"],
  ["bone", "skeleton", "skeletal", "skull"],
  ["muscle", "muscular"],
  ["liver", "hepatic"],
  ["brain", "cerebral"],
  ["blood", "erythrocyte", "leukocyte"],
  ["cell", "microbiology", "organelle"],
  ["digestive", "digestion", "stomach", "intestine", "gastrointestinal"],
  ["spine", "vertebra"],
];

const SYNONYMS = new Map();
for (const group of SYNONYM_GROUPS) {
  const folded = group.map(singular);
  const set = new Set(folded);
  for (const word of folded) SYNONYMS.set(word, set);
}

function singular(word) {
  if (word.length > 4 && word.endsWith("ies")) return `${word.slice(0, -3)}y`;
  if (word.length > 3 && word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
  return word;
}

function wordList(...parts) {
  return norm(parts.flat().filter(Boolean).join(" ")).split(" ").filter(Boolean);
}

function nameWords(item) {
  const words = wordList(item.title, item.sketchfabName, item.id);
  const compact = norm(item.title).replace(/\s+/g, "");
  if (compact) words.push(compact);
  return words;
}

function contextWords(item) {
  return wordList(item.tags);
}

function sameTerm(word, token) {
  return singular(word) === singular(token);
}

function synonymHit(word, token) {
  const group = SYNONYMS.get(singular(token));
  return Boolean(group && group.has(singular(word)));
}

// "kid" matches kidney and "lu" matches lungs. A short stub must not reach
// across a much longer unrelated word.
function prefixHit(word, token) {
  if (token.length < 2 || !word.startsWith(token)) return false;
  return word.length - token.length <= 8;
}

function wordHit(word, token) {
  if (sameTerm(word, token) || prefixHit(word, token)) return true;
  return token.length >= 3 && synonymHit(word, token);
}

function fieldHit(words, token) {
  return words.some((word) => wordHit(word, token));
}

function directHit(words, token) {
  return words.some((word) => sameTerm(word, token) || prefixHit(word, token));
}

// Tags match a whole word or a full related term. A prefix such as "ca"
// must not hit the heart tag "cardiac".
function contextHit(words, token) {
  return words.some((word) => sameTerm(word, token) || (token.length >= 3 && synonymHit(word, token)));
}

function titleStartsWithLetter(item, letter) {
  return norm(item.title).startsWith(letter);
}

// Lower score is a closer match: the typed word in the name, then a related
// word in the name, then a keyword.
function relevance(item, tokens) {
  const names = nameWords(item);
  const context = contextWords(item);
  let score = 0;
  // One letter keeps titles that start with that letter, A or a.
  if (tokens.length === 1 && tokens[0].length === 1) {
    return titleStartsWithLetter(item, tokens[0]) ? 0 : null;
  }
  for (const token of tokens) {
    if (directHit(names, token)) continue;
    if (fieldHit(names, token)) {
      score += 1;
      continue;
    }
    if (contextHit(context, token)) {
      score += 2;
      continue;
    }
    return null;
  }
  return score;
}

function sortKey(title) {
  return norm(title).replace(/^(the|a|an) /, "");
}

let lastStatus = "";

function byTitle(a, b) {
  return sortKey(a.title).localeCompare(sortKey(b.title), undefined, {
    numeric: true,
    sensitivity: "base",
  });
}

function listFor(kind) {
  const source = (kind === "animations" ? state.collection.animations : state.collection.models) || [];
  return source.slice().sort(byTitle);
}

function findItem(id) {
  return [...state.collection.models, ...state.collection.animations].find((item) => item.id === id) || null;
}

function cubeIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" d="M12 3.2 20.2 7.6v8.8L12 20.8 3.8 16.4V7.6L12 3.2z"/><path fill="none" stroke="currentColor" stroke-width="1.7" d="M12 12.1 20.2 7.6M12 12.1 3.8 7.6M12 12.1v8.7"/></svg>';
}

function playIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8.2 5.8v12.4L19 12 8.2 5.8z"/></svg>';
}

function setTab(tab, { updateHash = true } = {}) {
  state.tab = tab;
  const modelsOn = tab === "models";
  tabModels.setAttribute("aria-selected", String(modelsOn));
  tabAnimations.setAttribute("aria-selected", String(!modelsOn));
  tabModels.tabIndex = modelsOn ? 0 : -1;
  tabAnimations.tabIndex = modelsOn ? -1 : 0;
  grid.setAttribute("aria-labelledby", modelsOn ? "tab-models" : "tab-animations");
  if (updateHash && !state.openId) {
    const hash = tab === "animations" ? "#animations" : "#models";
    if (location.hash !== hash) history.replaceState({ tab }, "", hash);
  }
  render();
}

function matching(kind, tokens) {
  const items = listFor(kind);
  if (!tokens.length) return items;
  return items
    .map((item) => ({ item, score: relevance(item, tokens) }))
    .filter((row) => row.score !== null)
    .sort((a, b) => a.score - b.score || byTitle(a.item, b.item))
    .map((row) => row.item);
}

function render() {
  const query = norm(state.query);
  const tokens = query.split(/\s+/).filter(Boolean);
  const current = matching(state.tab, tokens);
  const otherKind = state.tab === "models" ? "animations" : "models";
  const other = matching(otherKind, tokens);
  const label = state.tab === "models" ? "Anatomy Models" : "Animations";

  heading.innerHTML = query
    ? `${label} <span class="count">(${current.length})</span>`
    : `${label} <span class="count">(A – Z)</span>`;

  grid.replaceChildren();
  if (current.length === 0) {
    emptyEl.hidden = false;
    emptyEl.textContent = emptyMessage(query, other.length);
  } else {
    emptyEl.hidden = true;
    const frag = document.createDocumentFragment();
    for (const item of current) frag.append(cardElement(item));
    grid.append(frag);
  }

  const noun = current.length === 1
    ? (state.tab === "models" ? "model" : "animation")
    : (state.tab === "models" ? "models" : "animations");
  const message = current.length === 0
    ? emptyEl.textContent
    : query
      ? `${current.length} ${noun} match “${state.query.trim()}”.`
      : `${current.length} ${noun}.`;
  if (message !== lastStatus) {
    lastStatus = message;
    statusEl.textContent = message;
  }

  crossEl.replaceChildren();
  if (query && other.length) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "cross-link";
    const noun = otherKind === "animations" ? "animation" : "model";
    button.textContent = `${other.length} ${noun}${other.length === 1 ? "" : "s"} also match`;
    button.addEventListener("click", () => setTab(otherKind));
    crossEl.append(button);
    crossEl.hidden = false;
  } else {
    crossEl.hidden = true;
  }
}

function emptyMessage(query, otherCount) {
  if (!query && state.tab === "animations") {
    if (animationsStatus === "loading") return "Checking the YouTube playlist…";
    if (animationsStatus === "failed" && location.protocol === "file:") {
      return "The YouTube playlist cannot be read when this file is opened directly. Start the local server in this folder and open http://127.0.0.1:8094/ so the Animations tab stays up to date.";
    }
    if (animationsStatus === "failed") {
      return "The YouTube playlist did not load. Check the internet connection, then refresh the page.";
    }
    return "No animations in the playlist yet. Disease animations show up here when they are added to the XR Lab YouTube playlist, and a model can link to one when they are connected.";
  }
  if (!query) return "No models in the collection yet.";
  const shown = state.query.trim();
  if (otherCount) {
    const noun = state.tab === "models" ? "models" : "animations";
    return `Nothing in ${noun} matches “${shown}”.`;
  }
  return `Nothing matches “${shown}”. Try a structure, disease, or keyword such as lung, heart, or skeleton.`;
}

function cardElement(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "card";
  button.dataset.id = item.id;
  const thumb = item.thumbnail ? `<img src="${escapeAttr(item.thumbnail)}" alt="">` : "";
  button.innerHTML = `
    <span class="thumb">
      ${thumb}
      <span class="badge" aria-hidden="true">${item.kind === "animation" ? playIcon() : cubeIcon()}</span>
    </span>
    <span class="name">${escapeHtml(item.title)}</span>`;
  button.addEventListener("click", () => openItem(item));
  return button;
}

function usefulDescription(item) {
  const description = norm(item.description);
  if (!description) return "";
  if (description === norm(item.title) || description === norm(item.sketchfabName)) return "";
  return item.description;
}

function withCaptionPolicy(url) {
  if (!url || /[?&]cc_load_policy=/.test(url)) return url;
  return `${url}${url.includes("?") ? "&" : "?"}cc_load_policy=1`;
}

function fillModal(item) {
  const related = (item.related || []).map(findItem).filter(Boolean);
  const description = usefulDescription(item);
  const showSource = item.sketchfabName
    && norm(item.sketchfabName) !== norm(item.title)
    && cleanModelTitle(item.sketchfabName) !== item.title;
  const showAuthor = item.kind === "animation" && item.youtubeAuthor;
  const meta = [item.year, item.license].filter(Boolean).join(" · ");
  const externalHref = item.kind === "animation"
    ? (item.youtube ? `https://www.youtube.com/watch?v=${encodeURIComponent(item.youtube)}` : "")
    : (item.viewerUrl || "");
  const externalLabel = item.kind === "animation" ? "Watch on YouTube" : "Open on Sketchfab";
  const textAlt = description || (item.kind === "animation"
    ? `${item.title} is a video in this collection. Play it in the viewer, or use Watch on YouTube.`
    : `${item.title} is a 3D model in this collection. Explore it in the viewer, or open it on Sketchfab.`);
  let viewer = "";
  if (item.kind === "animation") {
    if (item.embed) {
      viewer = `<iframe title="${escapeAttr(item.title)}" src="${escapeAttr(withCaptionPolicy(item.embed))}" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    } else if (item.video) {
      viewer = `<video controls playsinline src="${escapeAttr(item.video)}"></video>`;
    } else {
      viewer = `<p class="modal-desc">This animation does not have a video linked yet.</p>`;
    }
  } else {
    const autostart = document.documentElement.dataset.motion === "reduce" ? "0" : "1";
    const src = `https://sketchfab.com/models/${encodeURIComponent(item.sketchfab)}/embed?autostart=${autostart}&ui_theme=dark&ui_hint=0&dnt=1`;
    viewer = `<iframe title="3D viewer: ${escapeAttr(item.title)}" src="${src}" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>`;
  }

  modalBody.innerHTML = `
    <h2 id="modal-title">${escapeHtml(item.title)}</h2>
    ${showSource ? `<p class="modal-source">Sketchfab: ${escapeHtml(item.sketchfabName)}</p>` : ""}
    ${showAuthor ? `<p class="modal-source">YouTube: ${escapeHtml(item.youtubeAuthor)}</p>` : ""}
    <div class="viewer">${viewer}</div>
    <p class="modal-desc">${escapeHtml(textAlt)}</p>
    ${(item.tags || []).length ? `<ul class="tags">${item.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}</ul>` : ""}
    ${related.length ? `<div class="related"><span>Related</span>${related.map((entry) => {
      const verb = entry.kind === "animation" ? "Watch" : "View model";
      return `<button type="button" data-related="${escapeAttr(entry.id)}">${verb}: ${escapeHtml(entry.title)}</button>`;
    }).join("")}</div>` : ""}
    ${externalHref ? `<div class="modal-actions"><a class="text-link" href="${escapeAttr(externalHref)}" target="_blank" rel="noopener noreferrer">${escapeHtml(externalLabel)}<span class="sr-only"> (opens in a new tab)</span></a></div>` : ""}
    ${meta ? `<p class="modal-meta">${escapeHtml(meta)}</p>` : ""}
    ${item.kind === "model" ? `<p class="modal-note">Use the viewer’s VR button to open this model in a headset.</p>` : ""}
  `;

  modalBody.querySelectorAll("[data-related]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = findItem(button.dataset.related);
      if (next) openItem(next);
    });
  });
}

function setModalOpen(open) {
  modal.hidden = !open;
  document.body.classList.toggle("modal-open", open);
  pageWrap.inert = open;
  skipLinks.forEach((link) => { link.inert = open; });
}

function clearModal() {
  state.openId = null;
  setModalOpen(false);
  modalBody.innerHTML = "";
}

function openItem(item) {
  state.openId = item.id;
  setTab(item.kind === "animation" ? "animations" : "models", { updateHash: false });
  fillModal(item);
  setModalOpen(true);
  const hash = `#${item.id}`;
  if (location.hash !== hash) history.pushState({ id: item.id }, "", hash);
  closeBtn.focus();
}

// #id opens that model or animation. Back, Escape, and the close button return to the tab.
function syncFromLocation() {
  if (!state.collection) return;
  const id = decodeURIComponent(location.hash.replace(/^#/, ""));
  if (!id || id === "models" || id === "animations") {
    const previous = state.openId;
    clearModal();
    setTab(id === "animations" ? "animations" : "models", { updateHash: false });
    if (previous) {
      const card = grid.querySelector(`[data-id="${CSS.escape(previous)}"]`);
      if (card) card.focus();
    }
    return;
  }
  const item = findItem(id);
  if (!item) {
    clearModal();
    setTab("models", { updateHash: false });
    return;
  }
  state.openId = item.id;
  setTab(item.kind === "animation" ? "animations" : "models", { updateHash: false });
  fillModal(item);
  setModalOpen(true);
}

function requestClose() {
  if (!state.openId) return;
  if (history.state && history.state.id) {
    history.back();
    return;
  }
  const hash = state.tab === "animations" ? "#animations" : "#models";
  history.pushState({ tab: state.tab }, "", hash);
  syncFromLocation();
}

function focusables() {
  return [...panel.querySelectorAll("button, a[href], iframe, video, input, select, textarea")]
    .filter((el) => !el.disabled && el.tabIndex !== -1);
}

searchForm.addEventListener("submit", (event) => event.preventDefault());

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  searchForm.classList.toggle("has-value", state.query.trim().length > 0);
  render();
});

tabModels.addEventListener("click", () => setTab("models"));
tabAnimations.addEventListener("click", () => setTab("animations"));

for (const tab of [tabModels, tabAnimations]) {
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = state.tab === "models" ? tabAnimations : tabModels;
    next.click();
    next.focus();
  });
}

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close]")) requestClose();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.openId) {
    event.preventDefault();
    requestClose();
    return;
  }
  if (event.key === "Escape" && a11yPanel && !a11yPanel.hidden) {
    event.preventDefault();
    setA11yOpen(false);
    a11yToggle.focus();
    return;
  }
  if (event.key !== "Tab" || modal.hidden) return;
  const items = focusables();
  if (!items.length) return;
  const first = items[0];
  const last = items[items.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

window.addEventListener("popstate", syncFromLocation);

const A11Y_KEY = "anatomy-a11y";
const a11yToggle = document.querySelector("#a11y-toggle");
const a11yPanel = document.querySelector("#a11y-panel");
const a11yReset = document.querySelector("#a11y-reset");

function a11yBase() {
  return {
    text: "md",
    contrast: window.matchMedia("(prefers-contrast: more)").matches,
    motion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    focus: false,
    spacing: false,
    font: false,
  };
}

function loadA11y() {
  const base = a11yBase();
  try {
    const saved = JSON.parse(localStorage.getItem(A11Y_KEY) || "null");
    if (!saved || typeof saved !== "object") return base;
    return {
      text: saved.text === "lg" || saved.text === "xl" ? saved.text : "md",
      contrast: typeof saved.contrast === "boolean" ? saved.contrast : base.contrast,
      motion: typeof saved.motion === "boolean" ? saved.motion : base.motion,
      focus: saved.focus === true,
      spacing: saved.spacing === true,
      font: saved.font === true,
    };
  } catch {
    return base;
  }
}

function saveA11y(settings) {
  try {
    localStorage.setItem(A11Y_KEY, JSON.stringify(settings));
  } catch {
    // The page still applies the choice for this visit.
  }
}

function reflectA11y(settings) {
  for (const button of a11yPanel.querySelectorAll("[data-a11y='text']")) {
    const checked = button.dataset.value === settings.text;
    button.setAttribute("aria-checked", String(checked));
    button.tabIndex = checked ? 0 : -1;
  }
  for (const name of ["contrast", "motion", "focus", "spacing", "font"]) {
    const button = a11yPanel.querySelector(`[data-a11y="${name}"]`);
    const on = Boolean(settings[name]);
    button.setAttribute("aria-pressed", String(on));
  }
}

function applyA11y(settings) {
  const root = document.documentElement;
  root.dataset.text = settings.text;
  root.dataset.contrast = settings.contrast ? "high" : "default";
  root.dataset.motion = settings.motion ? "reduce" : "allow";
  root.dataset.focus = settings.focus ? "strong" : "default";
  root.dataset.spacing = settings.spacing ? "extra" : "normal";
  root.dataset.font = settings.font ? "readable" : "default";
  reflectA11y(settings);
}

function announceA11y(msg) {
  const el = document.getElementById("a11y-live");
  if (!el) return;
  el.textContent = "";
  requestAnimationFrame(() => { el.textContent = msg; });
}

function setA11yOpen(open) {
  a11yToggle.setAttribute("aria-expanded", String(open));
  a11yPanel.hidden = !open;
  if (!open) return;
  const current = a11yPanel.querySelector("[aria-checked='true']") || a11yPanel.querySelector("button");
  if (current) current.focus();
}

let a11ySettings = loadA11y();
applyA11y(a11ySettings);

a11yToggle.addEventListener("click", () => {
  setA11yOpen(a11yPanel.hidden);
});

a11yPanel.querySelector(".a11y-choices").addEventListener("keydown", (event) => {
  const buttons = [...a11yPanel.querySelectorAll("[data-a11y='text']")];
  const index = buttons.indexOf(document.activeElement);
  if (index < 0) return;
  let next = index;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % buttons.length;
  else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + buttons.length) % buttons.length;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = buttons.length - 1;
  else return;
  event.preventDefault();
  buttons[next].click();
  buttons[next].focus();
});

a11yPanel.addEventListener("click", (event) => {
  const button = event.target.closest("[data-a11y]");
  if (!button) return;
  if (button.dataset.a11y === "text") {
    a11ySettings = { ...a11ySettings, text: button.dataset.value };
  } else {
    const name = button.dataset.a11y;
    a11ySettings = { ...a11ySettings, [name]: !a11ySettings[name] };
  }
  saveA11y(a11ySettings);
  applyA11y(a11ySettings);
  announceA11y("Accessibility settings updated.");
});

a11yReset.addEventListener("click", () => {
  try {
    localStorage.removeItem(A11Y_KEY);
  } catch {
    // Reset still clears the choices on the page.
  }
  a11ySettings = a11yBase();
  applyA11y(a11ySettings);
  announceA11y("Accessibility settings restored to defaults.");
});

const skipA11y = document.querySelector('a[href="#a11y-toggle"]');
if (skipA11y) {
  skipA11y.addEventListener("click", (event) => {
    event.preventDefault();
    setA11yOpen(true);
  });
}

document.addEventListener("click", (event) => {
  if (a11yPanel.hidden || event.target.closest(".a11y")) return;
  setA11yOpen(false);
});

const SKETCHFAB_COLLECTION_UID = "ae6b494a53204254928d190251ac8c43";
const SKETCHFAB_COLLECTION_API = `https://api.sketchfab.com/v3/collections/${SKETCHFAB_COLLECTION_UID}/models`;

let packagedCollection = null;
let liveModels = null;
let liveAnimations = null;
let animationsStatus = "idle";

async function loadCollection() {
  if (window.ANATOMY_COLLECTION && Array.isArray(window.ANATOMY_COLLECTION.models)) {
    return window.ANATOMY_COLLECTION;
  }
  const response = await fetch(new URL("data/collection.json", document.baseURI));
  if (!response.ok) throw new Error(`Collection file was not found (${response.status})`);
  return response.json();
}

function requestTimeout(ms) {
  if (typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function") {
    return AbortSignal.timeout(ms);
  }
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller.signal;
}

function collectionPageUrl(raw) {
  let parsed;
  try {
    parsed = new URL(raw);
  } catch {
    return "";
  }
  if (parsed.origin !== "https://api.sketchfab.com") return "";
  if (parsed.pathname !== `/v3/collections/${SKETCHFAB_COLLECTION_UID}/models`) return "";
  return parsed.toString();
}

// Sketchfab descriptions are not copied. Some uploads include local file paths.
async function fetchSketchfabModels() {
  const models = [];
  const seen = new Set();
  let url = `${SKETCHFAB_COLLECTION_API}?count=24&t=${Date.now()}`;
  while (url) {
    const safeUrl = collectionPageUrl(url);
    if (!safeUrl || seen.has(safeUrl)) break;
    seen.add(safeUrl);
    const response = await fetch(safeUrl, { signal: requestTimeout(12000) });
    if (!response.ok) throw new Error(`Sketchfab responded ${response.status}`);
    const page = await response.json();
    if (!Array.isArray(page.results)) throw new Error("Sketchfab response had no model list");
    models.push(...page.results);
    url = typeof page.next === "string" ? page.next : "";
    if (seen.size >= 10) break;
  }
  return models;
}

function catalogId(name, uid, usedIds) {
  const slug = norm(name).replace(/\s+/g, "-").replace(/^-+|-+$/g, "").slice(0, 48);
  let id = slug && slug !== "models" && slug !== "animations" ? slug : "model";
  if (usedIds.has(id)) id = `${id}-${String(uid).slice(0, 8)}`;
  if (usedIds.has(id)) id = String(uid);
  usedIds.add(id);
  return id;
}

function sketchfabThumb(model) {
  const images = model.thumbnails && Array.isArray(model.thumbnails.images) ? model.thumbnails.images : [];
  const usable = images.filter((img) => img && typeof img.url === "string" && img.url.startsWith("https://"));
  if (!usable.length) return "";
  const large = usable.filter((img) => (img.width || 0) >= 720);
  const pool = (large.length ? large : usable).slice().sort((a, b) => (a.width || 0) - (b.width || 0));
  return pool[0].url;
}

function sketchfabPage(model) {
  const url = typeof model.viewerUrl === "string" ? model.viewerUrl : "";
  if (/^https:\/\/sketchfab\.com\/3d-models\/[a-z0-9-]+$/i.test(url)) return url;
  return model.uid ? `https://sketchfab.com/models/${encodeURIComponent(model.uid)}` : "";
}

function sketchfabTags(model) {
  const raw = Array.isArray(model.tags) ? model.tags : [];
  const tags = [];
  const seen = new Set();
  for (const tag of raw) {
    const name = tag && typeof tag.name === "string" ? tag.name.trim() : "";
    const key = name.toLowerCase();
    if (!name || name.length > 40 || seen.has(key)) continue;
    if (!/^[a-z0-9][a-z0-9 &'+-]*$/i.test(name)) continue;
    seen.add(key);
    tags.push(name);
    if (tags.length >= 12) break;
  }
  return tags;
}

function rawSketchfabName(model) {
  return String(model.name || "").replace(/\s+/g, " ").trim().slice(0, 140);
}

function remoteYear(model) {
  const year = String(model.publishedAt || "").slice(0, 4);
  return /^\d{4}$/.test(year) ? year : "";
}

function remoteLicense(model) {
  const license = model.license && typeof model.license.label === "string" ? model.license.label.trim() : "";
  return license.length <= 80 ? license : "";
}

// Drop upload boilerplate (Reza, Bellevue College, dates) and keep the model name.
function cleanModelTitle(raw) {
  const original = String(raw || "").replace(/\s+/g, " ").trim();
  let s = original
    .replace(/[_/]+/g, " ")
    .replace(/&/g, " and ")
    .replace(/\s+/g, " ")
    .trim();
  if (!s) return "";

  const month = "jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?";
  s = s.replace(new RegExp(`\\b(?:${month})\\.?\\s*20\\d{2}\\b`, "gi"), " ");
  s = s.replace(new RegExp(`\\b(?:${month})20\\d{2}\\b`, "gi"), " ");
  s = s.replace(/\b20\d{2}\b/g, " ");

  const phrases = [
    "anatomy student model",
    "student project",
    "bellevue college",
    "bc xr lab",
    "annotated",
    "horizontal v2",
    "horizontal",
    "reza",
  ];
  for (const phrase of phrases) {
    s = s.replace(new RegExp(`\\b${phrase}\\b`, "gi"), " ");
  }
  s = s.replace(/\bv\d+\b/gi, " ");
  s = s.replace(/[–—_-]+/g, " ");
  s = s.replace(/[.,;:]+/g, " ");
  s = s.replace(/\s+/g, " ").trim();
  s = s.replace(/([A-Za-z])(\d)/g, "$1 $2");
  s = s.replace(/(\d)([A-Za-z])/g, "$1 $2");
  s = s.replace(/\s+/g, " ").trim();
  if (!s) return original.slice(0, 140);

  s = s.split(" ").map((word) => {
    if (/^\(.*\)$/.test(word)) return word;
    if (/^[A-Z0-9]{2,8}$/.test(word)) return word;
    if (word.toLowerCase() === "and") return "and";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(" ");
  return s.slice(0, 140);
}

function applyRemoteModel(existing, remote) {
  const liveName = rawSketchfabName(remote);
  const title = cleanModelTitle(liveName) || existing.title;
  return {
    ...existing,
    sketchfab: remote.uid || existing.sketchfab,
    title,
    sketchfabName: liveName || existing.sketchfabName,
    viewerUrl: sketchfabPage(remote) || existing.viewerUrl,
    license: remoteLicense(remote) || existing.license,
    year: remoteYear(remote) || existing.year,
  };
}

function modelFromSketchfab(model, usedIds) {
  const liveName = rawSketchfabName(model);
  const title = cleanModelTitle(liveName) || liveName || "Untitled model";
  return {
    id: catalogId(title, model.uid, usedIds),
    kind: "model",
    title,
    sketchfabName: liveName || title,
    sketchfab: model.uid,
    viewerUrl: sketchfabPage(model),
    thumbnail: sketchfabThumb(model),
    description: "",
    tags: sketchfabTags(model),
    related: [],
    license: remoteLicense(model),
    year: remoteYear(model),
  };
}

function mergeCatalog(packaged, remoteModels) {
  const localModels = Array.isArray(packaged.models) ? packaged.models : [];
  const byUid = new Map(localModels.filter((item) => item.sketchfab).map((item) => [item.sketchfab, item]));
  const usedIds = new Set();
  for (const item of [...localModels, ...(packaged.animations || [])]) {
    if (item && item.id) usedIds.add(item.id);
  }

  const remotes = [];
  const seenUids = new Set();
  for (const remote of remoteModels) {
    const uid = remote && typeof remote.uid === "string" ? remote.uid : "";
    if (!uid || seenUids.has(uid)) continue;
    seenUids.add(uid);
    remotes.push(remote);
  }

  const matchedLocal = new Set();
  const models = [];
  const unmatchedRemote = [];

  for (const remote of remotes) {
    const existing = byUid.get(remote.uid);
    if (existing) {
      matchedLocal.add(existing);
      models.push(applyRemoteModel(existing, remote));
    } else {
      unmatchedRemote.push(remote);
    }
  }

  const leftoverByTitle = new Map();
  for (const item of localModels) {
    if (!item || matchedLocal.has(item) || seenUids.has(item.sketchfab)) continue;
    const key = norm(item.title);
    if (!key) continue;
    leftoverByTitle.set(key, leftoverByTitle.has(key) ? null : item);
  }

  for (const remote of unmatchedRemote) {
    const cleaned = cleanModelTitle(rawSketchfabName(remote));
    const reuse = leftoverByTitle.get(norm(cleaned));
    if (reuse) {
      leftoverByTitle.delete(norm(cleaned));
      models.push(applyRemoteModel(reuse, remote));
    } else {
      models.push(modelFromSketchfab(remote, usedIds));
    }
  }

  return {
    ...packaged,
    models,
    animations: packaged.animations || [],
  };
}

function catalogFingerprint(models) {
  return (models || [])
    .map((item) => `${item.sketchfab || ""}\t${item.title || ""}\t${item.sketchfabName || ""}`)
    .sort()
    .join("\n");
}

function publishCatalog(source) {
  if (!packagedCollection) return;
  state.collection = {
    ...packagedCollection,
    models: liveModels || packagedCollection.models,
    animations: liveAnimations || packagedCollection.animations || [],
  };
  if (state.openId && !findItem(state.openId)) {
    clearModal();
    const hash = state.tab === "animations" ? "#animations" : "#models";
    history.replaceState({ tab: state.tab }, "", hash);
  }
  const hashId = decodeURIComponent(location.hash.replace(/^#/, ""));
  const openedFromHash = hashId && hashId !== "models" && hashId !== "animations" && !state.openId && findItem(hashId);
  if (openedFromHash) {
    syncFromLocation();
    return;
  }
  const affectsVisible = source === "models"
    ? state.tab === "models" || Boolean(state.query)
    : state.tab === "animations" || Boolean(state.query);
  if (affectsVisible) render();
}

function loadYouTubeAPI() {
  if (window.YT && window.YT.Player) return Promise.resolve();
  if (loadYouTubeAPI.pending) return loadYouTubeAPI.pending;
  loadYouTubeAPI.pending = new Promise((resolve, reject) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previous === "function") previous();
      resolve();
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = () => reject(new Error("YouTube player did not load"));
    document.head.append(script);
  });
  return loadYouTubeAPI.pending;
}

// The playlist feed itself is not readable from the page. The player reports
// the video ids, and oEmbed reports each public title.
function playlistVideoIds(playlistId) {
  const holder = document.createElement("div");
  holder.style.cssText = "position:absolute;width:320px;height:180px;left:0;top:0;opacity:0;pointer-events:none;overflow:hidden";
  holder.setAttribute("aria-hidden", "true");
  const mount = document.createElement("div");
  holder.append(mount);
  document.body.append(holder);

  return new Promise((resolve, reject) => {
    let player;
    let settled = false;
    const timer = setTimeout(() => finish(new Error("YouTube playlist timed out")), 12000);

    function cleanup() {
      clearTimeout(timer);
      try {
        if (player && player.destroy) player.destroy();
      } catch {
        // The probe player is discarded either way.
      }
      holder.remove();
    }

    function finish(error, ids) {
      if (settled) return;
      settled = true;
      cleanup();
      if (error) reject(error);
      else resolve(ids);
    }

    function accept(list) {
      const clean = [];
      const seen = new Set();
      for (const id of list || []) {
        if (!/^[A-Za-z0-9_-]{11}$/.test(id) || seen.has(id)) continue;
        seen.add(id);
        clean.push(id);
        if (clean.length >= 50) break;
      }
      if (!clean.length) return false;
      finish(null, clean);
      return true;
    }

    const playerVars = {
      listType: "playlist",
      list: playlistId,
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      rel: 0,
      playsinline: 1,
    };
    if (location.protocol !== "file:") playerVars.origin = location.origin;

    player = new YT.Player(mount, {
      width: "320",
      height: "180",
      host: "https://www.youtube-nocookie.com",
      playerVars,
      events: {
        onReady(event) {
          try {
            event.target.mute();
            event.target.pauseVideo();
          } catch {
            // Muting the hidden probe is best-effort.
          }
          if (accept(event.target.getPlaylist())) return;
          try {
            event.target.cuePlaylist({ listType: "playlist", list: playlistId, index: 0 });
          } catch {
            // A later state change can still report the playlist.
          }
        },
        onStateChange(event) {
          try {
            accept(event.target.getPlaylist());
          } catch {
            // The probe can report a state after it has been discarded.
          }
        },
        onError(event) {
          console.warn("YouTube playlist player", event && event.data);
        },
      },
    });
  });
}

async function youtubeDetails(videoId) {
  const endpoint = new URL("https://www.youtube.com/oembed");
  endpoint.searchParams.set("url", `https://www.youtube.com/watch?v=${videoId}`);
  endpoint.searchParams.set("format", "json");
  const response = await fetch(endpoint, { signal: requestTimeout(12000) });
  if (!response.ok) throw new Error(`YouTube responded ${response.status}`);
  return response.json();
}

function animationFromYouTube(video, usedIds) {
  const title = String(video.title || "").replace(/\s+/g, " ").trim().slice(0, 140) || "YouTube animation";
  const author = String(video.author_name || "").replace(/\s+/g, " ").trim().slice(0, 80);
  const thumb = typeof video.thumbnail_url === "string" && video.thumbnail_url.startsWith("https://")
    ? video.thumbnail_url
    : `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
  return {
    id: catalogId(title, video.id, usedIds),
    kind: "animation",
    title,
    youtube: video.id,
    youtubeAuthor: author,
    embed: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.id)}?rel=0&cc_load_policy=1`,
    thumbnail: thumb,
    description: "",
    tags: [],
    related: [],
  };
}

function mergeAnimations(packaged, videos) {
  const local = Array.isArray(packaged.animations) ? packaged.animations : [];
  const byId = new Map(local.filter((item) => item.youtube).map((item) => [item.youtube, item]));
  const usedIds = new Set();
  for (const item of [...(packaged.models || []), ...local]) {
    if (item && item.id) usedIds.add(item.id);
  }
  const animations = [];
  const seen = new Set();
  for (const video of videos) {
    if (!video.id || seen.has(video.id)) continue;
    seen.add(video.id);
    const existing = byId.get(video.id);
    animations.push(existing || animationFromYouTube(video, usedIds));
  }
  return animations;
}

async function refreshAnimations() {
  const playlistId = packagedCollection && packagedCollection.youtubePlaylist;
  if (!playlistId || !/^[A-Za-z0-9_-]{10,80}$/.test(playlistId)) return;
  animationsStatus = "loading";
  if (state.tab === "animations" && !(state.collection.animations || []).length) render();
  try {
    await loadYouTubeAPI();
    const ids = await playlistVideoIds(playlistId);
    const details = await Promise.all(ids.map(async (id) => {
      try {
        return { id, ...(await youtubeDetails(id)) };
      } catch (error) {
        console.warn("YouTube title was not loaded", error);
        return { id };
      }
    }));
    liveAnimations = mergeAnimations(packagedCollection, details);
    animationsStatus = "ready";
    publishCatalog("animations");
    console.info(
      `YouTube playlist updated. ${liveAnimations.length} animations.`,
      liveAnimations.map((item) => item.title),
    );
  } catch (error) {
    animationsStatus = "failed";
    console.warn("YouTube playlist was not refreshed. Showing the animations saved with this folder.", error);
    if (state.tab === "animations") render();
  }
}

async function refreshFromSketchfab() {
  if (!packagedCollection) return;
  try {
    const remote = await fetchSketchfabModels();
    if (!remote.length) return;
    const merged = mergeCatalog(packagedCollection, remote);
    const previous = liveModels || packagedCollection.models;
    if (catalogFingerprint(merged.models) === catalogFingerprint(previous)) return;
    const added = merged.models.filter((item) => !(previous || []).some((local) => local.sketchfab === item.sketchfab));
    const removed = (previous || []).filter((item) => !merged.models.some((next) => next.sketchfab === item.sketchfab));
    liveModels = merged.models;
    publishCatalog("models");
    console.info(
      `Sketchfab collection updated. ${merged.models.length} models, ${added.length} added, ${removed.length} removed.`,
      merged.models.map((item) => item.title),
    );
  } catch (error) {
    console.warn("Sketchfab collection was not refreshed. Showing the models saved with this folder.", error);
  }
}

function collectionErrorText() {
  if (location.protocol === "file:") {
    return "The model list did not load. Unzip the whole project folder, then open index.html from inside that folder. The data folder has to sit next to index.html.";
  }
  return "The model list did not load. Start the local server in the folder that contains index.html, then open http://127.0.0.1:8094/.";
}

async function init() {
  try {
    state.collection = await loadCollection();
    packagedCollection = state.collection;
    if (state.collection.collectionUrl) collectionLink.href = state.collection.collectionUrl;
    if (!location.hash) history.replaceState({ tab: "models" }, "", "#models");
    syncFromLocation();
    refreshFromSketchfab();
    refreshAnimations();
  } catch (error) {
    heading.textContent = "Anatomy Models";
    emptyEl.hidden = false;
    emptyEl.textContent = collectionErrorText();
    statusEl.textContent = emptyEl.textContent;
    console.error(error);
  }
}

init();
