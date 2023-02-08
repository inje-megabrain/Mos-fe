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
        position: "sticky",
        top: 0,
        left: 0,
        border: "1px solid black",
      }}
    >
      <div>
        <p>{path}</p>
      </div>
      <div>refresh</div>
    </div>
  );
};

export default DirectoryHeader;
