type PathItemProps = {
  onClick(): void;
  name: string;
};

const PathItem = ({ onClick, name }: PathItemProps) => {
  return <span onClick={onClick}>{name}</span>;
};

export default PathItem;
