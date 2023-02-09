import { useEffect } from "react";
import { getNearEntryName } from "../../utils/path";
import Image from "../Image";
import BaseWindow, { WindowHandle } from "./BaseWindow";

export type PicturePayload = {
  path: string;
};

const PictureWindow = (props: WindowHandle<PicturePayload>) => {
  useEffect(() => {
    // set Window Name
    props.setContext("name", getNearEntryName(props.payload.path));
  }, []);

  return (
    <BaseWindow {...props}>
      <Image url={props.payload.path} />
    </BaseWindow>
  );
};

export default PictureWindow;
