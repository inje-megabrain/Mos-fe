import React, { useRef, useEffect } from "react";
import Styled from "styled-components";
import { AreaType } from "../types/area";
import { IEntry } from "../types/entry";

type EntryProps = {
  area: AreaType;
  entrydata: IEntry;
};

const EntryStyle = Styled.div`
  .entry {
    width: 300px;
    height: 300px;
    background-color: pink;
  }
`;
// name, isDir, ext는 get으로 서버에서 받고
// path, uuid는 윈도우에서 전달받고
// area는 Panel에서 받고

//Props : area, EntryDataType
const Entry = ({ area, entrydata }: EntryProps) => {
  const loc = document.getElementById("loc");
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      const t = element.current.getBoundingClientRect();
      console.log(t);
    }
  }, [element.current]);

  return (
    <EntryStyle>
      <div className="entry" ref={element} draggable></div>
    </EntryStyle>
  );
};

export default Entry;
