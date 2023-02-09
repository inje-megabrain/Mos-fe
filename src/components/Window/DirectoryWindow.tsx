import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { moveFile } from "../../api/moveFile";
import { uploadFile } from "../../api/uploadFile";
import selectedAtom from "../../atoms/selectedAtom";
import Panel from "../../features/Panel";
import useWindowManager from "../../hooks/useWindowManager";
import useFetchDir from "../../query/useFetchDir";
import { transformEntry } from "../../utils/entry";
import { getNearEntryName } from "../../utils/path";
import BaseWindow, { WindowHandle } from "./BaseWindow";
import DirectoryHeader from "./DirectoryHeader";

export type DirectoryPayload = {
  path: string;
  refreshNumber: number;
};

const DirectoryWindow = (props: WindowHandle<DirectoryPayload>) => {
  const { refetch, data } = useFetchDir(props.payload.path);

  const { requestRefresh, getFocusedWindow } = useWindowManager();
  const item = useRecoilValue(selectedAtom);

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
      {() => (
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
              parent={props.id}
              entry={transformEntry(data || [], props.payload.path)}
              repaint={() => {
                refetch();
                requestRefresh(getFocusedWindow()?.id);
              }}
            />
          </div>
        </div>
      )}
    </BaseWindow>
  );
};

export default DirectoryWindow;
