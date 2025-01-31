import { FolderApi, Pane, TpChangeEvent } from "tweakpane";
import van, { State } from "vanjs-core";

import "./styles.css";

export type Parameters = {
  [key: string]: {
    value: State<number>;
    min?: number;
    max?: number;
    step?: number;
    label?: string;
    folder?: string;
  };
};

export function parameters(parameters: Parameters): HTMLDivElement {
  // init
  const parametersElm = document.createElement("div");
  const pane = new Pane({ title: "Parameters", container: parametersElm });
  const params = convertToTweakParams(parameters);
  const folders = new Map<string, FolderApi>();

  // update
  parametersElm.setAttribute("id", "parameters");

  folders.set("root", pane);

  Object.entries(parameters).forEach(([key, parameter]) => {
    parameter.folder &&
      !folders.get(parameter.folder) &&
      folders.set(
        parameter.folder,
        pane.addFolder({ title: parameter.folder })
      );

    folders.get(parameter.folder ?? "root")?.addBinding(params, key, {
      min: parameter.min || 0,
      max: parameter.max || 50,
      step: parameter.step || 0.5,
      label: parameter.label || key,
    });
  });

  // events: on parameters change
  pane.on("change", (e) => {
    // @ts-ignore
    parameters[e.target.key].value.val = e.value;
  });

  return parametersElm;
}

// Utils
const convertToTweakParams = (
  parameters: Parameters
): Record<string, unknown> =>
  Object.entries(parameters).reduce(
    (tweakParams: Record<string, number>, [key, parameter]) => {
      tweakParams[key] = parameter.value.val;
      return tweakParams;
    },
    {}
  );
