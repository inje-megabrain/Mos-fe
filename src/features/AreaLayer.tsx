import {
  Dispatch,
  DragEvent,
  MouseEvent,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { AreaType } from "../types/area";
import { normalize } from "../utils/area";

type AreaLayerProps = {
  area: AreaType;
  setArea: Dispatch<SetStateAction<AreaType>>;
};

function getXY({ nativeEvent }: MouseEvent) {
  return {
    x: nativeEvent.offsetX,
    y: nativeEvent.offsetY,
  };
}

const AreaLayer = ({ area, setArea }: AreaLayerProps) => {
  const clickRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const reset = () => {
    clickRef.current = false;
    setIsDragging(false);
  };

  const onMouseDown = (e: MouseEvent) => {
    if (e.button !== 0) return;

    clickRef.current = true;
    setArea({ start: getXY(e), end: getXY(e) });
  };

  const onMouseMove = (e: MouseEvent) => {
    if (clickRef.current) {
      setArea((prev) => ({ ...prev, end: getXY(e) }));
      if (!isDragging) setIsDragging(true);
    }
  };

  const onMouseUp = (e: MouseEvent) => {
    reset();
  };

  const onDragStart = (e: DragEvent) => {};

  return (
    <div
      onDragStart={onDragStart}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {isDragging && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(1,100,100,0.3)",
            border: "1px solid #eee",
            pointerEvents: "none",
            ...normalize(area),
          }}
        ></div>
      )}
    </div>
  );
};

export default AreaLayer;
