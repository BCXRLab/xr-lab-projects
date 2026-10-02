# Testing the Anatomy XR Collection locally

Unzip the whole project folder. `index.html` and the `data` folder need to stay side by side.

## Quickest way

Double-click `index.html`. The model list loads with the page. The Animations tab needs the local server below. YouTube will not share the playlist with a file opened directly from the computer.

If the page says the model list did not load, the zip was opened from inside the archive, or only `index.html` was pulled out. Unzip the whole folder first, then open `index.html` from that folder.

## Local server

A small server is optional. It gives you the address http://127.0.0.1:8094/ instead of a file address. You need Python 3. In a terminal, go into the unzipped folder that contains `index.html`, not the folder above it.

Windows:

```powershell
python -m http.server 8094
```

Mac:

```bash
python3 -m http.server 8094
```

Leave that terminal open. In a browser, go to:

http://127.0.0.1:8094/

If port 8094 is already in use, pick another number, such as `8095`, and use that number in both the command and the address.

## Models added on Sketchfab

With an internet connection, the page checks the bcxrlab anatomy collection and updates the grid. A model added there shows up. A model removed there leaves the grid. Shorter names, keywords, and descriptions already saved in this folder stay as they are. A new model uses its Sketchfab name until a shorter name is saved in the project.

If Sketchfab cannot be reached, the grid stays on the models packed in the folder.

## Animations on YouTube

Open the page at http://127.0.0.1:8094/ with an internet connection. The Animations tab checks the XR Lab playlist: https://www.youtube.com/playlist?list=PLEVMW4XhQcYw

Videos in that playlist show up as cards. A video added there appears on refresh. A video removed there leaves the tab. Click a card to play it. Names already saved for a video in this folder stay as they are. Opening `index.html` directly shows the models, and the Animations tab explains that the playlist needs the local server.

## What to check

- The page shows the Anatomy Models grid, in alphabetical order.
- Type one letter. `A` or `a` should leave only Aluminum Skeleton. `B` should leave only Brain Anatomy Model. Names that do not start with that letter should disappear. The same rule applies to every other letter.
- Keep typing. `Al` stays on Aluminum. `kid` finds the kidney. `lung` and `LUNGS` find the same lung-related models. `ca` stays on Cardio-Pulmonary Model. Heart models stay hidden for `ca`; they show up for `heart`, `cardiac`, or `cardio`.
- Click a card. A popup should open with the Sketchfab model. Escape, the X, or the dark background closes it.
- From http://127.0.0.1:8094/, open Animations. While online, Smoking and Emphysema Animation and Stages of Liver Damage should be there. Click one. The popup should play that YouTube video.
- The gear at the top right opens accessibility settings. Text size, extra line spacing, readable font, high contrast, reduce motion, and stronger focus should change the page and stay set after a refresh. Links stay underlined, including the footer Sketchfab link and Open on Sketchfab or Watch on YouTube in a popup. Reset returns the choices to the start. Escape or a click outside the panel closes it. Arrow keys move between the text sizes.
- A link such as http://127.0.0.1:8094/#copd should open that model directly.

The 3D viewer and the YouTube animations need an internet connection. Checking Sketchfab and the YouTube playlist needs one too. The packed model list still shows without it.

## Stop it

In the terminal where the server is running, press Ctrl+C. The browser address will stop loading after that.
