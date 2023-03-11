import { Meta, StoryFn } from "@storybook/html";
import {
  AnalysisResult,
  AnalysisResultType,
  AssignmentType,
  DesignResult,
  DesignResultType,
  Model,
} from "../interfaces";
import { Settings, Viewer } from "./viewer";

export default {
  title: "UI/Viewer",
} as Meta;

const model: Model = {
  nodes: [
    [-10, 0, 0],
    [0, 10, 0],
    [10, 0, 0],
    [0, 0, 2],
    [4, 10, -6],
  ],
  deformedNodes: [
    [-10, 0, 0],
    [0, 2, 0],
    [10, 0, 0],
    [0, 0, 4],
    [4, 4, -6],
  ],
  elements: [
    [0, 1],
    [1, 2],
    [3, 4],
  ],
  assignments: [
    {
      element: 0,
      type: AssignmentType.barSupports,
      firstNode: [true, true, true],
    },
    {
      element: 1,
      type: AssignmentType.barSupports,
      secondNode: [true, false, false],
    },
    {
      element: 0,
      type: AssignmentType.barUniformLoad,
      xLoad: -100,
    },
    {
      element: 1,
      type: AssignmentType.barUniformLoad,
      yLoad: -100,
    },
    {
      element: 2,
      type: AssignmentType.barUniformLoad,
      yLoad: -100,
    },
  ],
};
const analysisResults: AnalysisResult[] = [
  {
    element: 0,
    type: AnalysisResultType.bar,
    stress: 0,
    force: 0,
    deformation: [
      [0, 0, 0],
      [5, -2, 0],
    ],
  },
  {
    element: 1,
    type: AnalysisResultType.bar,
    stress: 0.5,
    force: 90,
    deformation: [
      [5, -2, 0],
      [0, 0, 0],
    ],
  },
  {
    element: 2,
    type: AnalysisResultType.bar,
    stress: 1,
    force: 100,
    deformation: [
      [0, 0, 0],
      [0, 0, 0],
    ],
  },
];
const designResults: DesignResult[] = [
  { element: 0, type: DesignResultType.steel, ratio: 0.5 },
  { element: 1, type: DesignResultType.steel, ratio: 1 },
  { element: 2, type: DesignResultType.steel, ratio: 2 },
];

const template: StoryFn = (args): HTMLElement => {
  const viewer = new Viewer(args.settings);
  viewer.update(args.model, args.analysisResults, args.designResults);
  return viewer.render();
};

export const Empty = template.bind({});
Empty.args = {
  settings: { expanded: true } as Settings,
  model: {
    nodes: [],
    elements: [],
  } as Model,
};

export const Primary = template.bind({});
Primary.args = {
  settings: { expanded: true } as Settings,
  model,
};

export const Supports = template.bind({});
Supports.args = {
  settings: { supports: true, expanded: true } as Settings,
  model,
};

export const Loads = template.bind({});
Loads.args = {
  settings: { loads: true, expanded: true } as Settings,
  model,
};

export const Deformed = template.bind({});
Deformed.args = {
  settings: { deformed: true, expanded: true } as Settings,
  model,
};

export const StressResults = template.bind({});
StressResults.args = {
  settings: { results: "stress", expanded: true } as Settings,
  model,
  analysisResults,
};

export const ForceResults = template.bind({});
ForceResults.args = {
  settings: { results: "force", expanded: true } as Settings,
  model,
  analysisResults,
};

export const DeformationXResults = template.bind({});
DeformationXResults.args = {
  settings: { results: "deformationX", expanded: true } as Settings,
  model,
  analysisResults,
};

export const DeformationYResults = template.bind({});
DeformationYResults.args = {
  settings: { results: "deformationY", expanded: true } as Settings,
  model,
  analysisResults,
};

export const SteelResults = template.bind({});
SteelResults.args = {
  settings: { results: "steel", expanded: true } as Settings,
  model,
  analysisResults,
  designResults,
};
