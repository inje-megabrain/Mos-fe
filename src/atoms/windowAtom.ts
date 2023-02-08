import { atom } from "recoil";
import { WindowContext } from "../components/Window/BaseWindow";

const windowAtom = atom<WindowContext[]>({
  key: "windowAtom",
  default: [],
});

export default windowAtom;
