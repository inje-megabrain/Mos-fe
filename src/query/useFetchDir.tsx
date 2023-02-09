import { useQuery } from "react-query";
import { fetchDir } from "../api/fetchDir";
import { IEntry } from "../types/entry";

export default function useFetchDir(
  dir: string,
  onSuccess?: (data: IEntry[]) => void
) {
  return useQuery(["Dir", dir], () => fetchDir({ dir }), {
    onSuccess(data) {
      if (onSuccess) onSuccess(data);
    },
  });
}
