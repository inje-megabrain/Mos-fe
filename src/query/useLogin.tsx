import { useMutation } from "react-query";
import { login } from "../api/login";

export default function useLogin() {
  const mutation = useMutation(login, {
    onSuccess: () => {
      console.log("suc");
    },
    onError: () => {
      console.log("err");
    },
  });
  return mutation;
}
