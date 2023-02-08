import client from "./client";

/**
 *
 * @param {string} dir
 * @param {string} file
 */

type CFile = {
  dir: string;
  file: string;
};

export async function createFile({ dir, file }: CFile) {
  return new Promise((res) => {
    client.post("/makeFile", null, { params: { dir, file } }).then((v) => {
      console.log(v);
    });
  });
}
