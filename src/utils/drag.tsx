import { moveFile } from "../api/moveFile";
import { uploadFile } from "../api/uploadFile";
import { IEntry } from "../types/entry";

export const onDrop = (
  e: DragEvent,
  refresh: () => void,
  item: IEntry | null,
  path: string = "/"
) => {
  console.log("hello", path, item);
  const files = e.dataTransfer?.files;
  if (files && files.length > 0) {
    uploadFile({ dir: path, files }).then(() => {
      refresh();
    });
  }
  if (item) {
    console.log(item);
    moveFile({ dir: item.path, mv_dir: path }).then(() => {
      refresh();
    });
  }
};
