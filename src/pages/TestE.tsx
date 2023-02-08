import React from "react";
import Styled from "styled-components";
import Entry from "../components/Entry";

const TestStyled = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

const entryProps = {
  uuid: "1",
  name: "testDirEntry",
  isDir: true,
  ext: "txt",
  path: "Desktop",
};

const Test = () => {
  return (
    <TestStyled>
      <div>EntryTest</div>
      <Entry {...entryProps} />
    </TestStyled>
  );
};

export default Test;
