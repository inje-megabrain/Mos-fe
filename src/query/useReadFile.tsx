import { useQuery } from "react-query";
import { fetchDir } from "../api/fetchDir";
import { readFile } from "../api/readFile";
import { IEntry } from "../types/entry";

export default function useReadFile(
  file: string,
  onSuccess: (data: IEntry[]) => void
) {
  return useQuery(["file", file], () => readFile({ filename: file }), {
    onSuccess(data) {
      onSuccess(data);
    },
  });
}
