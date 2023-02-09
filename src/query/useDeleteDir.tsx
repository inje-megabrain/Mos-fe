import { useMutation } from "react-query";
import { deleteDir } from "../api/deleteDir";

export default function useDeleteDir() {
  const mutation = useMutation(deleteDir, {
    onSuccess: () => {
      console.log("폴더 삭제 성공!");
    },
    onError: () => {
      console.log("폴더 삭제 실패!");
    },
  });
  return mutation;
}
