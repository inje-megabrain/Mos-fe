import { IconProps } from ".";

const ImageIcon = ({ width = 60, height = 60 }: IconProps) => {
  return (
    <img
      style={{
        width,
        height,
      }}
      src="/images/icon_image.png"
    />
  );
};

export default ImageIcon;
