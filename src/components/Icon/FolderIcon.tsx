import { IconProps } from ".";

const FolderIcon = ({ width = 60, height = 60 }: IconProps) => {
  return (
    <img
      style={{
        width,
        height,
      }}
      src="/images/icon_folder.png"
    />
  );
};

export default FolderIcon;
