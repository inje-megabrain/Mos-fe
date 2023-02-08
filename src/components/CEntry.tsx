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

  useEffect(() => {
    if (element.current) {
      const t = element.current.getBoundingClientRect();
      console.log(t);
    }
  }, [element.current]);

  return (
    <div className="entry" ref={element} draggable>
      <FolderIcon />
    </div>
  );
};

export default Entry;
