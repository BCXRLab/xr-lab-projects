# Harlem Renaissance

Walk a Harlem apartment and the Cotton Club in the browser or in VR. Gold markers open stories, films, documents, and links from the Harlem Renaissance — artists, writers, and the Cotton Club itself.

Live site: [https://bcxrlab.github.io/xr-lab-projects/harlem-renaissance/](https://bcxrlab.github.io/xr-lab-projects/harlem-renaissance/)

Bellevue College XR Lab — immersive humanities learning resource.

---

## What this is for

This is a **walkable WebXR tour** of two reconstructed interiors. Learners move at human scale, walk up to gold markers, and open short panels that point to primary sources (films, essays, a literary magazine). The goal is to **be in the space** — apartment rooms, the Cotton Club sidewalk and stage — rather than only reading about it.

Two rooms share one URL:

1. **Harlem Apartment** — living space with stories on FIRE!!, Jacob Lawrence, Aaron Douglas, Richard Bruce Nugent, *Black and Tan* (1929), and a doorway to the Cotton Club  
2. **The Cotton Club** — sidewalk, interior, and stage, with Strange Fruit (Library of Congress essay and a performance film), a Langston Hughes essay, and a return portal to the apartment  

---

## Devices and platforms

One link: [https://bcxrlab.github.io/xr-lab-projects/harlem-renaissance/](https://bcxrlab.github.io/xr-lab-projects/harlem-renaissance/)

| Device | How you play | Notes |
|--------|----------------|-------|
| **Web (browser)** | Open the live site | Static GitHub Pages. No install. HTTPS is required for VR. |
| **Desktop** (Windows, macOS, Linux) | Chrome or Edge | WASD, right-click look, click gold markers. |
| **Laptop** | Same as desktop | Trackpad: hold right-click (or two-finger click) to look. |
| **Mobile** (phone) | Chrome | Left stick to move, swipe to look, tap markers. Compact HUD. |
| **Tablet** | Chrome | Same as mobile. |
| **VR headset** (Meta Quest Browser, other WebXR browsers) | Open the **same URL**, tap **Enter VR** | Left stick walk, right stick turn, trigger to select, teleport. |

**Recommended:** Chrome or Edge on a computer, or Quest Browser in the headset. First load can take a minute (apartment model is large).

---

## How to use it

### Open the experience

1. Visit the [live site](https://bcxrlab.github.io/xr-lab-projects/harlem-renaissance/) over **HTTPS** (required for VR).
2. Start in the **Harlem Apartment**. Use the bottom buttons (or the doorway portal) to visit **The Cotton Club**.
3. Walk up to a **gold marker** for a story, film, document, or link.

This folder is the published site. You do not need Node to play it on GitHub Pages.

### Desktop

| Action | Control |
|--------|---------|
| Move | **W A S D** |
| Look | Arrow keys, or hold **right mouse** and drag |
| Turn | **Q / E** |
| Run | **Shift** |
| Jump | **Space** |
| Open a story | Walk to a gold marker, or click it |
| Close a panel | **×**, click the pin again, or **Esc** |
| Switch rooms | Bottom **Apartment / Cotton Club** buttons |
| Accessibility | Gear (top right) — contrast, text size, readable font, reduced motion |
| Hide HUD | **H**, or Hide (turn the shortcut off in settings) |

Skip links jump to room navigation and to accessibility settings. The same accessibility settings apply in VR. There is no in-world camera zoom.

### Phone / tablet

| Action | Control |
|--------|---------|
| Move | Left virtual stick |
| Look | Swipe on the view |
| Select | Tap a gold marker |
| Rooms | Buttons along the bottom center |

### VR (WebXR)

| Action | Control |
|--------|---------|
| Enter VR | **Enter VR** (same URL, Quest browser) |
| Move | Left thumbstick |
| Snap turn | Right thumbstick |
| Select | Trigger on a marker or panel |
| Teleport | Aim and trigger teleport |
| Close a panel | Panel **×**, or trigger the pin again |

Films and PDFs play in the **desktop browser**. In the headset, panels include a short note: exit VR and watch or read on desktop. Websites open in the system browser.

---

## Features

| Feature | How to use it |
|---------|----------------|
| **Two walkable rooms** | Apartment and Cotton Club; portals and room buttons to switch. |
| **Gold story markers** | Walk up, click, or tap. Click another pin to switch stories. |
| **YouTube in the room (desktop)** | *Black and Tan* and Strange Fruit play in a floating player. |
| **Documents** | PDFs open in the browser (Library of Congress essay; Hughes essay). |
| **Web links** | Preview card plus **Open website** (FIRE!!, artist sites). |
| **Kitchen fridge** | Period fridge in the apartment kitchen (small extracted model). |
| **Accessibility** | Skip link, live announcements, keyboard room list, Esc to close. |
| **Same URL everywhere** | Laptop, phone, and headset share one HTTPS link. |

---

## Technology

| Piece | Role |
|-------|------|
| [Three.js](https://threejs.org/) | Rooms, lighting, collision |
| [WebXR](https://immersive-web.github.io/webxr/) | Immersive VR session and controllers |
| [Vite](https://vitejs.dev/) | Production build (this folder is the output) |
| Sketchfab GLBs | Harlem apartment and Cotton Club interiors |
| YouTube embed (desktop) | Official iframe player for course films |

No backend. After the production build, the site is static files.

---

## Local development (maintainers)

The working source lives outside this published folder. From the Vite project:

```bash
npm install
npm run dev
```

Build for this GitHub Pages path:

```bash
npx vite build --base /xr-lab-projects/harlem-renaissance/
```

Copy the contents of `dist/` (including `Models/` and `content/`) into `harlem-renaissance/` on the `main` branch. Do **not** copy `HarlemAparment1.glb` (over GitHub’s 100 MB file limit). The live fridge is `HarlemFridge.glb`.

WebXR requires **localhost** or **HTTPS**. GitHub Pages already provides HTTPS.

---

## Credits

Developed through the Bellevue College XR Lab for humanities teaching.

**Co-Developers:** David Wikstrom and Maria Sanchez Isaza

Story links point to public sources (Library of Congress, YouTube, museum and artist sites). Panel copy is kept educational and classroom-safe.

Furniture and props in both interiors were assembled from Sketchfab assets. Credit the original creators:

### Cotton Club (Sketchfab)

- Literary Club Chair — IU Indianapolis University
- Vintage microphone — Klasy
- Velvet rope — UolterUait
- Saloon piano — Adrian H
- bar chair round 01 4k — mohamedhussien
- Rusty Vintage Round Table — Nikoleta.Zhecheva
- Whiskey JB — Rylae Shylna
- Trumpet — Charlie Tinley
- Cotton club exterior — The Center for Digital Humanities UArizona
- Bar counter — Adam
- Piano Stool Low — RubaQewar
- Wine rug — Anom Purple Modelling
- Ash tray — James Nelson
- Round table and Chairs — Vilson Pistori

### Apartment (Sketchfab)

- Literary Club Chair — IU Indianapolis University
- Phonograph — tency
- Antique Globe — Matthew Collings
- His Master’s Voice 101 suitcase gramophone — Museum of Engineering and Technology, Krakow
- Side table lowpoly — Renee B
- Persian Rug — Nicholas Record
- Wall Sconce - Arandela — mismeirart
- Clock — peachybunny
- Wooden Center Table — oisougabo
- Table and Chairs — Vilson Pistori
- Floral Plate — IU Indianapolis University Library
- Coal-fired cooker model 61 — Museum of Engineering and Technology, Krakow
- Victorian kitchen sink — Tijerín Art Studio
- Wine Rug — Anom Purple Modelling
- Side Table Dresser — Ryan_Nein
- Vintage Books — Feivelyn
- Victorian Bed — Abdullah Mohammed
- Victorian Vanity — Javier Carceller
- OXFORD cast-iron radiator, larger version (710) — termagroup
- Dining Room Side Table — IU Indianapolis University Library
- Vintage Framed Art and Photos — NZP3D
- Kitchen Dresser — rjducats
- Ornate Mirror 01 4k — mohamedhussien
- Bathtub — 3ddominator
- Sink — lagesnpiet
- Wall picture — grafgrial
- Picture frame — hako
- Large Framed Picture [WOOD] — Lonit
