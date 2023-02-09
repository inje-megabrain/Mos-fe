import { useMutation } from "react-query";
import { uploadFile } from "../api/uploadFile";

export default function useDeleteDir() {
  const mutation = useMutation(uploadFile, {
    onSuccess: () => {
      console.log("파일 업로드 성공!");
    },
    onError: () => {
      console.log("파일 업로드 실패!");
    },
  });
  return mutation;
}
