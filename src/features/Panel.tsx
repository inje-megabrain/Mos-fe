import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import selectedAtom from "../atoms/selectedAtom";
import Entry from "../components/Entry";
import ImageIcon from "../components/Icon/ImageIcon";
import { INITIAL_AREA } from "../constants";
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
  desktop = false,
}: PanelProps) => {
  const [area, setArea] = useState<AreaType>(INITIAL_AREA);
  const [item, setItem] = useRecoilState(selectedAtom);

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
      <DragLayer onDropEntry={(e) => console.log(item)}>
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
