# Ocean Acidification Tour

A guided **WebXR 360° tour** about ocean acidification — eight rooms of video, documents, student art, and an interactive Pacific Northwest oyster model. Explore in a desktop browser or in a headset.

Live site: [https://bcxrlab.github.io/xr-lab-projects/ocean-acidification-tour/](https://bcxrlab.github.io/xr-lab-projects/ocean-acidification-tour/)

Bellevue College XR Lab — immersive oceanography learning resource.

---

## What this project is

Learners move through a sequence of 360° rooms:

1. **Start Here** — opening message on oceans, the Pacific Coast, and Puget Sound  
2. **Why Care** — why ocean acidification matters  
3. **What Is Ocean Acidification** — the chemistry, with supporting media  
4. **Ocean Acidification Worldwide** — global context  
5. **Pacific Northwest** — regional story plus interactive oyster shells  
6. **Voices of Action** — community and campus action  
7. **Student Artwork** — gallery of student work  
8. **Learn More** — further resources  

Each room is a panoramic space with hotspots. Select a hotspot (or use the contents list) to open a world-space panel.

---

## How to use it

### Open the experience

1. Visit the [live site](https://bcxrlab.github.io/xr-lab-projects/ocean-acidification-tour/) over **HTTPS** (required for VR).
2. Use a current Chromium browser (Chrome, Edge, or the Meta Quest browser).
3. Look around, open hotspots, and move room to room from the navigation list.

This folder is the published site. You do not need Node or a local server to try it on GitHub Pages.

### Desktop

| Action | Control |
|--------|---------|
| Look | Arrow keys, or hold **left or right mouse button** and drag |
| Open a hotspot | Click it, or use the contents list |
| Next / previous room | Room buttons in the HUD |
| Close a panel | **Esc** or the panel **×** |
| Keyboard | **Tab** through room and content controls · **Enter** to activate |

Ambient audio can be toggled from the HUD (on by default).

### VR (WebXR)

| Action | Control |
|--------|---------|
| Enter VR | **Enter VR** (browser WebXR button) |
| Look | Headset |
| Select | Controller trigger / laser |
| Close a panel | Panel **×** |
| Move between rooms | Room navigation on the HUD / in-world title |

### 360 videos (Laura James, Room 5)

The preferred player maps a local equirectangular MP4 onto the room sphere so you can look around with the tour controls (and in VR). Those files are too large for GitHub, so this hosted site **falls back to YouTube 360**:

1. Open **Salish Sea by Laura James**
2. Choose a clip and press **Enter 360° experience**
3. **Click the YouTube video**, then **drag** to look around
4. **Esc** or **Exit 360°** returns to the room

In a headset on this hosted site, exit VR and use desktop mode for those 360 clips. PDFs, images, quotes, the art gallery, and the oyster model still work in VR.

---

## Features and how to use them

| Feature | How to use it |
|---------|----------------|
| **360° rooms** | Look around each panorama. The skybox is the room. |
| **Hotspots** | Glowing markers. Select one to open its panel. |
| **Room navigation** | Jump to any of the eight rooms from the list. |
| **World-space panels** | Quotes, documents, galleries, and videos appear in front of you. |
| **YouTube on desktop** | Video panels embed YouTube in the desktop browser. |
| **PDF / document pages** | Document hotspots show page images you can step through. |
| **Student art gallery** | Room 7 — step through titled works with artist credit. |
| **Oyster viewer (Room 5)** | Compare oyster types; open split shells; toggle labels. In VR you can grab shells. |
| **Ambient audio** | Soft background track; mute from the HUD if you prefer. |
| **Accessibility** | Skip link, live announcements, keyboard access, VR captions where used. |

---

## Technology

| Piece | Role |
|-------|------|
| [Three.js](https://threejs.org/) | Panorama spheres, models, WebGL |
| [WebXR](https://immersive-web.github.io/webxr/) | Immersive VR session and controllers |
| [Vite](https://vitejs.dev/) | Dev server and production build |
| YouTube embed (desktop) | Official iframe player for course videos |
| GLTF oyster models | Room 5 comparison viewer |

No backend on the live site. After the production build, this folder is static files.

---

## Local development (maintainers)

The working source lives outside this published folder. From the Vite project:

```bash
npm install
npm run dev
```

Build for this GitHub Pages path:

```bash
npx vite build --base /xr-lab-projects/ocean-acidification-tour/
```

Copy the contents of `dist/` (including `content/` and `audio/`) into `ocean-acidification-tour/` on the `main` branch. Omit large local 360 MP4 masters; they exceed GitHub file limits.

WebXR requires **localhost** or **HTTPS**. GitHub Pages already provides HTTPS.

---

## Credits

Oceanography content and media were assembled for teaching through the Bellevue College XR Lab. Student artwork remains credited to the listed artists. Ambient track: MickeysCat — *Moment of Peace* (Pixabay).
