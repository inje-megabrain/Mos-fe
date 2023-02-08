import { useMutation } from "react-query";
import { createMemory } from "../api/createMemory";

export default function useCreateMemory() {
  const mutation = useMutation(createMemory, {
    onSuccess: () => {
      console.log("공유 메모리 생성 성공!");
    },
    onError: () => {
      console.log("공유 메모리 생성 실패!");
    },
  });
  return mutation;
}
