type PathItemProps = {
  onClick(): void;
  name: string;
};

const PathItem = ({ onClick, name }: PathItemProps) => {
  return (
    <span
      onClick={onClick}
      style={{
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      {name}
    </span>
  );
};

export default PathItem;
