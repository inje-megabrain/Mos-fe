import { WindowType } from "../Window/BaseWindow";
import FolderIcon from "./FolderIcon";
import ImageIcon from "./ImageIcon";
import TxtIcon from "./TxtIcon";
import NullIcon from "./NullIcon";
import VideoIcon from "./VideoIcon";

export type IconProps = {
  width?: number;
  height?: number;
};

type TypeIconProps = { type: WindowType } & IconProps;

const Icon = ({ type, ...props }: TypeIconProps) => {
  switch (type) {
    case "dir":
      return <FolderIcon {...props} />;
    case "pic":
      return <ImageIcon {...props} />;
    case "mov":
      return <VideoIcon {...props} />;
    case "txt":
      return <TxtIcon {...props} />;
    default:
      return <NullIcon {...props} />;
  }
};

export default Icon;
