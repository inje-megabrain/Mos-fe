import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { moveFile } from "../../api/moveFile";
import { uploadFile } from "../../api/uploadFile";
import selectedAtom from "../../atoms/selectedAtom";
import Panel from "../../features/Panel";
import useWindowManager from "../../hooks/useWindowManager";
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

  const { requestRefresh, getFocusedWindow } = useWindowManager();
  const item = useRecoilValue(selectedAtom);

  useEffect(() => {
    refetch();
  }, [props.payload.refreshNumber]);

  useEffect(() => {
    // set Window Name
    props.setContext("name", getNearEntryName(props.payload.path));
  }, []);

  const refresh = () => {
    const win = getFocusedWindow();
    if (win) {
      requestRefresh(win.id);
    }
  };

  if (item) console.log(item);

  const onDropEntry = ((item) => (e: DragEvent) => {
    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      uploadFile({ dir: props.payload.path, files }).then(() => {
        refresh();
      });
    }
    console.log(item);
    if (item) {
      moveFile({ dir: item.path, mv_dir: props.payload.path }).then(() => {
        refresh();
      });
    }
  })(item);

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
            onDropEntry={onDropEntry}
          />
        </div>
      </div>
    </BaseWindow>
  );
};

export default DirectoryWindow;
