import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { uploadFile } from "../api/uploadFile";
import focusAtom from "../atoms/focusAtom";
import useWindowManager from "../hooks/useWindowManager";
import useFetchDir from "../query/useFetchDir";
import { IEntry } from "../types/entry";
import { onDrop } from "../utils/drag";
import { transformEntry } from "../utils/entry";
import Panel from "./Panel";
import WindowLayer from "./WindowLayer";

const Desktop = () => {
  const [focusId, setFocus] = useRecoilState(focusAtom);
  const { getDesktop } = useWindowManager();

  const { refetch, data, isSuccess } = useFetchDir("/");

  useEffect(() => {
    refetch();
  }, [getDesktop()?.payload.refreshNumber]);

  return (
    <>
      <Panel
        desktop
        entry={transformEntry(data || [], "/")}
        focused={focusId === "Desktop"}
        onMouseDown={() => {
          setFocus("Desktop");
        }}
        onDropEntry={onDrop}
      />
      <WindowLayer />
    </>
  );
};

export default Desktop;
