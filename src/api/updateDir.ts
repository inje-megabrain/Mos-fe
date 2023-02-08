import client from "./client";

/**
 *
 * @param {string} dir
 * @param {string} rename
 */

type UDir = {
  dir: string;

  rename: string;
};

export async function updateDir({ dir, rename }: UDir) {
  return new Promise((res) => {
    client.post("/renameDir", null, { params: { dir, rename } }).then((v) => {
      console.log(v);
    });
  });
}
