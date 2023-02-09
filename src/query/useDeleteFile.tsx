import { useMutation } from "react-query";
import { deleteFile } from "../api/deleteFile";

export default function useDeleteDir() {
  const mutation = useMutation(deleteFile, {
    onSuccess: () => {
      console.log("파일 삭제 성공!");
    },
    onError: () => {
      console.log("파일 삭제 실패!");
    },
  });
  return mutation;
}
