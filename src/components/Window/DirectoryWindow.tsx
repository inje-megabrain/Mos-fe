import { useEffect, useState } from "react";
import { uploadFile } from "../../api/uploadFile";
import Panel from "../../features/Panel";
import useFetchDir from "../../query/useFetchDir";
import { IEntry } from "../../types/entry";
import { onDrop } from "../../utils/drag";
import { transformEntry } from "../../utils/entry";
import { getNearEntryName } from "../../utils/path";
import BaseWindow, { WindowHandle } from "./BaseWindow";
import DirectoryHeader from "./DirectoryHeader";

export type DirectoryPayload = {
  path: string;
  refreshNumber: number;
};

const DirectoryWindow = (props: WindowHandle<DirectoryPayload>) => {
  const { refetch, data, isSuccess } = useFetchDir(props.payload.path);

  useEffect(() => {
    refetch();
  }, [props.payload.refreshNumber]);

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
          <Panel
            focused={props.hasFocus()}
            entry={transformEntry(data || [], props.payload.path)}
            onDropEntry={onDrop}
          />
        </div>
      </div>
    </BaseWindow>
  );
};

export default DirectoryWindow;
