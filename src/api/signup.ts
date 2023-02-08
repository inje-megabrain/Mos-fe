import client from "./client";
import { IToken, IUser } from "../types/user";

type JoinProps = {
  id: string;
  pw: string;
};

export async function signup({ id, pw }: JoinProps) {
  const response = await client
    .post<IToken>("/join", { id, pw })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
  return response;
}
