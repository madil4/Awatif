import { Meta, StoryObj } from "@storybook/html";
import { App } from "./App";
import { ComponentProps } from "solid-js";

type Args = ComponentProps<typeof App>;

export const Default: StoryObj<Args> = {};

export const InvalidText: StoryObj<Args> = {
  args: {
    text: "invalid text",
  },
};

export const Nodes: StoryObj<Args> = {
  args: {
    text: `export const nodes=[[0,0,0],[5,0,0],[0,0,5]];`,
    settings: { nodes: true },
  },
};

export const Elements: StoryObj<Args> = {
  args: {
    text: `export const nodes=[[0,0,0],[5,0,0],[0,0,5]];
export const elements=[[0,1],[1,2]]`,
    settings: { elements: true },
  },
};

export const NodesIndices: StoryObj<Args> = {
  args: {
    text: `export const nodes=[[0,0,0],[5,0,0],[0,0,5]];`,
    settings: { nodesIndices: true },
  },
};

export const ElementsIndices: StoryObj<Args> = {
  args: {
    text: `export const nodes=[[0,0,0],[5,0,0],[0,0,5]];
export const elements=[[0,1],[1,2]]`,
    settings: { elementsIndices: true },
  },
};

export const Supports: StoryObj<Args> = {
  args: {
    text: `export const nodes=[[0,0,0],[5,0,0],[0,0,5]];
export const elements=[[0,1],[1,2]]
      
export const assignments = [
  {
    node: 0,
    support : [true,true,true]
  },
  {
    node: 2,
    support : [true,true,false]
  },
  {
    node: 3,
    support : [true,true,false]
  },
]`,
    settings: { supports: true },
  },
};

export const PointLoads: StoryObj<Args> = {
  args: {
    text: `export const nodes=[[0,0,0],[5,0,0],[0,0,5]];
export const elements=[[0,1],[1,2]]
      
export const assignments = [
  {
    node: 1,
    load : [0,0,-100]
  },
  {
    node: 3,
    load : [0,0,-100]
  },
]`,
    settings: { loads: true },
  },
};

export const Sections: StoryObj<Args> = {
  args: {
    text: `export const nodes=[[0,0,0],[5,0,0],[0,0,5]];
export const elements=[[0,1],[1,2]]
      
export const assignments = [
  {
    element: 0,
    section : "r500x500"
  },
  {
    element: 2,
    section : "r500x500"
  },
]`,
    settings: { sections: true },
  },
};

export const Materials: StoryObj<Args> = {
  args: {
    text: `export const nodes=[[0,0,0],[5,0,0],[0,0,5]];
export const elements=[[0,1],[1,2]]
      
export const assignments = [
  {
    element: 0,
    material : 7500
  },
  {
    element: 2,
    material : 7500
  },
]`,
    settings: { materials: true },
  },
};

export const ElementResults: StoryObj<Args> = {
  args: {
    text: `export const nodes=[[0,0,0],[5,0,0],[0,0,5]];
export const elements=[[0,1],[1,2]]
      
export const results = [
  {
    element: 0,
    strain: -5,
    stress: -10,
    force: 100
  },
  {
    element: 1,
    strain: 7,
    stress: -10,
    force: 100
  },
  {
    element: 2,
    strain : 6
  },
]`,
    settings: { elementResults: "strain" },
  },
};

export const NodeResults: StoryObj<Args> = {
  args: {
    text: `export const nodes=[[0,0,0],[5,0,0],[0,0,5]];
export const elements=[[0,1],[1,2]]
      
export const results = [
  {
    node: 0,
    displacement: [0,0,0],
  },
  {
    node: 1,
    displacement: [-1,3,1],
    reaction: [50,10,0]
  },
  {
    node: 3,
    displacement: [10,10,20],
  },
]`,
    settings: { nodeResults: "displacement" },
  },
};

export const Analyzing: StoryObj<Args> = {
  args: {
    text: `import { analyzing } from 'awatif';

export const nodes=[[0,0,0],[5,0,0],[0,0,5]];
export const elements=[[0,1],[1,2]]
  
export const assignments = [
  {
    node: 0,
    support: [true,true,true]
  },
  {
    node: 2,
    support: [true,true,true]
  },
  {
    node: 1,
    load: [0,0,-10]
  },
  {
    element: 0,
    section: "r200x500",
    material: 7500
  },
  {
    element: 1,
    section: "r200x200",
    material: 7500
  }
]

export const results = analyzing(nodes,elements,assignments);
`,
    settings: { elementResults: "strain" },
  },
};

export default {
  title: "App",
  render: (props) => <App {...props} />,
} as Meta<Args>;
