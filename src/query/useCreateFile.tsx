import { useMutation } from "react-query";
import { createFile } from "../api/creatFile";

export default function useCreateFile() {
  const mutation = useMutation(createFile, {
    onSuccess: () => {
      console.log("파일 생성 성공!");
    },
    onError: () => {
      console.log("파일 생성 실패!");
    },
  });
  return mutation;
}
