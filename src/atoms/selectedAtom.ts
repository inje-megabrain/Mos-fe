import { atom } from "recoil";
import { IEntry } from "../types/entry";

type Item = {
  selected: boolean;
  entry: IEntry;
};

type SelectSet = {
  [key: string]: Item;
};

const selectedAtom = atom<SelectSet>({
  key: "selectedAtom",
  default: {},
});

export default selectedAtom;
