import { Fragment } from "react";
import PathItem from "../../features/PathItem";
import { dividePath } from "../../utils/path";

type DirectoryHeaderProp = {
  path: string;
  setPath(path: string): void;
};

const DirectoryHeader = ({ path, setPath }: DirectoryHeaderProp) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 50px",
        position: "sticky",
        padding: "3px",
        top: 0,
        left: 0,
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
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
                const a = arr.slice(0, i + 1).join("/");
                console.log(a);
                setPath(a);
              }}
              name={p}
            />
          </Fragment>
        ))}
      </div>
      <div>refresh</div>
    </div>
  );
};

export default DirectoryHeader;
