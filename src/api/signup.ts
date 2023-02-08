import client from "./client";
import { IUser } from "../types/user";

export async function signup() {
  const response = await client.post<IUser>("/signin");
  return response.data;
}
