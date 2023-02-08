import { useMutation } from "react-query";
import { signup } from "../api/signup";

export default function useSignUp() {
  const mutation = useMutation(signup, {
    onSuccess: () => {
      console.log("suc");
    },
    onError: () => {
      console.log("err");
    },
  });
  return mutation;
}
