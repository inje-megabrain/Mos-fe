import { atom } from "recoil";
import { IEntry } from "../types/entry";

const draggedAtom = atom<IEntry | null>({
  key: "draggedAtom",
  default: null,
});

export default draggedAtom;
