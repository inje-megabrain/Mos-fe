import { useQuery } from "react-query";
import { fetchDir } from "../api/fetchDir";

export default function useFetchDir(dir: string) {
  return useQuery(["Dir", dir], () => fetchDir({ dir }));
}
