import * as THREE from "three";
import van from "vanjs-core";
import { Node, Structure } from "awatif-data-structure";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { Settings } from "./settings/settings";
import { settings as settingsElement } from "./settings/settings";

import { nodes } from "./objects/nodes";
import { elements } from "./objects/elements";
import { grid } from "./objects/grid";
import { supports } from "./objects/supports";
import { loads } from "./objects/loads";
import { nodesIndexes } from "./objects/nodesIndexes";
import { elementsIndexes } from "./objects/elementsIndexes";
import { axes } from "./objects/axes";
import { orientations } from "./objects/orientations";
import { elementResults } from "./objects/elementResults";
import { nodeResults } from "./objects/nodeResults";

import "./styles.css";

export function viewer(
  structure: Structure,
  settings?: Settings
): HTMLDivElement {
  // init
  if (!settings) settings = getDefaultSettings();

  THREE.Object3D.DEFAULT_UP = new THREE.Vector3(0, 0, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    2 * 1e6 // supported view till 1e6
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const controls = new OrbitControls(camera, renderer.domElement);
  const derivedDisplayScale = van.derive(() =>
    settings.displayScale.val === 0
      ? 1
      : settings.displayScale.val > 0
      ? settings.displayScale.val
      : -1 / settings.displayScale.val
  );
  const derivedNodes: Structure["nodes"] = van.derive(() => {
    if (!settings.deformedShape.val) return structure.nodes?.val ?? [];

    return (
      structure.nodes?.val.map((node, index) => {
        const d = structure.analysisOutputs?.val.nodes
          ?.get(index)
          ?.deformation?.slice(0, 3) ?? [0, 0, 0];
        return node.map((n, i) => n + d[i]) as Node;
      }) ?? []
    );
  });

  const container = document.createElement("div");
  const settingElement = settingsElement(structure, settings);

  // update
  container.setAttribute("id", "viewer");
  container.appendChild(renderer.domElement);
  container.appendChild(settingElement);

  scene.add(
    grid(settings.gridSize.rawVal),
    axes(settings.gridSize.rawVal),
    nodes(settings, derivedNodes, derivedDisplayScale),
    elements(structure, settings, derivedNodes),
    nodesIndexes(settings, derivedNodes, derivedDisplayScale),
    elementsIndexes(structure, settings, derivedNodes, derivedDisplayScale),
    supports(structure, settings, derivedNodes, derivedDisplayScale),
    loads(structure, settings, derivedNodes, derivedDisplayScale),
    orientations(structure, settings, derivedNodes, derivedDisplayScale),
    elementResults(structure, settings, derivedNodes, derivedDisplayScale),
    nodeResults(structure, settings, derivedNodes, derivedDisplayScale)
  );

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 1);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const gridSize = settings.gridSize.rawVal;
  const z2fit = gridSize * 0.5 + (gridSize * 0.5) / Math.tan(45 * 0.5);
  camera.position.set(0.5 * gridSize, 0.8 * -z2fit, 0.5 * gridSize);
  controls.target.set(0.5 * gridSize, 0.5 * gridSize, 0);
  controls.minDistance = 1;
  controls.maxDistance = z2fit * 1.5;
  controls.zoomSpeed = 10;
  controls.update();

  // on windows resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  });

  // on controls change
  controls.addEventListener("change", () => {
    renderer.render(scene, camera);
  });

  // on structure or settings change: render
  van.derive(() => {
    structure.nodes?.val;
    structure.elements?.val;
    structure.analysisInputs?.val;
    structure.analysisInputs?.val;

    settings.displayScale.val;
    settings.nodes.val;
    settings.elements.val;
    settings.nodesIndexes.val;
    settings.elementsIndexes.val;
    settings.orientations.val;
    settings.supports.val;
    settings.loads.val;
    settings.deformedShape.val;
    settings.elementResults.val;
    settings.nodeResults.val;

    setTimeout(() => renderer.render(scene, camera)); // to ensure render is called after all updates are done in that event tick
  });

  return container;
}

// Utils
function getDefaultSettings(): Settings {
  return {
    gridSize: van.state(20),
    displayScale: van.state(1),
    nodes: van.state(true),
    elements: van.state(true),
    nodesIndexes: van.state(false),
    elementsIndexes: van.state(false),
    orientations: van.state(false),
    supports: van.state(true),
    loads: van.state(true),
    deformedShape: van.state(false),
    elementResults: van.state("none"),
    nodeResults: van.state("none"),
  };
}
