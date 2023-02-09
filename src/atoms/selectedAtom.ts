import { atom } from "recoil";
import { IEntry } from "../types/entry";

const selectedAtom = atom<IEntry | null>({
  key: "selectedAtom",
  default: null,
});

export default selectedAtom;
