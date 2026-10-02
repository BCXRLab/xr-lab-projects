# Anatomy XR Collection

Browse student anatomy models and disease animations from Bellevue College anatomy classes. Search by name, open a 3D model, or play an animation.

Live site: [https://bcxrlab.github.io/xr-lab-projects/anatomy/](https://bcxrlab.github.io/xr-lab-projects/anatomy/)

Bellevue College XR Lab — interactive 3D learning resource for anatomy.

---

## What this is for

This is a **browser catalog** of student-created anatomy models and disease animations. Students provide the research and content. The XR Lab helps scan, create, and prepare the interactive resources.

On the **Anatomy Models** tab, search or browse thumbnail cards and open a Sketchfab viewer. On the **Animations** tab, play disease animations from the lab’s public YouTube playlist. The 3D viewer and the videos need an internet connection. The packed model list still shows if Sketchfab or YouTube cannot be reached.

---

## Devices and platforms

One link: [https://bcxrlab.github.io/xr-lab-projects/anatomy/](https://bcxrlab.github.io/xr-lab-projects/anatomy/)

| Device | How you use it | Notes |
|--------|----------------|-------|
| **Web (browser)** | Open the live site | Static GitHub Pages. No install. |
| **Desktop** (Windows, macOS, Linux) | Chrome, Edge, or Firefox | Search, open a card, orbit the Sketchfab model. |
| **Laptop** | Same as desktop | Same as desktop. |
| **Mobile** (phone) | Current browser | Touch the cards and the Sketchfab / YouTube popups. |
| **Tablet** | Current browser | Same as mobile; more room for the grid. |

This project is a **browser catalog** (Sketchfab embeds and YouTube). It does not use WebXR / Enter VR.

---

## How to use it

### Open the experience

1. Visit the [live site](https://bcxrlab.github.io/xr-lab-projects/anatomy/).
2. Stay on **Anatomy Models** to search and open a 3D model, or switch to **Animations** for the disease playlist.

This folder is the published site. Students using the live URL do not need a local server.

### Anatomy Models

- Type in the search field to filter cards. One letter keeps names that start with that letter. Longer terms match anatomy names and related words (`heart`, `cardiac`, `cardio`).
- Click a card to open the Sketchfab model in a popup. Escape, the X, or the dark background closes it.
- A hash on the URL opens a model directly, for example [https://bcxrlab.github.io/xr-lab-projects/anatomy/#copd](https://bcxrlab.github.io/xr-lab-projects/anatomy/#copd).

### Animations

The Animations tab follows the public playlist **Diseases** on [XR Lab @ Bellevue College](https://www.youtube.com/playlist?list=PLEVMW4XhQcYw). Videos added there appear on a visit. Videos removed there leave after a successful check. Click a card to play it.

YouTube captions play when that upload already has a caption track.

### Accessibility

The gear at the top right opens page settings: text size, extra line spacing, readable font, high contrast, reduce motion, and stronger focus. Links stay underlined. Choices stay in this browser (`localStorage` key `anatomy-a11y`). They apply to this catalog only.

---

## Features

| Feature | How to use it |
|---------|----------------|
| **Search** | Filter while typing. One letter matches the start of the visible title. |
| **Sketchfab models** | Packed cards load immediately. The public [anatomy collection](https://sketchfab.com/bcxrlab/collections/anatomy-ae6b494a53204254928d190251ac8c43) is checked on each HTTPS visit. |
| **Disease animations** | Animations tab follows the [Diseases playlist](https://www.youtube.com/playlist?list=PLEVMW4XhQcYw). |
| **Deep links** | `#copd` and other model ids open that popup. |
| **Accessibility gear** | Text size, spacing, readable font, contrast, reduced motion, stronger focus. |

---

## Technology

| Piece | Role |
|-------|------|
| HTML / CSS / JavaScript | Catalog, search, popups, accessibility menu |
| Sketchfab embed | 3D model viewer in the popup |
| YouTube IFrame Player / oEmbed | Animations tab playlist and titles |
| Packed data | `data/collection.js` (and `data/collection.json` as fallback) plus `thumbs/` |

No backend. The site is static files. On HTTPS, the visitor’s browser checks Sketchfab and YouTube; the published JSON is not rewritten.

---

## Local preview (maintainers)

`TESTING.md` in this folder is the local check (unzip, double-click versus a small HTTP server, letter search, `#copd`, the gear).

From this folder:

```powershell
python -m http.server 8094
```

Then open http://127.0.0.1:8094/. Double-clicking `index.html` still shows the packed models. The Animations playlist check needs http, not `file://`.

---

## Credits

Developed through the Bellevue College XR Lab as an open educational 3D learning resource.

**Co-Developers:** Maria Sanchez Isaza and David Wikstrom  
**Faculty partner:** Reza Forough

3D models: [bcxrlab anatomy collection on Sketchfab](https://sketchfab.com/bcxrlab/collections/anatomy-ae6b494a53204254928d190251ac8c43).

Disease animations: [Diseases playlist](https://www.youtube.com/playlist?list=PLEVMW4XhQcYw), XR Lab @ Bellevue College.
