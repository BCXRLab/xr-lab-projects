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
| Accessibility | Gear (top right) — contrast, text size, readable font, reduced motion |
| Hide HUD | **H**, or Hide (turn the shortcut off in settings) |

Skip links jump to room navigation and to accessibility settings. Ambient audio can be toggled from the HUD (on by default). The same accessibility settings apply in VR. The tour is stationary: look and snap only.

### VR (WebXR)

| Action | Control |
|--------|---------|
| Enter VR | **Enter VR** (browser WebXR button) |
| Look | Headset |
| Select | Controller trigger / laser |
| Close a panel | Panel **×** |
| Move between rooms | Room navigation on the HUD / in-world title |

### 360 videos (Laura James, Room 5)

On this hosted site, **Enter 360°** opens YouTube’s **embed 360 player** (`youtube.com/embed/…`) as its own page — compass in the upper left, drag or WASD to look. That is not the regular watch page. **Browser Back** returns to this room.

YouTube no longer sends the 360/MESH stream to an iframe sitting on GitHub Pages (you only get a flat video). Opening the embed player on youtube.com itself is what shows the compass.

If a local 360 MP4 is present (`npm run dev`), Enter 360 uses the in-tour sphere player instead.

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

Copy the contents of `dist/` (including `content/` and `audio/`) into `ocean-acidification-tour/` on the `main` branch.

WebXR requires **localhost** or **HTTPS**. GitHub Pages already provides HTTPS.

---

## YouTube playback options (maintainers)

The live GitHub Pages site is **static**. It does not run a Node server, so it cannot proxy YouTube streams.

### 1. Hosted web (what this repo uses)

Room 5 **Enter 360°** opens a full-viewport `youtube.com/embed/…` 360 player (compass + drag). Tour HUD is hidden. **Esc** / **Exit 360°** returns to the room.

No local MP4s and no stream proxy on GitHub Pages. Author clips with a YouTube URL and `"is360": true`.

### 2. Optional: local 360 file on the room sphere

If you host an equirectangular MP4 yourself and point `sphereSrc` at it, a **local/dev** build can play that file on the panorama sphere. Look-around is then the tour’s own mouse / arrow controls (and it can work in VR).

```json
{
  "title": "Scuba diving Keystone Jetty (360°)",
  "src": "https://www.youtube.com/watch?v=G7OipoU16Qg",
  "is360": true,
  "sphereSrc": "/content/room_05_pacific_northwest/media/keystone-jetty-360.mp4"
}
```

GitHub’s file limit is 100 MB, so the original 4K masters do not belong in this repo. Use a media host (Cloudflare R2, Bunny, college storage) with **HTTPS** and **CORS** for `https://bcxrlab.github.io` if you want this on the live site.

### 3. Optional: world-space YouTube in VR (stream proxy)

Flat YouTube clips on world-space panels in **WebXR** cannot use an iframe. The development app can resolve a progressive stream and paint it on a `THREE.VideoTexture`:

- Vite plugin: `scripts/vrYtMiddleware.mjs`
- Routes: `GET /api/vr-yt/:id` and `GET /api/vr-yt-proxy?u=…`
- Client: `src/ui/vrMediaResolve.js` + `src/ui/VrMediaScreen.js`

That plugin only runs with `npm run dev`. It is **not** on GitHub Pages. To use it in production you would need to host that proxy yourself (same origin or CORS), then point the client at it.

On the hosted site, VR video panels tell the learner to **exit VR and watch on desktop**.

---

## Credits

Oceanography content and media were assembled for teaching through the Bellevue College XR Lab.

**Lead Developer:** David Wikstrom  
**Faculty partner:** Nancy Lane

Many clips also keep a short credit on their in-tour panel.

### Music

“Moment of Peace” — MickeysCat (composer: Korzhytskyi Oleksandr). Solo piano. Free for use under the [Pixabay Content License](https://pixabay.com/music/solo-piano-moment-of-peace-mickeyscat-554494/).

### Videos

- **Voices of Action** series (Room 6) — Bellevue College student and community films, including *What is Voices of Action?*, *Protectors of Marine Life*, *Bellevue College is Keeping Salmon Safe*, and *Alexis Beard*. Made possible by a grant from the Bellevue College Foundation.
- **Thioro Lo — Voices of Action** (Room 2) — Thioro Lo, Ocea101 Voices of Action, Spring 2027.
- **Ocean Acidity Critical Threshold** (Room 4) — World Economic Forum, segment from *What's Next for Humanitarianism & Ocean Acidity Crosses Safe Limit | WEF | Top Stories of the Week*.
- **Richard Feely, Ocean Acidity** (Room 5) — NOAA scientist Richard Feely.
- **Ocean Acidification** Scratch demo (Room 3) — Katelyn Pedersen and Eileen Singov.
- Other teaching clips (*What is Ocean Acidification*, *Ocean Acidification… in a nutshell*, *To Learn More*) play from YouTube as linked on each panel. SharePoint Stream chemistry presentation is used for classroom viewing on desktop.

### 360 videos

Salish Sea dives by **Laura James** (Room 5):

- Scuba diving Keystone Jetty — 360° with narration
- VSS Cove — 360° with narration

Room panoramas are teaching skyboxes assembled for this tour.

### Student artwork

Room 7 gallery:

- Sangmin Lee — *2018* (2018), *GLOBAL WARMING* (2017), *Ocean, sea, beach…* (December 2017)
- Erinn Gelina S. Abesamis — *Salish Sea Rose* (2019)

### Documents and PDFs

- *My First Fish & the Future of the Ocean* — Caiden, Ryan & Tristan (6/9/25). Shown as *Shellfish Industry in Washington* in Room 2.
- Opening message (Room 1) — *Ocean Acidification: From Knowledge to Action — Washington State's Strategic Response*.
- OA chemistry diagram (Room 5) — oyster anatomy reference via [Hamahama Oysters](https://hamahamaoysters.com/pages/oyster-anatomy).
- *Lost Cities: A Story of Coral* — [lostcities.org](http://lostcities.org/).
