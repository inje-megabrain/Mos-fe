import client from "./client";

export async function cerateDir({ dir }: { dir: string }) {
  return new Promise((res, rej) => {
    client.post("/makeDir?", { dir }).then((v) => {
      if (v.data.ok) {
        res(v.data);
      }
    });
  });
}
