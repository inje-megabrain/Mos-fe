import { useEffect } from "react";
import Panel from "../../features/Panel";
import BaseWindow, { WindowHandle } from "./BaseWindow";
import DirectoryHeader from "./DirectoryHeader";

export type DirectoryPayload = {
  path: string;
};

const DirectoryWindow = (props: WindowHandle<DirectoryPayload>) => {
  useEffect(() => {
    if (props.hasFocus()) {
      // TODO request Entry data...
    }
  }, [props]);

  const setPath = (path: string) => {
    props.setContext("payload", {
      ...props.payload,
      path,
    });
  };

  return (
    <BaseWindow {...props}>
      <DirectoryHeader path={props.payload.path} setPath={setPath} />
      <Panel focused={props.hasFocus()} entrys={[]} />
    </BaseWindow>
  );
};

export default DirectoryWindow;
