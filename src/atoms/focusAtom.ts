import { atom } from "recoil";

const focusAtom = atom({
  key: "focusAtom",
  default: "Desktop",
});

export default focusAtom;
