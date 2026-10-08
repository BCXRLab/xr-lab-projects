# Wing Chun: Siu Nim Tau

An interactive 3D learning resource for the Wing Chun **Siu Nim Tau** form. Study each technique from different angles, step through the sequence at your own pace, or drag the timeline to review any part of the form.

Live site: [https://bcxrlab.github.io/xr-lab-projects/wing-chun/](https://bcxrlab.github.io/xr-lab-projects/wing-chun/)

Bellevue College XR Lab — interactive 3D learning resource for Wing Chun and self-defense instruction.

---

## What this project is

Siu Nim Tau is the first form in Wing Chun. Students use it to build structure, timing, and the basics of this **self-defense** system. The viewer is a study aid: learn each movement, review the sequence, and see the form from any angle.

This version uses the **faculty-provided movement timing** and a simplified **single-card** interface.

Learners watch an animated 3D character perform Siu Nim Tau. The left side of the card shows the current movement name, number, and description. The right side is the model. Playback follows the original animation speed; the current movement is highlighted automatically as the clip plays.

There are **72 movements** in the sequence (about 1:55 of animation).

---

## Devices and platforms

One link: [https://bcxrlab.github.io/xr-lab-projects/wing-chun/](https://bcxrlab.github.io/xr-lab-projects/wing-chun/)

| Device | How you use it | Notes |
|--------|----------------|-------|
| **Web (browser)** | Open the live site | Static GitHub Pages. No install. |
| **Desktop** (Windows, macOS, Linux) | Chrome, Edge, or Firefox | Click-drag rotate, scroll zoom, right-click pan. |
| **Laptop** | Same as desktop | Trackpad: two-finger scroll to zoom; right-click (or two-finger click) to pan. |
| **Mobile** (phone) | Current browser | Touch rotate and pinch zoom on the model. |
| **Tablet** | Current browser | Same as mobile; more room for the card. |

This project is a **browser 3D viewer** (Google `<model-viewer>`). It does not use WebXR / Enter VR.

---

## How to use it

### Open the experience

1. Visit the [live site](https://bcxrlab.github.io/xr-lab-projects/wing-chun/).
2. Wait for the model to load, then play, pause, or jump to a movement.

This folder is the published site. You do not need Node to try it on GitHub Pages.

### Interface

Everything lives on one card:

- **Left:** current movement name, number (`Movement N of 72`), and a short description.
- **Right:** interactive 3D model.
- **Bottom of the same card:** timeline, Previous / Play-Pause / Next, a **Jump to movement** dropdown, and nearby-movement buttons (the current step stays in the middle of that list when possible).

The current movement is highlighted automatically while the animation plays. Playback uses the original animation speed.

### 3D controls

| Action | Control |
|--------|---------|
| Rotate | Click + drag (touch drag on phone / tablet) |
| Zoom | Mouse wheel / scroll (pinch on touch) |
| Pan | Right-click + drag |

### Playback

| Action | Control |
|--------|---------|
| Play / pause | **Play** / **Pause** |
| Previous / next movement | **Previous** · **Next** |
| Scrub the form | Drag the timeline |
| Jump to a named movement | **Jump to movement** dropdown, or a nearby-movement button |
| Accessibility | Gear (top right) — contrast, text size, readable font, reduced motion |
| Hide page chrome | **H**, or Hide (turn the shortcut off in settings) |

Skip links jump to playback controls and to accessibility settings. Playback stays at the original form speed; Pause stops the clip.

---

## Features

| Feature | How to use it |
|---------|----------------|
| **72 named movements** | Timing and terminology follow the faculty list, tied to the original animation. |
| **Single-card layout** | Movement copy, 3D model, and transport controls share one view. |
| **Auto highlight** | The left panel and nearby list update as the clip plays. |
| **Original speed** | Playback is not retimed in the page. |
| **Orbit the model** | Rotate, zoom, and pan to study a technique from any angle. |

---

## Technology

| Piece | Role |
|-------|------|
| [model-viewer](https://modelviewer.dev/) | GLB playback, camera controls, lighting |
| HTML / CSS / JavaScript | Single-card UI, timeline, movement list |
| Animated GLB | `models/wing-chun.glb` — Siu Nim Tau character |

No backend. The site is static files.

---

## Local preview (maintainers)

1. Put the final animated GLB at `models/wing-chun.glb`.
2. Open this folder in Visual Studio Code.
3. Use the **Live Server** extension and open `index.html` with Live Server.

A simple static server (any folder HTTP server) also works. Opening the HTML file from disk as `file://` may fail to load the model.

---

## Model note

The website uses **neutral environment lighting**, soft shadows, and controlled exposure. If the character is rotated, offset, deformed, or incorrectly centered, correct the GLB export in **Blender** rather than trying to compensate in the webpage.

---

## Credits

Developed through the Bellevue College XR Lab as an open educational 3D learning resource.

**Lead Developer:** Maria Sanchez Isaza  
**Faculty partner:** Bradley Huggins

Movement timing and terminology were supplied by faculty for the Siu Nim Tau avatar. Times are tied directly to the original animation. Animation finalized and polished with support from Big Picture High School student interns.
