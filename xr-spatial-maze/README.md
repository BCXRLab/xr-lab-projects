# XR Spatial Maze

A spatial-memory maze: walk a full-size layout, remember the structure, then pick the matching miniature. Built for students who need to hold a 3D space in mind — the same skill used when reading a schematic, comparing similar floor plans, or placing components in a volume.

Live site: [https://bcxrlab.github.io/xr-lab-projects/xr-spatial-maze/](https://bcxrlab.github.io/xr-lab-projects/xr-spatial-maze/)

Bellevue College XR Lab — immersive learning resource for spatial understanding.

---

## What this is for

Engineering work often asks you to **see** a layout that is not in front of you: a circuit in a chassis, a building from a plan, two nearly identical assemblies that differ in one corridor or one fastener. This project is a practice ground for that.

An engineering instructor asked for a tool that would help students:

- Notice **fine differences** between similar 3D objects
- Hold a **virtual space** in memory after they have walked it
- Build **spatial understanding** of layouts — components, architecture, or any schematic they will later have to imagine

You explore a maze at human scale, then you must recognize that same maze as a small model among look-alikes. The loop is short, repeatable, and works on **web, desktop, mobile, and VR** from one HTTPS URL.

---

## Devices and platforms

One link: [https://bcxrlab.github.io/xr-lab-projects/xr-spatial-maze/](https://bcxrlab.github.io/xr-lab-projects/xr-spatial-maze/)

| Device | How you play | Notes |
|--------|----------------|-------|
| **Web (browser)** | Open the live site | Static GitHub Pages. No install. HTTPS is required for VR. |
| **Desktop** (Windows, macOS, Linux) | Chrome or Edge | WASD, mouse look, click world panels. Best place to learn the loop. |
| **Laptop** | Same as desktop | Trackpad: hold right-click (or two-finger click) to look. |
| **Mobile** (phone) | Chrome | Left stick to move, swipe to look, tap panels. Compact HUD. |
| **Tablet** | Chrome | Same as mobile; more screen for the maze. |
| **VR headset** (Meta Quest Browser, other WebXR browsers) | Open the **same URL**, tap **Enter VR** | Left stick walk, right stick turn, trigger to select, A/X teleport. |

**Recommended:** Chrome or Edge on a computer, or Quest Browser in the headset. Safari and Firefox can show the 3D maze, but **Enter VR** is most reliable in Chromium-based browsers.

---

## How to use it

### Open the experience

1. Visit the [live site](https://bcxrlab.github.io/xr-lab-projects/xr-spatial-maze/) over **HTTPS** (required for VR).
2. Pick the device you have (table above).
3. Stand on the start platform and pick **Level 1**, **2**, or **3**.

This folder is the published site. You do not need Node or Unity to play it on GitHub Pages.

### Play loop

1. You spawn in a **random maze** for that level. Walk it and learn the layout.
2. After you have gone far enough, return to the start platform.
3. Cycle **Back / Next** through the mini mazes and **Select** the one that matches what you walked.
4. Correct → **Next Level** or **Exit**. Wrong → **Retry** (same maze) or **Exit**.
5. Finishing Level 3 correctly shows **Congratulations**.

Levels: **1** has five mazes, **2** has three, **3** has three. Each round picks one at random.

### Desktop

| Action | Control |
|--------|---------|
| Move | **W A S D** |
| Look | Hold **right mouse** and drag, or **arrow keys** |
| Run | **Shift** |
| Jump | **Space** |
| Select a panel | **Left click** or **F** |
| Hide hints | **H** |

### Phone / tablet

| Action | Control |
|--------|---------|
| Move | Left virtual stick |
| Look | Swipe on the view |
| Select | Tap a world panel |

### VR (WebXR)

| Action | Control |
|--------|---------|
| Enter VR | **Enter VR** (same URL, Quest browser) |
| Move | Left thumbstick |
| Snap turn | Right thumbstick |
| Select | Trigger on a panel |
| Teleport | Hold **A** or **X**, aim, release |

Gameplay UI is in the world so mouse, touch, and controller rays all hit the same panels.

---

## Features

| Feature | How to use it |
|---------|----------------|
| **Human-scale mazes** | Walk the full layout, not a top-down map. |
| **Matching minis** | After exploring, pick the small model that matches the space you just walked. |
| **Three levels** | Increasing layouts; random variant each attempt. |
| **Same URL everywhere** | Laptop, phone, and headset share one HTTPS link. |
| **World-space menus** | Level pick, match, retry, and next are 3D panels in the start zone. |

---

## Technology

| Piece | Role |
|-------|------|
| [Three.js](https://threejs.org/) | Scene, mazes, lighting |
| [WebXR](https://immersive-web.github.io/webxr/) | Immersive VR session and controllers |
| [Vite](https://vitejs.dev/) | Production build (this folder is the output) |
| OBJ maze models | Level 1–3 layouts |

No backend. After the production build, the site is static files.

---

## Credits

Developed through the Bellevue College XR Lab from an engineering-education brief on spatial memory and 3D layout.

**Lead Developer:** David Wikstrom  
**Faculty partner:** Frank Lee

Maze models are original teaching assets. Ambient loop: Kosatka (fair-use teaching clip in `audio/music/`).
