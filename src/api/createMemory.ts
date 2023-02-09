import client from "./client";
/**
 *
 * @param {string} path
 */

export async function createMemory({ path }: { path: string }) {
  return new Promise((res) => {
    client.post("/makeFile", null, { params: { path } }).then((v) => {
      console.log(v);
    });
  });
}
