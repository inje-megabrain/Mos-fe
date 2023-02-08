import { Paper } from "@mui/material";
import Icon from "../components/Icon";
import { WindowContext } from "../components/Window/BaseWindow";

type WindowItemProp = {
  requestActive(): void;
} & WindowContext;

const WindowItem = ({ requestActive, ...context }: WindowItemProp) => {
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
    </Paper>
  );
};

export default WindowItem;
