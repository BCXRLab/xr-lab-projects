# XR Math Plot

Plot parametric 3D curves, walk around them in a browser, and step into VR to fly the same graph at scale.

Live site: [https://bcxrlab.github.io/xr-lab-projects/xr-math-plot/](https://bcxrlab.github.io/xr-lab-projects/xr-math-plot/)

Bellevue College XR Lab — immersive learning resource for space curves and multivariable thinking.

---

## What this project is

Students type a parametric function

```text
r(t) = (x(t), y(t), z(t))
```

and the app draws it as a colored path on a 3D grid. You can add several segments (piecewise curves), plot them together, then either **free-fly** through the graph or **ride a vehicle** along the path.

The same scene runs in a desktop browser and in a WebXR headset (Quest and other WebXR browsers).

---

## How to use it

### Open the experience

1. Visit the [live site](https://bcxrlab.github.io/xr-lab-projects/xr-math-plot/) over **HTTPS** (required for VR).
2. Use a current Chromium browser (Chrome, Edge, or the Meta Quest browser).
3. On desktop, start in the left panel. In a headset, tap **Enable VR**.

This folder is the published site. You do not need Node or a local server to try it on GitHub Pages.

### Desktop

| Action | Control |
|--------|---------|
| Look | Hold **right mouse button** and drag |
| Move | **W A S D** |
| Sprint | **Shift** |
| Up / down | **Space** / **Ctrl** |
| Ride or leave the vehicle | **V** |
| Stop movement | **Esc** |

Type in an equation field first if you need the keyboard for math — movement keys are ignored while a text field is focused.

### VR (WebXR)

| Action | Control |
|--------|---------|
| Walk | Left thumbstick |
| Snap turn | Right thumbstick |
| Teleport | Click (press) a thumbstick, aim, release |
| Fly | Hold **trigger** and aim |
| Hover / brake | **Grip** |
| Open or close the menu | **X** or **A** |
| Reset view | **B** or **Y** |
| Plot / ride / scale | Use the in-world menu (laser + trigger) |

Use physical controllers. Hand tracking is ignored on purpose so locomotion stays predictable.

---

## Features and how to use them

### Parametric segments

Each row is one piece of the curve:

- **r(t) = (x, y, z)** — three math expressions in parentheses, comma-separated. Example: `(t, sin(t), 0.5*t)`
- **t min / t max** — the parameter interval for that piece
- **+ Segment** — add another colored piece
- **×** — remove a piece (at least one must remain)

Expressions are evaluated with [mathjs](https://mathjs.org/). Common functions work: `sin`, `cos`, `tan`, `sqrt`, `abs`, `exp`, `log`, `pi`, powers (`t^2`), and so on.

The default example is a two-piece path (a line, then a helix-like bend) so you can plot immediately.

**Tips**

- Keep pieces continuous by matching the end of one interval to the start of the next (`t max` of segment 1 = `t min` of segment 2).
- Large `t` ranges grow the grid. Start small, then increase.

### Plot curve

**Plot curve** samples each segment, rebuilds the 3D path, and fits the axes/grid around the result.

The grid grows with the plot (within a min/max size). Axis scale numbers can be toggled on the left panel.

If an expression is invalid, the status line explains the error (usually a missing parenthesis or a bad function name).

### Ride vehicle

**Ride vehicle** puts you on a small craft that follows the plotted path. Use this to feel arc length, speed, and how the tangent turns.

- Desktop: **Ride vehicle** or **V**
- VR: **Ride vehicle** on the menu
- **Free fly** leaves the path and returns to normal locomotion

You need a successful plot before riding.

### Grid Cube (scene scale)

The **Grid Cube** resizes the whole plotted world without changing the math.

- **Desktop:** drag toward or away from the cube center. **Reset scale** returns to default.
- **VR:** open the menu, then pinch/scale the glass cube with two hands.

Use this when a graph feels too small or too large in the room.

### Play volume and comfort

A hidden play volume surrounds the grid. Near the edges, wall panels fade in so you can tell you are leaving the plot. Flying into the ceiling is blocked with a small head-clearance gap. Falling far below the grid respawns you back into the volume.

### VR menu

The headset menu is a 3D panel of the same plot tools: segments, **Plot curve**, **Ride vehicle**, **Free fly**, and the Grid Cube. Point a controller laser and pull the trigger. Equation editing is easier on desktop; plot and ride work well in VR.

---

## Technology

| Piece | Role |
|-------|------|
| [Three.js](https://threejs.org/) | 3D scene, materials, WebGL renderer |
| [WebXR](https://immersive-web.github.io/webxr/) | Immersive VR session, controllers |
| [mathjs](https://mathjs.org/) | Parse and evaluate parametric expressions |
| [Vite](https://vitejs.dev/) | Dev server and production build |

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
npx vite build --base /xr-lab-projects/xr-math-plot/
```

Copy the contents of `dist/` into `xr-math-plot/` on the `main` branch.

WebXR requires **localhost** or **HTTPS**. GitHub Pages already provides HTTPS.

---

## Suggested classroom path

1. Open the live site and press **Plot curve** on the default segments.
2. Change one axis (try `sin(t)` or `t^2`) and plot again.
3. Add a second segment and match the `t` intervals.
4. Ride the vehicle, then free-fly around the same curve.
5. Put on a headset, open the menu, plot, and walk the graph in VR.

---

## Credits

Developed through the Bellevue College XR Lab as an open educational WebXR resource.
