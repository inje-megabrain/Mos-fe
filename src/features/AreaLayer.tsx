import {
  Dispatch,
  DragEvent,
  MouseEvent,
  ReactNode,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { AreaType } from "../types/area";
import { normalize } from "../utils/area";

export type Pos = { x: number; y: number };

type AreaLayerProps = {
  area: AreaType;
  setArea: Dispatch<SetStateAction<AreaType>>;
  children: ReactNode;
};

function getXY({ nativeEvent }: MouseEvent, base: Pos) {
  return {
    x: nativeEvent.x - base.x,
    y: nativeEvent.y - base.y,
  };
}

function getBase(ref: RefObject<HTMLDivElement>) {
  const size = ref.current?.getBoundingClientRect();

  return {
    x: size ? size.x : 0,
    y: size ? size.y : 0,
  } as Pos;
}

const AreaLayer = ({ area, setArea, children }: AreaLayerProps) => {
  const clickRef = useRef(false);
  const baseRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const reset = () => {
    clickRef.current = false;
    setIsDragging(false);
  };

  const onMouseDown = (e: MouseEvent) => {
    if (e.button !== 0) return;

    clickRef.current = true;
    const base = getBase(baseRef);
    setArea({ start: getXY(e, base), end: getXY(e, base) });
  };

  const onMouseMove = (e: MouseEvent) => {
    if (clickRef.current) {
      setArea((prev) => ({ ...prev, end: getXY(e, getBase(baseRef)) }));
      if (!isDragging) setIsDragging(true);
    }
  };

  const onMouseUp = (e: MouseEvent) => {
    reset();
  };

  const onDragStart = (e: DragEvent) => {
    reset();
  };

  return (
    <div
      ref={baseRef}
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
        zIndex: isDragging ? 1002 : 999,
      }}
    >
      {children}
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
