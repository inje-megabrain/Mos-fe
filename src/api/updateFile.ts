import client from "./client";

/**
 *
 * @param {string} dir
 * @param {string} file
 * @param {string} rename
 */

type UDir = {
  dir: string;
  file: string;
  rename: string;
};

export async function updateFile({ dir, file, rename }: UDir) {
  return new Promise((res) => {
    client
      .post("/renameFile", null, { params: { dir, file, rename } })
      .then((v) => {
        console.log(v);
        res(null);
      });
  });
}
