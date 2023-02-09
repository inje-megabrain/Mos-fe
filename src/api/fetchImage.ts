import client from "./client";

export default function fetchImage(path: string) {
  return new Promise<Blob>((resolve, reject) => {
    client
      .get(`/image?image_path=${path}`, {
        responseType: "blob",
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
}
