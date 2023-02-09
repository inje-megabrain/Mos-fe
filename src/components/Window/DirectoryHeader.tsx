import { Fragment } from "react";
import PathItem from "../../features/PathItem";
import { dividePath } from "../../utils/path";

type DirectoryHeaderProp = {
  path: string;
  setPath(path: string): void;
  refresh(): void;
};

const DirectoryHeader = ({ path, setPath, refresh }: DirectoryHeaderProp) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 35px",
        position: "sticky",
        padding: "3px",
        top: 0,
        left: 0,
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
        backgroundColor: "#ECE9D8",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "5px",
          overflow: "hidden",
        }}
      >
        {dividePath(path).map((p, i, arr) => (
          <Fragment key={i}>
            <span> &gt; </span>
            <PathItem
              onClick={() => {
                setPath(`/${arr.slice(0, i + 1).join("/")}`);
              }}
              name={p}
            />
          </Fragment>
        ))}
      </div>
      <button
        style={{
          marginRight: "12px",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={refresh}
      >
        ⟲
      </button>
    </div>
  );
};

export default DirectoryHeader;
