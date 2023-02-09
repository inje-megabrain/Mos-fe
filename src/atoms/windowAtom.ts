import { atom } from "recoil";
import { WindowContext } from "../components/Window/BaseWindow";

const windowAtom = atom<WindowContext[]>({
  key: "windowAtom",
  default: [
    {
      id: "Desktop",
      name: "",
      type: "dir",
      active: true,
      payload: { path: "/", refreshNumber: 0 },
    },
  ],
});

export default windowAtom;
