import client from "./client";

/**
 *
 * @param {string}dir
 */

export async function uploadFile({
  dir,
  files,
}: {
  dir: string;
  files: FileList;
}) {
  let formData = new FormData();

  let i = 0;
  for (const file of files) {
    // console.log("key", file);
    formData.append(`files[${i++}]`, file);
  }

  return new Promise((res) => {
    client
      .post("/upload?dir=" + dir, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((v) => {
        console.log(v);
        res(null);
      });
  });
}
