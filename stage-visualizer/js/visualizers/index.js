import * as bubble from './bubble.js?v=20261009r';
import * as arcBars from './arc-bars.js?v=20261009s';
import * as laserFan from './laser-fan.js?v=20261009s';
import * as ledWall from './led-wall.js?v=20261009s';
import * as waveformRibbon from './waveform-ribbon.js?v=20261009s';
import * as deckRipples from './deck-ripples.js?v=20261014k';
import * as bubbles from './bubbles.js?v=20261014n';
import * as alienDance from './alien-dance.js?v=20261015a';

// Registry of visualizers. Each module exports `name` and `create(parentGroup, opts)`, which
// returns { name, root, update(levels, waveform, dt, reducedMotion), dispose() }.
// Array order is dropdown order. Index 0 is the look that loads with the page.
export const VISUALIZERS = [bubble, arcBars, laserFan, ledWall, waveformRibbon, deckRipples, bubbles, alienDance];
