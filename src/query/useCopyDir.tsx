import { useMutation } from "react-query";
import { copyDir } from "../api/copyDir";

export default function useCreateDir() {
  const mutation = useMutation(copyDir, {
    onSuccess: () => {
      console.log("폴더/파일 복사 성공!");
    },
    onError: () => {
      console.log("폴더/파일 복사 실패!");
    },
  });
  return mutation;
}
