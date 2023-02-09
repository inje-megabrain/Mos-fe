import client from "./client";

/**
 *
 * @param {string} dir
 */

export async function readFile({ filename }: { filename: string }) {
  const response = await client.get(`/file?file_path=${filename}`);
  return response.data;
}
