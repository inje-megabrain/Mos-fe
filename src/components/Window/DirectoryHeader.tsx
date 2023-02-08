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
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        left: 0,
        border: "1px solid black",
      }}
    >
      <div
        style={{
          display: "flex",

          padding: "3px",
          gap: "5px",
        }}
      >
        {dividePath(path).map((p, i, arr) => (
          <PathItem
            key={i}
            onClick={() => {
              const a = arr.slice(0, i + 1).join("/");
              console.log(a);
              setPath(a);
            }}
            name={p}
          />
        ))}
      </div>
      <div>refresh</div>
    </div>
  );
};

export default DirectoryHeader;
