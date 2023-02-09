import client from "./client";

/**
 *
 * @param {string} dir
 * @param {string} mv_dir
 */

type MFile = {
  dir: string;
  mv_dir: string;
};

export async function moveFile({ dir, mv_dir }: MFile) {
  return new Promise((res) => {
    client
      .post(`/moveDir?dir=${dir}&mv_dir=${mv_dir}`, null, {
        params: { dir, mv_dir },
      })
      .then((v) => {
        console.log(v);
        res(null);
      });
  });
}
