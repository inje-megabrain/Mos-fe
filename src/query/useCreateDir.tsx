import { useMutation } from "react-query";
import { createDir } from "../api/createDir";

export default function useCreateDir(dir: string) {
  const mutation = useMutation(() => createDir({ dir }), {
    onSuccess: () => {
      console.log("suc");
    },
    onError: () => {
      console.log("err");
    },
  });
  return mutation;
}
