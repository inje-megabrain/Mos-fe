import React from "react";
import Styled from "styled-components";
import EntryCom from "../components/Entry";
import { IEntry } from "../types/entry";

const TestStyled = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

const entryProps = {
  area: { start: { x: 400, y: 400 }, end: { x: 600, y: 600 } },
  entrydata: {
    id: "1",
    name: "EntryTest",
    isDir: true,
    ext: "txt",
    path: "desktop/entry.txt",
  },
};

const Test = () => {
  return (
    <TestStyled>
      <div>EntryTest</div>
      <EntryCom {...entryProps} />
    </TestStyled>
  );
};

export default Test;
