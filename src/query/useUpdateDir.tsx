import { useMutation } from "react-query";
import { updateDir } from "../api/updateDir";

export default function useUpdateDir() {
  const mutation = useMutation(updateDir, {
    onSuccess: () => {
      console.log("폴더 이름 변경 성공!");
    },
    onError: () => {
      console.log("폴더 이름 변경 실패!");
    },
  });
  return mutation;
}
