import { IconProps } from ".";

const TxtIcon = ({ width = 60, height = 60 }: IconProps) => {
  return (
    <img
      style={{
        width,
        height,
      }}
      src="/images/icon_txt.png"
    />
  );
};

export default TxtIcon;
