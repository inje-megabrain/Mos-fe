import BaseWindow, { WindowContext, WindowHandle } from "./BaseWindow";
import DirectoryWindow from "./DirectoryWindow";
import PictureWindow from "./PictureWindow";
import VideoWindow from "./VideoWindow";
import MessageWindow from "./MessageWindow";
import PromptWindow from "./PromptWindow";
import TxtWindow from "./TxtWindow";

const Window = (props: WindowHandle) => {
  switch (props.type) {
    case "dir":
      return <DirectoryWindow {...props} />;
    case "pic":
      return <PictureWindow {...props} />;
    case "mov":
      return <VideoWindow {...props} />;
    case "msg":
      return <MessageWindow {...props} />;
    case "prompt":
      return <PromptWindow {...props} />;
    case "txt":
      return <TxtWindow {...props} />;
    default:
      return <BaseWindow {...props}>Empty Window</BaseWindow>;
  }
};

export default Window;

export const makeWindow = (
  id: string,
  type: string,
  payload: any,
  name: string
) => {
  return {
    type,
    id,
    name,
    payload,
    active: true,
  } as WindowContext;
};
