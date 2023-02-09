import { useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { moveFile } from "../api/moveFile";
import { uploadFile } from "../api/uploadFile";
import focusAtom from "../atoms/focusAtom";
import selectedAtom from "../atoms/selectedAtom";
import useWindowManager from "../hooks/useWindowManager";
import useFetchDir from "../query/useFetchDir";
import { onDrop } from "../utils/drag";
import { transformEntry } from "../utils/entry";
import Panel from "./Panel";
import WindowLayer from "./WindowLayer";

const Desktop = () => {
  const [focusId, setFocus] = useRecoilState(focusAtom);
  const { getDesktop } = useWindowManager();
  const { getFocusedWindow, requestRefresh } = useWindowManager();
  const item = useRecoilValue(selectedAtom);

  const { refetch, data, isSuccess } = useFetchDir("/");

  useEffect(() => {
    refetch();
  }, [getDesktop()?.payload.refreshNumber]);

  const refresh = () => {
    const win = getFocusedWindow();
    if (win) {
      requestRefresh(win.id);
    }
  };

  const onDropEntry = (e: DragEvent) => {
    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      uploadFile({ dir: "/", files }).then(() => {
        refresh();
      });
    }
    console.log(item);
    if (item) {
      moveFile({ dir: item.path, mv_dir: "/" }).then(() => {
        refresh();
      });
    }
  };

  return (
    <>
      <Panel
        desktop
        entry={transformEntry(data || [], "/")}
        focused={focusId === "Desktop"}
        onMouseDown={() => {
          setFocus("Desktop");
        }}
        onDropEntry={onDropEntry}
      />
      <WindowLayer />
    </>
  );
};

export default Desktop;
