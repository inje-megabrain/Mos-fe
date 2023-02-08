import { useEffect, useState } from "react";
import Panel from "../../features/Panel";
import useFetchDir from "../../query/useFetchDir";
import { IEntry } from "../../types/entry";
import { transformEntry } from "../../utils/entry";
import { getNearEntryName } from "../../utils/path";
import BaseWindow, { WindowHandle } from "./BaseWindow";
import DirectoryHeader from "./DirectoryHeader";

export type DirectoryPayload = {
  path: string;
};

const DirectoryWindow = (props: WindowHandle<DirectoryPayload>) => {
  const [entry, setEntry] = useState<IEntry[]>([]);
  const { refetch, data, isSuccess } = useFetchDir(
    props.payload.path,
    (data) => {
      setEntry(transformEntry(data, props.payload.path));
    }
  );

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
        <DirectoryHeader
          path={props.payload.path}
          setPath={setPath}
          refresh={refetch}
        />
        <div style={{ flex: 1 }}>
          <Panel focused={props.hasFocus()} entry={entry} />
        </div>
      </div>
    </BaseWindow>
  );
};

export default DirectoryWindow;
