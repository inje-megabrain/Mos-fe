import client from "./client";

/**
 *
 * @param {string}dir
 * @param {string}rm
 */

type DDir = {
  rm_dir: string;
};

export async function deleteDir({ rm_dir }: DDir) {
  return new Promise((res) => {
    client
      .post("/removeDir", null, {
        params: {
          rm_dir,
        },
      })
      .then((v) => {
        console.log(v);
        res(null);
      });
  });
}
