import { DragEvent, useEffect, useMemo, useRef, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { moveFile } from "../api/moveFile";
import { uploadFile } from "../api/uploadFile";
import focusAtom from "../atoms/focusAtom";
import selectedAtom from "../atoms/selectedAtom";
import Entry from "../components/Entry";
import ImageIcon from "../components/Icon/ImageIcon";
import { WindowContext } from "../components/Window/BaseWindow";
import { INITIAL_AREA } from "../constants";
import useWindowManager from "../hooks/useWindowManager";
import { AreaType } from "../types/area";
import { IEntry } from "../types/entry";
import AreaLayer from "./AreaLayer";
import DragLayer from "./DragLayer";

type PanelProps = {
  entry: IEntry[];
  parent: string;
  repaint(): void;
};

function handleDropEntry(
  item: IEntry | null,
  window: WindowContext | null,
  onSuccess: () => void
) {
  return (e: DragEvent) => {
    const files = e.dataTransfer.files;
    console.log(window);
    if (files && files.length > 0) {
      uploadFile({ dir: window?.payload.path, files }).then(() => {
        onSuccess();
      });
    } else if (item && !item.isDir && item.parent !== window?.payload.path) {
      // API 버그
      moveFile({ dir: item.path, mv_dir: window?.payload.path }).then(() => {
        onSuccess();
      });
    }
  };
}

const Panel = ({ entry, parent, repaint }: PanelProps) => {
  const [area, setArea] = useState<AreaType>(INITIAL_AREA);
  const { createHandle, getWindow } = useWindowManager();
  const item = useRecoilValue(selectedAtom);

  const handle = useMemo(() => createHandle(parent), [parent, createHandle]);

  return (
    <AreaLayer area={area} setArea={setArea} handleFocus={handle.focus}>
      <DragLayer
        onDropEntry={handleDropEntry(item, getWindow(parent), repaint)}
      >
        {entry.map((en) => (
          <Entry key={en.path} area={area} data={en} />
        ))}
      </DragLayer>
    </AreaLayer>
  );
};

export default Panel;
