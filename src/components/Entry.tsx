import React, { useRef, useEffect, useState, DragEvent } from "react";
import { useRecoilState } from "recoil";
import selectedAtom from "../atoms/selectedAtom";
import useWindowManager from "../hooks/useWindowManager";
import { AreaType } from "../types/area";
import { IEntry } from "../types/entry";
import { isIn, normalize, normalizeAndArea } from "../utils/area";
import Icon from "./Icon";
import { PicturePayload } from "./Window/PictureWindow";
import { TxtPayload } from "./Window/TxtWindow";
import { VideoPayload } from "./Window/VideoWindow";

type EntryProps = {
  area: AreaType;
  data: IEntry;
};

// const EntryStyle = Styled.div`
//   .entry {
//     width: 100px;
//     height: 100px;
//     background-color: pink;
//   }
// `;
// name, isDir, ext는 get으로 서버에서 받고
// path, uuid는 윈도우에서 전달받고
// area는 Panel에서 받고

//Props : area, EntryDataType
const Entry = ({ area, data }: EntryProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [item, setItem] = useRecoilState(selectedAtom);
  const { createWindow } = useWindowManager();

  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      const normal = normalizeAndArea(area);
      const size = element.current.getBoundingClientRect();

      setIsSelected(
        size.left < normal.end.x &&
          size.left + size.width > normal.start.x &&
          size.top < normal.end.y &&
          size.bottom > normal.start.y
      );
    }
  }, [area]);

  useEffect(() => {
    if (isSelected) setItem(data);
  }, [isSelected]);

  const onDoubleClick = () => {
    if (data.isDir) return createWindow("dir", { path: data.path });

    if (data.ext === "pic")
      return createWindow<PicturePayload>("pic", { path: data.path });

    if (data.ext === "txt")
      return createWindow<TxtPayload>("txt", { path: data.path });

    if (data.ext === "mov")
      return createWindow<VideoPayload>("mov", {
        path: data.path,
        parent: data.parent,
        name: data.name,
      });
  };

  const onClick = () => {
    setItem(data);
  };

  return (
    <div
      draggable
      // onMouseMove={(e) => {
      //   e.stopPropagation();
      // }}
      className="entry"
      onDoubleClick={onDoubleClick}
      onClick={onClick}
      ref={element}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5px",
        background: isSelected ? "rgba(0, 120, 244, 0.5)" : "transparent",
      }}
    >
      <Icon width={60} height={60} type={data.ext} />
      <span
        style={{
          width: "60px",
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
      >
        {data.name}
      </span>
    </div>
  );
};

export default Entry;
