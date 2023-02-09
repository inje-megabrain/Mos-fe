import { useMutation } from "react-query";
import { moveFile } from "../api/moveFile";

export default function useMoveFile() {
  const mutation = useMutation(moveFile, {
    onSuccess: () => {
      console.log("파일 이동 성공");
    },
    onError: () => {
      console.log("파일 이동 실패");
    },
  });
}
