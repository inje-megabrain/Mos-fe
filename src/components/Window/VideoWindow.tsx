import BaseWindow, { WindowHandle } from "./BaseWindow";

export type VideoPayload = {};

const VideoWindow = (props: WindowHandle<VideoPayload>) => {
  return <BaseWindow {...props}>hello</BaseWindow>;
};

export default VideoWindow;
