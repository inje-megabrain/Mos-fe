import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import focusAtom from "../atoms/focusAtom";
import { IEntry } from "../types/entry";
import { entrydata, transformEntry } from "../utils/entry";
import Panel from "./Panel";

const Desktop = () => {
  const [focusId, setFocus] = useRecoilState(focusAtom);

  const [entry, setEntry] = useState<IEntry[]>([]);

  useEffect(() => {
    setEntry(transformEntry(entrydata, "desktop"));
  }, []);

  return (
    <Panel
      entry={entry}
      focused={focusId === "Desktop"}
      onMouseDown={() => setFocus("Desktop")}
    />
  );
};

export default Desktop;
