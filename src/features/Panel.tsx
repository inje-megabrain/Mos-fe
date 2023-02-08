import { Entry } from "../types/entry";

type PanelProps = {
  focused: boolean;
  entrys: Entry[];
};

const Panel = ({}: PanelProps) => {
  return (
    <div
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
};

export default Panel;
