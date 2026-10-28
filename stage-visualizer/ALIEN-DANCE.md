# Alien Dance

Select **Alien Dance**, the last option in the Visualizer menu. In the current eight-look project, its direct link is `?viz=7`.

Two translucent holographic aliens replace the placeholder performer. Cyan bounces and leads a dance phrase; pink answers with robot arm waves, twists, and a heel-toe shuffle. They toss a gold star back and forth in smooth arcs, track it with their heads, and hold it in their hands. Every other exchange includes a playful dip and recovery from pink. They finish together with matching beat-driven steps and raised hands while the star floats overhead, then catch it and repeat.

The sequence lasts 32 beats at the detected tempo (about 16 seconds at 120 BPM), with a fallback tempo before audio locks. Movement grows with the music and settles during quiet sections. Glowing edges, softly moving scan lines, paired floor rings, and faint upward-fading projection beams create the hologram look without flashing. Reduced motion and Soft visuals soften the dances, lower toss arcs, and slow the story and scan lines. Pause freezes the phrase and eases the movement down. The tempo grid is not a bounce.

All geometry and materials are generated locally. There are no model downloads, media assets, or new dependencies. Switching to another look restores the original performer and halo and disposes the alien's resources. Bubble remains the default visualizer.

Each phrase now opens with a moonwalk: alternating flat-foot backward slides and raised-heel resets, a slight sideways turn, and a smooth upstage glide. Pink starts on the opposite foot. Their projection rings follow the glide, and they ease back into position during the first star toss. Reduced motion shortens the travel and heel lift.

A robot arm wave crosses from cyan to pink during the overhead-star finale. Their hands, elbows, shoulders, and heads rise in sequence, then ease back into the shared finishing pose. The wave follows the musical phrase and softens with reduced motion.

The duet includes a dance battle: cyan leads with a moonwalk and a free-arm disco gesture; pink answers with torso twists, a sweeping free arm, and alternating kicks. The waiting dancer watches the soloist. Successful catches trigger a short gold sparkle burst, with a happy hop after each toss. A fixed pool of four faint afterimages follows each hand and foot. Reduced motion disables trails and softens the celebration; silence fades the effects. All effects pause with the show and are disposed when switching looks.

Implementation: `js/visualizers/alien-dance.js`, appended in `js/visualizers/index.js`.
