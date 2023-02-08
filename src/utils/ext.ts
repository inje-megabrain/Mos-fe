import { WindowType } from "../components/Window/BaseWindow";

export const transformExtIntoType: (ext: string) => WindowType = (ext) => {
  switch (ext) {
    case "png":
    case "jpeg":
      return "pic";
    case "Directory":
      return "dir";
    default:
      return "null";
  }
};
