import client from "./client";

/**
 *
 * @param {string} dir
 */

// type Dir = {
//   name: string;
//   isDir: boolean;
//   ext: string;
// };

export async function fetchDir({ dir }: { dir: string }) {
  const response = await client.get(`/getDir?dir=${dir}`);
  return response.data.result;
  // return new Promise((res) => {
  //   client.get<Dir>("/getDir").then((v) => {
  //     if (v.data) {
  //       console.log(v.data);
  //     }
  //   });
  // });
}
