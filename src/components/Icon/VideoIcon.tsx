import { IconProps } from ".";

const VideoIcon = ({ width = 60, height = 60 }: IconProps) => {
  return (
    <img
      style={{
        width,
        height,
      }}
      src="/images/icon_video.png"
    />
  );
};

export default VideoIcon;
