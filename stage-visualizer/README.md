# Stage Visualizer

An audio-reactive concert stage. Pick a track, pick a look, and the stage moves with the music. The same page works on a computer, a phone, in VR, and in passthrough AR.

Live site: [https://bcxrlab.github.io/xr-lab-projects/stage-visualizer/](https://bcxrlab.github.io/xr-lab-projects/stage-visualizer/)

Bellevue College XR Lab — open educational resource.

---

## What this is

You stand in the audience, about 6 m back from a small concert stage. A placeholder performer is at center stage. The deck is about 0.5 m high. Lights, a floor ring, and the selected visualizer respond to the music. Nothing flashes. Brightness changes are smoothed.

Lead Developer: David Wikstrom. Co-Developer: Karanveer Singh.

---

## Devices and platforms

One link: [https://bcxrlab.github.io/xr-lab-projects/stage-visualizer/](https://bcxrlab.github.io/xr-lab-projects/stage-visualizer/)

| Device | How you use it | Notes |
|--------|----------------|-------|
| **Web (browser)** | Open the live site | Static GitHub Pages. No install. HTTPS is required for VR and AR. |
| **Desktop** (Windows, macOS, Linux) | Chrome or Edge | Best place to learn the controls and to use system audio. |
| **Laptop** | Same as desktop | Trackpad: hold right-click (or two-finger click) to look. |
| **Mobile** (phone) | Chrome | On-screen stick to walk, swipe to look. |
| **Tablet** | Chrome | Same as phone, with more room for the panel. |
| **VR headset** (Meta Quest Browser) | Open the **same URL**, tap **Enter VR** | Stage appears in a dark room, about 6 m in front of you. |
| **AR headset** (Quest passthrough) | Open the **same URL**, tap **Enter AR** | Place the stage on a real floor. |

**Recommended:** Chrome or Edge on a computer, or Quest Browser in the headset. Enter VR and Enter AR are most reliable in Chromium-based browsers.

This folder is the published site. You do not need Node to open it on GitHub Pages.

---

## How to use it

### Open the experience

1. Visit the [live site](https://bcxrlab.github.io/xr-lab-projects/stage-visualizer/).
2. Choose a **Track** and a **Visualizer**.
3. Press **Play on desktop**. The browser needs that click before it will play audio.

Direct links open one look: `?viz=0` Bubble (the default), `?viz=5` Deck Ripples, `?viz=6` Bubbles, `?viz=7` Alien Dance. The full list is below.

### Desktop

| Action | Control |
|--------|---------|
| Play / pause | **Play on desktop** |
| Choose music | **Track** menu. **A** is not used here. On a headset, **A** / **X** skip tracks only while music is playing. |
| Choose a look | **Visualizer** menu |
| How hard the music drives the look | **Reactivity**, 0–200%. 100% is the normal show. |
| Overall glow | **Brightness**, 0–200% |
| Walk | **W A S D** or the arrow keys |
| Look | Hold **right mouse** and drag. **Q** / **E** look left and right. **R** / **F** look up and down. |
| Hide the panel | **H**, or **Hide**. Turn the H shortcut off in Settings if it conflicts with an assistive keyboard. |
| Accessibility | Gear (top right) |

With reduced motion off, the audience camera sways slowly from side to side. Reduced motion holds the camera still. **Reset view** in Settings returns you to the audience seat.

Changing the track or the look while the music is paused does not start playback. Press Play when you want sound.

### Phone / tablet

| Action | Control |
|--------|---------|
| Walk | Gold stick at the bottom left |
| Look | Swipe on the stage |
| Hide the panel | **Hide**. The stick and the gear stay available. |
| Play | **Play** |

The on-screen stick and the page panel hide while you are in VR or AR.

### VR

| Action | Control |
|--------|---------|
| Enter | **Enter VR** on this same URL |
| Open the wrist menu | **B** or **Y** on that controller. Only one menu is open at a time. |
| Press a button | Point the other controller and pull the trigger |
| Reactivity / Brightness | Hold the trigger on the slider and drag |
| Next track | **A** or **X**, only while music is playing. While paused, they only change which track is armed. |
| Next look | **Grip** |

### AR (passthrough)

1. Tap **Enter AR**. The controller buttons match VR.
2. Point a controller at the floor until a green ring appears. The ring follows the floor and stays off your hand, controller, and body.
3. Pull the trigger while the ring is visible. The stage sits on that spot and turns to face you. Pull the trigger on a new floor point to move it.
4. If the ring is hidden, the trigger does not place the stage. A trigger on the wrist menu does not place it either.

If the headset cannot test the floor, the stage starts about 6 m in front of you.

---

## Tracks

| Track | What you hear |
|-------|----------------|
| Classical: Gymnopédie No. 1 | Solo piano. Slow. A good check that the stage is not pulsing between notes. |
| Synthwave: Eighties Action | Kevin MacLeod. Brighter and busier. |
| Electronic: EDM Detection Mode | Kevin MacLeod. The fullest of the built-in songs. |
| Built-in test signal | A steady tone generated in the browser. No audio file. |
| System audio (other apps) | Listens to music already playing on the computer. Desktop Edge or Chrome only. |

### System audio

1. Select **System audio (other apps)**.
2. Press **Play**.
3. Choose a whole screen and turn on **Also share system audio**.
4. Play something in another app. The stage follows it.

The picture is not shown or saved. This page does not play that sound back, so you do not get an echo. Pause keeps the share and eases the show back to rest. Press Play again to resume without a new prompt. Stop the share from the browser’s sharing bar.

The headset cannot open that share dialog. Start system audio from the desktop Play button before you enter VR or AR, or use one of the built-in tracks in the headset.

Music credits are in [ATTRIBUTION.md](ATTRIBUTION.md).

---

## Visualizers

Bubble is the look that loads first.

| Look | What it does |
|------|----------------|
| **Bubble** | One iridescent film upstage of the performer. It swells, squeezes, and ripples on its own clock. The music changes the size of the whole bubble. Quiet is about half size. A full level at 100% Reactivity is the top of the normal range. |
| **Arc Bars** | Spectrum bars in an arc behind the performer. They follow the live sound, not a steady metronome. |
| **Laser Fan** | Beams fanning upstage. Sweep speed can follow the tempo. Brightness follows the sound. |
| **LED Wall** | An upstage light wall. Same idea: the sound shapes it, and it does not thump on every beat of a silent bar. |
| **Waveform Ribbon** | A ribbon drawn from the waveform. |
| **Deck Ripples** | A low ring on the floor around the performer. Rings travel outward. The music sets how tall and wide they are. A real hit throws another ring once the floor is already full, which is how the busier songs behave. The slow piano stays a wash. |
| **Bubbles** | Many small copies of the bubble film, about one fifth the size, scattered over the stage. Each one swells with the music, fades out, appears somewhere else, and fades back in. |
| **Alien Dance** | Two holographic dancers replace the performer and the halo. They follow a routine at the detected tempo, ease down when the music is quiet, and hold still while playback is paused. Details are in [ALIEN-DANCE.md](ALIEN-DANCE.md). |

Pausing eases the current look back toward its resting state, then holds it. Pressing Play brings the reaction back. Switching looks is not required.

---

## Accessibility

The gear opens **Settings**. In VR and AR, open the wrist menu with **B** or **Y**, then **Settings**.

- **Reduced motion** softens the looks and holds the audience camera still. It follows the system preference until you change it.
- **Soft visuals** keeps the light gentler even if reduced motion is off.
- **Pause visualizer motion** eases a paused look to rest and then holds it.
- **High contrast**, **Larger text**, **Readable font**, and **Extra text spacing** restyle the page. High contrast also restyles the wrist panel.
- **Captions** show the track, the look, and whether playback is playing or paused. The same line is announced to a screen reader.
- **There is no strobe.** Light changes are rate-limited. Take a break if you feel discomfort.

Skip links jump to the controls and to Settings. Targets are at least 44 px. **Hide** tucks the panel and removes it from the tab order. Play and Settings stay reachable.

---

## Credits

Bellevue College XR Lab, open educational resource.

- Lead Developer: David Wikstrom
- Co-Developer: Karanveer Singh
- three.js r186.1, MIT, vendored in `vendor/three/`
- Music and code licenses: [ATTRIBUTION.md](ATTRIBUTION.md)
