import { useMutation } from "react-query";
import { updateFile } from "../api/updateFile";

export default function useUpdateDir() {
  const mutation = useMutation(updateFile, {
    onSuccess: () => {
      console.log("파일 이름 변경 성공!");
    },
    onError: () => {
      console.log("파일 이름 변경 실패!");
    },
  });
  return mutation;
}
