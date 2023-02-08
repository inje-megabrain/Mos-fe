import React, { useRef, useEffect, useState } from "react";
import Styled from "styled-components";
import { AreaType } from "../types/area";
import { IEntry } from "../types/entry";
import { isIn, normalize, normalizeAndArea } from "../utils/area";
import Icon from "./Icon";
import FolderIcon from "./Icon/FolderIcon";

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

  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      // bottom = element.current.getBoundingClientRect().bottom;
      // top = element.current.getBoundingClientRect().top;
      // x = element.current.getBoundingClientRect().x;
      // y = element.current.getBoundingClientRect().y;

      const normal = normalizeAndArea(area);
      const size = element.current.getBoundingClientRect();

      setIsSelected(
        size.x < normal.end.x &&
          size.x + size.width > normal.start.x &&
          size.y < normal.end.y &&
          size.height + size.y > normal.start.y
      );

      //console.log("width-top : ", width - top);
    }
  }, [area]);

  return (
    <div
      className="entry"
      ref={element}
      draggable
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: isSelected ? "rgba(0, 0, 255, 0.5)" : "transparent",
      }}
    >
      <Icon width={60} height={60} type={"dir"} />
      <span>{data.name}</span>
    </div>
  );
};

export default Entry;
