import client from "./client";

export default function fetchImage(url = "") {
  return new Promise<Blob>((resolve, reject) => {
    client
      .get(`/api/image?path=${url}`, {
        responseType: "blob",
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
}
