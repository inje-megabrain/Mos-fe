import client from "./client";

/**
 *
 * @param {string}dir
 */

export async function uploadFile({ dir }: { dir: string }) {
  return new Promise((res) => {
    client
      .post("/upload", null, {
        params: {
          dir,
        },
      })
      .then((v) => {
        console.log(v);
      });
  });
}
