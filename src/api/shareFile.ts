import client from "./client";

/**
 *
 * @param {string} path
 */

export async function shareFile({ path }: { path: string }) {
  return new Promise<any>((res) => {
    client.post("/makeUUID", null, { params: { path } }).then((v) => {
      console.log(v);
      res(v);
    });
  });
}
