import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import focusAtom from "../atoms/focusAtom";
import useFetchDir from "../query/useFetchDir";
import { IEntry } from "../types/entry";
import { transformEntry } from "../utils/entry";
import Panel from "./Panel";

const Desktop = () => {
  const [focusId, setFocus] = useRecoilState(focusAtom);

  const { refetch, data, isSuccess } = useFetchDir("/");
  const [entry, setEntry] = useState<IEntry[]>([]);

  useEffect(() => {
    if (isSuccess) setEntry(transformEntry(data, "/"));
  }, [data]);

  return (
    <Panel
      entry={entry}
      focused={focusId === "Desktop"}
      onMouseDown={() => setFocus("Desktop")}
    />
  );
};

export default Desktop;
