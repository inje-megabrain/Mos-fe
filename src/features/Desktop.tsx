import { useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { moveFile } from "../api/moveFile";
import { uploadFile } from "../api/uploadFile";
import focusAtom from "../atoms/focusAtom";
import selectedAtom from "../atoms/selectedAtom";
import useWindowManager from "../hooks/useWindowManager";
import useFetchDir from "../query/useFetchDir";
import { transformEntry } from "../utils/entry";
import Panel from "./Panel";
import WindowLayer from "./WindowLayer";

const Desktop = () => {
  const { getDesktop } = useWindowManager();
  const { getFocusedWindow, requestRefresh } = useWindowManager();

  const { refetch, data } = useFetchDir("/");

  useEffect(() => {
    refetch();
  }, [getDesktop()?.payload.refreshNumber]);

  return (
    <>
      <Panel
        parent="Desktop"
        entry={transformEntry(data || [], "/")}
        repaint={() => {
          refetch();
          requestRefresh(getFocusedWindow()?.id);
        }}
      />
      <WindowLayer />
    </>
  );
};

export default Desktop;
