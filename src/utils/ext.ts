import { WindowType } from "../components/Window/BaseWindow";

export const transformExtIntoType: (ext: string) => WindowType = (ext) => {
  switch (ext) {
    case "png":
    case "jpeg":
    case "jpg":
      return "pic";
    case "Directory":
      return "dir";
    case "txt":
      return "txt";

    case "mp4":
      return "mov";
    default:
      return "null";
  }
};
