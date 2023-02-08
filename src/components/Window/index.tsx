import BaseWindow, { WindowContext, WindowHandle } from "./BaseWindow";
import DirectoryWindow from "./DirectoryWindow";
import PictureWindow from "./PictureWindow";
import VideoWindow from "./VideoWindow";
import MessageWindow from "./MessageWindow";
import PropmtWindow from "./PromptWindow";

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
      return <PropmtWindow {...props} />;
    default:
      return <BaseWindow {...props}>Empty Window</BaseWindow>;
  }
};

export default Window;

export const makeWindow = (id: string, type: string, payload: any) => {
  return {
    type,
    id,
    name: "",
    payload,
    active: true,
  } as WindowContext;
};
