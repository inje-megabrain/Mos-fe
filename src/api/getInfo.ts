import client from "./client";

/**
 *
 * @param {string} dir
 */

export async function getInfo({ filename }: { filename: string }) {
  const response = await client.get(`/getAttribute?file=${filename}`);
  return response.data;
}
