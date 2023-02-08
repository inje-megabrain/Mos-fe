import { Dispatch, SetStateAction } from "react";
import { AreaType } from "../types/area";

type AreaLayerProps = {
  area: AreaType;
  setArea: Dispatch<SetStateAction<AreaType>>;
};

const AreaLayer = ({ area, setArea }: AreaLayerProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
};
