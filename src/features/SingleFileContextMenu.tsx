import { Item } from "react-contexify";
import { deleteDir } from "../api/deleteDir";
import { deleteFile } from "../api/deleteFile";
import downloadFile from "../api/downloadFile";
import { getInfo } from "../api/getInfo";
import { shareFile } from "../api/shareFile";
import { updateDir } from "../api/updateDir";
import { updateFile } from "../api/updateFile";
import { MessagePayload } from "../components/Window/MessageWindow";
import { PromptPayload } from "../components/Window/PromptWindow";
import useItemManager from "../hooks/useItemManager";
import useWindowManager from "../hooks/useWindowManager";

const SingleFileContextMenu = () => {
  const { getFocusedWindow, createWindow, requestRefresh } = useWindowManager();
  const { item } = useItemManager();

  const handleItemClick = ({ id, event, props }: any) => {
    const win = getFocusedWindow();

    const refresh = () => {
      if (win) {
        requestRefresh(win.id);
      }
    };
    if (!item) return;

    switch (id) {
      case "shareFile":
        if (!item.isDir) {
          shareFile({ path: item.path }).then((v: string) => {
            createWindow<MessagePayload>("msg", { message: v });
          });
        }
        break;
      case "information":
        getInfo({ filename: item.path }).then((e) => {
          console.log(e);
        });
        break;
      case "changeName":
        createWindow<PromptPayload>(
          "prompt",
          {
            message: "이름을 입력해주세요",
            onConfirm: (text: string) => {
              if (item.isDir) {
                updateDir({ dir: item.path, rename: text }).then(refresh);
              } else {
                updateFile({
                  dir: item.parent,
                  file: item.name,
                  rename: text,
                }).then(refresh);
              }
            },
          },
          "Information"
        );
        break;
      case "delete":
        if (item.isDir) deleteDir({ rm_dir: item.path }).then(refresh);
        else deleteFile({ file: item.path }).then(refresh);
        break;
      case "copy":
        break;
      case "download":
        // if (!item.isDir) downloadFile(item.path);
        // downloadFile(
        //   "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.axios.com%2Fget-smart&psig=AOvVaw2wL74dSBLZLeFmxYnsyvzG&ust=1675997964416000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIj9p4y5h_0CFQAAAAAdAAAAABAD"
        // );
        break;
      //etc...
    }
  };

  return (
    <>
      <Item id="shareFile" onClick={handleItemClick}>
        공유
      </Item>
      <Item id="changeName" onClick={handleItemClick}>
        이름 변경
      </Item>
      <Item id="information" onClick={handleItemClick}>
        정보 가져오기
      </Item>
      <Item id="delete" onClick={handleItemClick}>
        삭제
      </Item>
      <Item id="copy" onClick={handleItemClick}>
        복사
      </Item>
      <Item id="download" onClick={handleItemClick}>
        다운로드
      </Item>
    </>
  );
};

export default SingleFileContextMenu;
