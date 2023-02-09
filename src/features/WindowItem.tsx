import { Paper } from "@mui/material";
import styled from "styled-components";
import Icon from "../components/Icon";
import { WindowContext } from "../components/Window/BaseWindow";

type WindowItemProp = {
  requestActive(): void;
  close(): void;
} & WindowContext;

const XStyled = styled.span`
  margin-left: 3px;
  border-radius: 5px;
  padding: 2px;
  &:hover {
    background-color: red;
  }
`;

const WindowItem = ({ requestActive, close, ...context }: WindowItemProp) => {
  return (
    <Paper
      elevation={3}
      onClick={requestActive}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        padding: "0.2em 0.5em",
      }}
    >
      <Icon type={context.type} width={15} height={15} />
      <span style={{ marginLeft: 5 }}>{context.name}</span>
      <XStyled
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
      >
        x
      </XStyled>
    </Paper>
  );
};

export default WindowItem;
