import { useState } from "react";
import { INITIAL_AREA } from "../constants";
import { AreaType } from "../types/area";
import { IEntry } from "../types/entry";
import AreaLayer from "./AreaLayer";
import DragLayer from "./DragLayer";

type PanelProps = {
  focused: boolean;
  entrys: IEntry[];
};

const Panel = ({ focused, entrys }: PanelProps) => {
  const [area, setArea] = useState<AreaType>(INITIAL_AREA);

  return (
    <div
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <DragLayer onDropEntry={(e) => console.log(e)}>
        <AreaLayer area={area} setArea={setArea} />
      </DragLayer>
    </div>
  );
};

export default Panel;
