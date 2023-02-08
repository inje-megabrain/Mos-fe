import client from "./client";

/**
 *
 * @param {string}dir
 * @param {string}file
 */

type DFile = {
  dir: string;
  file: string;
};

export async function deleteFile({ dir, file }: DFile) {
  return new Promise((res) => {
    client
      .post("/removeFile", null, {
        params: {
          dir,
          file,
        },
      })
      .then((v) => {
        console.log(v);
      });
  });
}
