import { Item, Submenu } from "react-contexify";
import { createDir } from "../api/createDir";
import { createFile } from "../api/createFile";
import { PromptPayload } from "../components/Window/PromptWindow";
import useWindowManager from "../hooks/useWindowManager";
import { makePath } from "../utils/path";

const EmptyContextMenu = () => {
  const { getFocusedWindow, createWindow, requestRefresh } = useWindowManager();
  // const { mutateAsync: createDir } = useCreateDir();
  // const { mutateAsync: createFile } = useCreateFile();

  const handleItemClick = ({ id, event, props }: any) => {
    const window = getFocusedWindow();
    if (window?.type !== "dir") return;

    const path: string = window.payload.path;
    switch (id) {
      case "addFolder":
        createWindow<PromptPayload>("prompt", {
          message: "이름을 입력하세요.",
          onConfirm: (text) => {
            createDir({ dir: makePath(path, text) }).then(() => {
              console.log("test");
              requestRefresh(window.id);
            });
          },
        });
        break;
      case "addFile":
        createWindow<PromptPayload>("prompt", {
          message: "이름을 입력하세요.",
          onConfirm: (text) => {
            createFile({ dir: path, file: text }).then(() =>
              requestRefresh(window.id)
            );
          },
        });
        break;
      //etc...
    }
  };

  return (
    <>
      <Submenu label="추가">
        <Item id="addFolder" onClick={handleItemClick}>
          폴더
        </Item>
        <Item id="addFile" onClick={handleItemClick}>
          파일
        </Item>
      </Submenu>
    </>
  );
};

export default EmptyContextMenu;
