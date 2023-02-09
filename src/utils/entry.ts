import { IEntry } from "../types/entry";
import { v4 } from "uuid";
import { transformExtIntoType } from "./ext";

export const transformEntry = (
  rawEntry: Omit<IEntry, "path">[],
  currentPath: string
) => {
  return rawEntry.map((en) => ({
    ...en,
    parent: currentPath,
    ext: transformExtIntoType(en.ext),
    selected: false,
    path: `${currentPath === "/" ? "" : currentPath}/${en.name}`,
  }));
};
