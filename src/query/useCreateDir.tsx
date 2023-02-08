import { useMutation } from "react-query";
import { createDir } from "../api/createDir";

export default function useCreateDir() {
  const mutation = useMutation(createDir, {
    onSuccess: () => {
      console.log("suc");
    },
    onError: () => {
      console.log("err");
    },
  });
  return mutation;
}
