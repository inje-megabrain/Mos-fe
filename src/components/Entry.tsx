import React, { useRef } from "react";
import { EntryDataType } from "../types";
import Styled from "styled-components";

const EntryStyle = Styled.div`
  .entry {
    width: 300px;
    height: 300px;
    background-color: pink;
  }
`;

//Props : area, EntryDataType
const Entry = ({ uuid, path, name, isDir, ext }: EntryDataType) => {
  return (
    <EntryStyle>
      <div className="entry">
        {uuid}
        {path}
        {name}
        {isDir}
        {ext}
      </div>
    </EntryStyle>
  );
};

export default Entry;
