import client from "./client";

/**
 *
 * @param {string} dir
 */

export async function readFile({ filename }: { filename: string }) {
  const response = await client.get(`/file?filename=${filename}`);
  return response.data;
}
