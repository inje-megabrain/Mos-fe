import { WindowType } from "../components/Window/BaseWindow";

export interface IEntry {
  path: string;
  parent: string;
  name: string;
  ext: WindowType;
  isDir: boolean;
  selected: boolean;
}
