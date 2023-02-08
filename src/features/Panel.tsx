import { useState } from "react";
import Entry from "../components/Entry";
import ImageIcon from "../components/Icon/ImageIcon";
import { INITIAL_AREA } from "../constants";
import { AreaType } from "../types/area";
import { IEntry } from "../types/entry";
import AreaLayer from "./AreaLayer";
import DragLayer from "./DragLayer";

type PanelProps = {
  focused: boolean;
  entrys: IEntry[];
  isRow?: boolean;
};

const Panel = ({ focused, entrys, isRow }: PanelProps) => {
  const [area, setArea] = useState<AreaType>(INITIAL_AREA);

  return (
    <div
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        padding: "1em",
      }}
    >
      <DragLayer onDropEntry={(e) => console.log(e)}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {entrys.map((en) => (
            <Entry key={en.id} area={area} data={en} />
          ))}
        </div>
        <AreaLayer area={area} setArea={setArea} />
      </DragLayer>
    </div>
  );
};

export default Panel;
