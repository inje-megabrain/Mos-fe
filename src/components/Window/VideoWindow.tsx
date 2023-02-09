import { useEffect, useState } from "react";
import fetchVideo from "../../api/fetchVideo";
import BaseWindow, { WindowHandle } from "./BaseWindow";

export type VideoPayload = {
  path: string;
  parent: string;
  name: string;
};

const VideoWindow = (props: WindowHandle<VideoPayload>) => {
  useEffect(() => {
    fetchVideo(props.payload.parent, props.payload.name).then((data) => {
      let myUrl = (window.URL || window.webkitURL).createObjectURL(
        new Blob([data])
      );

      var myVid = document.getElementById(props.payload.path) as any;
      console.log(myVid);
      if (myVid) {
        myVid.setAttribute("src", myUrl);
        myVid.play(); //# test playback
      }
    });
  }, []);

  return (
    <BaseWindow {...props}>
      <video controls loop muted autoPlay>
        <source id={props.payload.path} src="" type="video/mp4"></source>
      </video>
    </BaseWindow>
  );
};

export default VideoWindow;
