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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <DirectoryHeader path={props.payload.path} setPath={setPath} />
        <div style={{ flex: 1 }}>
          <Panel focused={props.hasFocus()} entry={[]} />
        </div>
      </div>
    </BaseWindow>
  );
};

export default DirectoryWindow;
