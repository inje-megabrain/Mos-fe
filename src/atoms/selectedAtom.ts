import { atom } from "recoil";

const selectedAtom = atom({
  key: "uuid",
  // data: {name, isDir, ext, path},
  // isSelcted: boolean
  default: null,
});

export default selectedAtom;
