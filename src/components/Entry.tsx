import React, { useRef, useEffect, useState } from "react";
import Styled from "styled-components";
import useItemManager from "../hooks/useItemManager";
import useWindowManager from "../hooks/useWindowManager";
import { AreaType } from "../types/area";
import { IEntry } from "../types/entry";
import { isIn, normalize, normalizeAndArea } from "../utils/area";
import { transformExtIntoType } from "../utils/ext";
import Icon from "./Icon";
import FolderIcon from "./Icon/FolderIcon";
import { PicturePayload } from "./Window/PictureWindow";

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
  const { setSelectedById } = useItemManager();
  const { createWindow } = useWindowManager();

  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      const normal = normalizeAndArea(area);
      const size = element.current.getBoundingClientRect();

      setIsSelected(
        size.x < normal.end.x &&
          size.x + size.width > normal.start.x &&
          size.y < normal.end.y &&
          size.height + size.y > normal.start.y
      );
    }
  }, [area]);

  useEffect(() => {
    setSelectedById(data.id, isSelected);
  }, [isSelected]);

  const onDoubleClick = () => {
    if (data.isDir) createWindow("dir", { path: data.path });

    if (data.ext === "pic")
      createWindow<PicturePayload>("pic", {
        fileName: data.name,
        folder: data.parent,
      });
  };

  return (
    <div
      draggable
      // onMouseMove={(e) => {
      //   e.stopPropagation();
      // }}
      className="entry"
      onDoubleClick={onDoubleClick}
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
      <span>{data.name}</span>
    </div>
  );
};

export default Entry;
