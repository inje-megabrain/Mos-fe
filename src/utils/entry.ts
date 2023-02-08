import { IEntry } from "../types/entry";
import { v4 } from "uuid";
import { transformExtIntoType } from "./ext";

export const transformEntry = (
  rawEntry: Omit<IEntry, "id" | "path">[],
  currentPath: string
) => {
  return rawEntry.map((en) => ({
    ...en,
    parent: currentPath,
    ext: transformExtIntoType(en.ext),
    path: `${currentPath === "/" ? "" : "/"}/${en.name}`,
    id: v4(),
  }));
};
