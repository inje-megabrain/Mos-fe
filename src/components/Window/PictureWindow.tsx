import Image from "../Image";
import BaseWindow, { WindowHandle } from "./BaseWindow";

export type PicturePayload = {
  folder: string;
  fileName: string;
};

const PictureWindow = (props: WindowHandle<PicturePayload>) => {
  return (
    <BaseWindow {...props}>
      <Image fileName={props.payload.fileName} folder={props.payload.folder} />
    </BaseWindow>
  );
};

export default PictureWindow;
