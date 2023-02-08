import client from "./client";
import { IUser } from "../types/user";

export async function login() {
  const response = await client.post<IUser>("/login");
  return response.data;
}
