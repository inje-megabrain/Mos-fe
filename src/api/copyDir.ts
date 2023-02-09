import client from "./client";

/**
 *
 * @param {string} dir
 * @param {string} copyDir
 */

type CDir = {
  dir: string;
  copyDir: string;
};

export async function copyDir({ dir, copyDir }: CDir) {
  return new Promise((res) => {
    client.post("/copy", null, { params: { dir, copyDir } }).then((v) => {
      console.log(v);
    });
  });
}
