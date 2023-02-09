import { uploadFile } from "../api/uploadFile";
import useWindowManager from "../hooks/useWindowManager";

export const onDrop = (e: DragEvent) => {
  if (e.dataTransfer?.getData("type") === "true") {
    console.log("hello");
  } else {
    const { getFocusedWindow, requestRefresh } = useWindowManager();

    const files = e.dataTransfer?.files;
    if (files)
      uploadFile({ dir: "/", files }).then(() => {
        const win = getFocusedWindow();
        if (win) requestRefresh(win.id);
      });
  }
};
