import client from "./client";

export default function fetchImage(folder: string, fileName: string) {
  return new Promise<Blob>((resolve, reject) => {
    client
      .get(`/image?dir=${folder}&imagename=${fileName}`, {
        responseType: "blob",
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
}
