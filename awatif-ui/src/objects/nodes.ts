import * as THREE from "three";
import { SettingsState } from "../types";
import van, { State } from "vanjs-core";
import { Node } from "awatif-data-structure";

export function nodes(
  settings: SettingsState,
  derivedNodes: State<Node[]>,
  derivedDisplayScale: State<number>
): THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial> {
  const points = new THREE.Points(
    new THREE.BufferGeometry(),
    new THREE.PointsMaterial()
  );
  const size = 0.05 * settings.gridSize.rawVal * 0.5;
  points.frustumCulled = false;

  // on settings.nodes, and derivedNodes update visual
  van.derive(() => {
    if (!settings.nodes.val) return;

    points.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(derivedNodes.val.flat(), 3)
    );
  });

  // on derivedDisplayScale update scale
  van.derive(() => {
    derivedDisplayScale.val; // trigger update

    if (!settings.nodes.rawVal) return;

    points.material.size = size * derivedDisplayScale.rawVal;
  });

  // on settings.nodes update visibility
  van.derive(() => {
    points.visible = settings.nodes.val;
  });

  return points;
}
