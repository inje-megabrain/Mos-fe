import client from "./client";

/**
 *
 * @param {string}dir
 * @param {string}rm
 */

type DDir = {
  dir: string;
  rm: string;
};

export async function deleteDir({ dir, rm }: DDir) {
  return new Promise((res) => {
    client
      .post("/removeDir", null, {
        params: {
          dir,
          rm,
        },
      })
      .then((v) => {
        console.log(v);
      });
  });
}
