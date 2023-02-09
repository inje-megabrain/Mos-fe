import client from "./client";

export default function fetchVideo(dir: string, videoname: string) {
  return new Promise<any>((resolve, reject) => {
    client
      .get(`/video?dir=${dir}&videoname=${videoname}`, {
        headers: {
          Accept: "video/mp4;charset=UTF-8",
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
}
