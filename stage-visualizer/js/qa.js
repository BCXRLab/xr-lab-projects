import * as THREE from 'three';
import { DECK_H, DECK_R } from './visualizers/common.js';

// Sightline rules from LabLead / LabChecks. Coordinates are stage-local:
// origin = floor at centre stage, +z toward the audience, +y up.
const v = new THREE.Vector3();
const issues = [];

function verts(mesh, localRoot, fn) {
  const pos = mesh.geometry?.getAttribute?.('position');
  if (!pos) return;
  mesh.updateWorldMatrix(true, false);
  localRoot.updateWorldMatrix(true, false);
  const inv = new THREE.Matrix4().copy(localRoot.matrixWorld).invert();
  const m = new THREE.Matrix4().multiplyMatrices(inv, mesh.matrixWorld);
  const step = Math.max(1, Math.floor(pos.count / 400));
  for (let i = 0; i < pos.count; i += step) {
    v.fromBufferAttribute(pos, i).applyMatrix4(m);
    fn(v);
  }
}

export function runQa(stage, viz) {
  issues.length = 0;
  const root = stage.group;

  let stripMaxY = -Infinity;
  if (stage.strip) verts(stage.strip, root, p => { stripMaxY = Math.max(stripMaxY, p.y); });
  if (stripMaxY > DECK_H + 0.01) issues.push(`LED strip top y=${stripMaxY.toFixed(3)} > deck ${DECK_H}`);

  if (stage.rig) {
    verts(stage.rig, root, p => {
      if (p.y <= DECK_H + 0.05) return;
      if (p.z >= 0 && Math.abs(p.x) < 1) issues.push(`tall rig vertex in front corridor x=${p.x.toFixed(2)} z=${p.z.toFixed(2)}`);
      if (p.z > 0.05) issues.push(`tall rig vertex downstage z=${p.z.toFixed(2)}`);
    });
  }

  if (stage.riser) {
    let minZ = Infinity;
    verts(stage.riser, root, p => { minZ = Math.min(minZ, p.z); });
    // Bars sit near r 2.0 on the upstage arc (z ≈ -2). Riser should be further back (more negative z).
    if (minZ > -2.2) issues.push(`riser min z=${minZ.toFixed(2)} is not behind the bar arc`);
  }

  if (viz?.name === 'Laser Fan' && viz.root) {
    viz.root.traverse(obj => {
      if (!obj.isInstancedMesh) return;
      const n = Math.min(obj.count, 8);
      const dummy = new THREE.Object3D();
      for (let i = 0; i < n; i++) {
        obj.getMatrixAt(i, dummy.matrix);
        dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);
        // Cylinder of height 1 translated +0.5 Y, scaled by LEN on Y, so the far end is +Y * scale.y
        const end = new THREE.Vector3(0, dummy.scale.y, 0).applyQuaternion(dummy.quaternion).add(dummy.position);
        if (end.z >= 0) issues.push(`laser beam end z=${end.z.toFixed(3)} is not upstage`);
        const r = Math.hypot(end.x, end.z);
        if (r > DECK_R + 0.05) issues.push(`laser beam end r=${r.toFixed(2)} outside deck`);
      }
    });
  }

  if (viz?.name === 'Deck Ripples' && viz.root) {
    viz.root.traverse(obj => {
      if (!obj.isMesh) return;
      verts(obj, root, p => {
        if (![p.x, p.y, p.z].every(Number.isFinite)) issues.push('deck ripples has non-finite vertices');
        const r = Math.hypot(p.x, p.z);
        const deg = (Math.atan2(p.z, p.x) * 180 / Math.PI + 360) % 360;
        // The ring goes all the way around the performer. It stays on the deck top:
        // clear of the feet, short of the front steps, and short of the upstage riser.
        if (r < 0.32) issues.push('deck ripples enters the performer');
        if (r > DECK_R) issues.push('deck ripples extends outside deck');
        if (deg > 64 && deg < 116 && r > 2.28) issues.push('deck ripples over the front steps');
        if (deg > 204 && deg < 336 && r > 2.36) issues.push('deck ripples into the riser');
        if (p.y <= DECK_H) issues.push('deck ripples intersects deck');
        if (p.y > DECK_H + 0.25) issues.push(`deck ripples rises off the floor y=${p.y.toFixed(2)}`);
      });
    });
  }

  if (viz?.name === 'Alien Dance' && viz.root) {
    const performer = root.getObjectByName('performer');
    const halo = root.getObjectByName('halo');
    if (performer?.visible) issues.push('alien dance leaves the performer visible');
    if (halo?.visible) issues.push('alien dance leaves the halo visible');
    viz.root.traverse(obj => {
      if (!obj.isMesh || obj.isInstancedMesh) return;
      verts(obj, root, p => {
        if (![p.x, p.y, p.z].every(Number.isFinite)) issues.push('alien dance has non-finite vertices');
        // The dancers replace the performer at center stage. They stay on the deck.
        if (Math.hypot(p.x, p.z) > DECK_R) issues.push('alien dance extends outside deck');
        // Soles are built to rest on the deck. Matrix math lands them a hair under
        // DECK_H. A centimeter of clearance still catches a foot that falls through.
        if (p.y < DECK_H - 0.01) issues.push(`alien dance intersects deck y=${p.y.toFixed(3)}`);
        if (p.y > 4.2) issues.push(`alien dance rises too high y=${p.y.toFixed(2)}`);
      });
    });
  }

  if ((viz?.name === 'Bubble' || viz?.name === 'Bubbles') && viz.root) {
    viz.root.traverse(obj => {
      if (!obj.isMesh) return;
      verts(obj, root, p => {
        if (![p.x, p.y, p.z].every(Number.isFinite)) issues.push(viz.name.toLowerCase() + ' has non-finite vertices');
        // Bubble surrounds center stage. Bubbles are small and may sit downstage.
        if (Math.hypot(p.x, p.z) > DECK_R) issues.push(viz.name.toLowerCase() + ' extends outside deck');
        if (p.y <= DECK_H) issues.push(viz.name.toLowerCase() + ' intersects deck');
      });
    });
  }

  // Deduplicate (vertex loops can repeat the same corridor fail).
  return [...new Set(issues)];
}
