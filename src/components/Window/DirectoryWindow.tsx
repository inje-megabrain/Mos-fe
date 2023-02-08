import { useEffect } from "react";
import Panel from "../../features/Panel";
import { getNearEntryName } from "../../utils/path";
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

  useEffect(() => {
    // set Window Name
    props.setContext("name", getNearEntryName(props.payload.path));
  }, []);

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
