import client from "./client";

/**
 *
 * @param {string} dir
 */

export async function createDir({ dir }: { dir: string }) {
  return new Promise((res) => {
    client.post("/makeDir", null, { params: { dir } }).then((v) => {
      console.log(v);
    });
  });
}
