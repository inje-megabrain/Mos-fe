import BaseWindow, { WindowHandle } from "./BaseWindow";

export type PicturePayload = {};

const PictureWindow = (props: WindowHandle<PicturePayload>) => {
  return <BaseWindow {...props}>hello</BaseWindow>;
};

export default PictureWindow;
