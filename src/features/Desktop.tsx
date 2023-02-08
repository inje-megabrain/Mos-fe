import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import focusAtom from "../atoms/focusAtom";
import useFetchDir from "../query/useFetchDir";
import { IEntry } from "../types/entry";
import { transformEntry } from "../utils/entry";
import Panel from "./Panel";
import WindowLayer from "./WindowLayer";

const Desktop = () => {
  const [focusId, setFocus] = useRecoilState(focusAtom);

  const [entry, setEntry] = useState<IEntry[]>([]);
  const { refetch, data, isSuccess } = useFetchDir("/", (data) => {
    setEntry(transformEntry(data, "/"));
  });

  return (
    <>
      <Panel
        desktop
        entry={entry}
        focused={focusId === "Desktop"}
        onMouseDown={() => {
          setFocus("Desktop");
        }}
      />
      <WindowLayer />
    </>
  );
};

export default Desktop;
