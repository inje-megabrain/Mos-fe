import { IconProps } from ".";

const NullIcon = ({ width = 60, height = 60 }: IconProps) => {
  return (
    <img
      style={{
        width,
        height,
      }}
      src="/images/icon_null.png"
    />
  );
};

export default NullIcon;
