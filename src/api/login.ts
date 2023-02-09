import client from "./client";
import { IUser } from "../types/user";

type LoginProps = {
  id: string;
  pw: string;
};

export async function login({ id, pw }: LoginProps) {
  const response = await client.post("/login", { id, pw }).then((res) => {
    console.log(res);
    return res.data;
  });
  return response;
}
