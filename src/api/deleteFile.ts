import client from "./client";

/**
 *
 * @param {string}dir
 * @param {string}file
 */

type DFile = {
  file: string;
};

export async function deleteFile({ file }: DFile) {
  return new Promise((res) => {
    client.post("/removeFile?file=" + file).then((v) => {
      console.log(v);
      res(null);
    });
  });
}
