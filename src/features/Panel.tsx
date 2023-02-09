import { useEffect, useRef, useState } from "react";
import Entry from "../components/Entry";
import ImageIcon from "../components/Icon/ImageIcon";
import { INITIAL_AREA } from "../constants";
import useItemManager from "../hooks/useItemManager";
import { AreaType } from "../types/area";
import { IEntry } from "../types/entry";
import AreaLayer from "./AreaLayer";
import DragLayer from "./DragLayer";

type PanelProps = {
  focused: boolean;
  entry: IEntry[];
  isRow?: boolean;
  onMouseDown?(): void;
  onDropEntry(e: DragEvent): void;
  desktop?: boolean;
};

const Panel = ({
  focused,
  entry,
  isRow,
  onMouseDown = () => {},
  onDropEntry,
  desktop = false,
}: PanelProps) => {
  const [area, setArea] = useState<AreaType>(INITIAL_AREA);

  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <DragLayer onDropEntry={onDropEntry}>
        <AreaLayer area={area} setArea={setArea}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
            }}
          >
            {entry.map((en) => (
              <Entry key={en.path} area={area} data={en} />
            ))}
          </div>
        </AreaLayer>
      </DragLayer>
    </div>
  );
};

export default Panel;
