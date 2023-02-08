import React, { useRef, useEffect, useState } from "react";
import Styled from "styled-components";
import { AreaType } from "../types/area";
import { IEntry } from "../types/entry";
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
  let top: any, x: any, y: any, bottom: any;

  useEffect(() => {
    if (element.current) {
      bottom = element.current.getBoundingClientRect().bottom;
      top = element.current.getBoundingClientRect().top;
      x = element.current.getBoundingClientRect().x;
      y = element.current.getBoundingClientRect().y;

      const size = element.current.getBoundingClientRect();
      console.log("size : ", size);
      //console.log("width-top : ", width - top);
    }
  }, [element.current]);

  const sizeCheck = () => {
    const h = area.end.y - area.start.y; //height
    const w = area.end.x - area.start.x; //width
    console.log("H :", h, "W : ", w);
  };

  return (
    <>
      <div className="entry" ref={element} draggable>
        <FolderIcon />
      </div>
      {console.log("AreaStart : ", area.start, "AreaEnd", area.end)}
      {sizeCheck()}
    </>
  );
};

export default Entry;
