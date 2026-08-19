# WebXR Accessibility Design

An interactive lab for designing **accessible VR applications**. Walk a ring of feature stations in the desktop browser or in **Enter VR** (WebXR). The same scene and the same settings apply in both modes.

Live site: [https://bcxrlab.github.io/xr-lab-projects/webxr-accessibility-design/](https://bcxrlab.github.io/xr-lab-projects/webxr-accessibility-design/)

Bellevue College XR Lab — teaching sandbox for inclusive immersive design.

---

## What this project is

Accessibility in VR is hard to learn from a checklist. This project is a **design sandbox**: toggle a feature, walk to its station, and feel what changes — contrast, captions, comfort, audio, haptics, one-handed input, and more.

It is a demonstration lab, not a full WCAG / XR audit tool.

---

## How to use it

### Open the experience

1. Visit the [live site](https://bcxrlab.github.io/xr-lab-projects/webxr-accessibility-design/) over **HTTPS** (required for VR).
2. Use a current Chromium browser (Chrome, Edge, or the Meta Quest browser).
3. Use the left **Accessibility settings** panel, or walk the room and select stations.

This folder is the published site. You do not need Node or a local server to try it on GitHub Pages.

### Desktop

| Action | Control |
|--------|---------|
| Look | Hold **right-click** and drag |
| Move | **W A S D** |
| Turn | **Q** / **E** |
| Select a station | Click it |
| Teleport (if move mode is Teleport) | **T** |

A skip link at the top jumps to the settings panel. The desktop chrome uses semantic HTML and ARIA.

### VR (WebXR)

| Action | Control |
|--------|---------|
| Enter VR | **Enter VR** button (bottom right) |
| Move | Left thumbstick |
| Snap or smooth turn | Right thumbstick (depends on **Turn mode**) |
| Select | Trigger |
| Teleport (if enabled) | Trigger while aiming |

Settings you change on desktop carry into the VR session for that visit.

---

## Features and how to use them

Use the left panel, or walk to a station and select it. Stations demo current XR accessibility practice.

| Feature | What it does | How to try it |
|---------|----------------|---------------|
| **High contrast** | Stronger UI and object contrast | Toggle, then look at stations and the panel |
| **Color vision support** | Safer palettes plus patterns (not color alone) | Choose Deuteranopia, Protanopia, or Tritanopia |
| **UI / text scale** | Larger HUD and world labels | Drag the scale slider |
| **Captions** | On-screen text for audio and interaction events | Enable, then play the voice briefing |
| **Audio cues** | Earcons for focus, select, and success | Enable, then select stations |
| **Spatial audio assist** | Louder cues and optional beacon pings toward stations | Enable, then listen while you turn |
| **Mono audio** | Collapse stereo so cues are not ear-dependent | Toggle with audio cues on |
| **Haptic intensity** | Controller vibration strength | Best in VR; set 0 to turn off |
| **Turn mode** | Snap or smooth turn | Compare in VR with the right stick |
| **Move mode** | Continuous walk or teleport | Teleport: **T** on desktop, trigger in VR |
| **Comfort vignette** | Darken the periphery while moving | Toggle, then walk |
| **Reduced motion** | Less idle animation and float | Toggle and watch the room |
| **Focus indicators** | Thick outline / glow on targets | Hover or aim at a station |
| **Screen reader announce** | Desktop live region for status changes | Enable and change a setting with a screen reader |
| **Seated mode / eye height** | Lower or fine-tune camera height | Toggle seated, or set height in meters |
| **One-handed + dominant hand** | Prefer one controller for select / move hints | Enable, pick left or right |
| **Dwell assist** | Hover or aim to select without a click | Enable, then rest the pointer on a station |
| **Object labels** | Names above interactables | Toggle to show or hide |
| **Readable font** | More dyslexia-friendly desktop chrome | Toggle on the panel |

### Extra panel actions

- **Play voice briefing** — spoken intro; captions show the same lines if captions are on
- **Reset defaults** — restore the starting settings
- **Announce in view** — speak / caption what is currently in front of you

Walk the ring, select the center **About** kiosk anytime to hear why the lab exists.

---

## Technology

| Piece | Role |
|-------|------|
| [Three.js](https://threejs.org/) | 3D lab room, stations, renderer |
| [WebXR](https://immersive-web.github.io/webxr/) | Immersive VR session and controllers |
| [Vite](https://vitejs.dev/) | Dev server and production build |
| Semantic HTML + ARIA | Desktop panel, skip link, live region, captions |

No backend. After the production build, the site is static files (this folder).

---

## Local development (maintainers)

The working source lives outside this published folder. From the Vite project:

```bash
npm install
npm run dev
```

Build for this GitHub Pages path:

```bash
npx vite build --base /xr-lab-projects/webxr-accessibility-design/
```

Copy the contents of `dist/` into `webxr-accessibility-design/` on the `main` branch.

WebXR requires **localhost** or **HTTPS**. GitHub Pages already provides HTTPS.

---

## Credits

Developed through the Bellevue College XR Lab as an open educational WebXR resource.
