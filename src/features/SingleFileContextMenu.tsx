import { Item } from "react-contexify";
import { useRecoilValue } from "recoil";
import { deleteDir } from "../api/deleteDir";
import { deleteFile } from "../api/deleteFile";
import downloadFile from "../api/downloadFile";
import { getInfo } from "../api/getInfo";
import { shareFile } from "../api/shareFile";
import { updateDir } from "../api/updateDir";
import { updateFile } from "../api/updateFile";
import selectedAtom from "../atoms/selectedAtom";
import { MessagePayload } from "../components/Window/MessageWindow";
import { PromptPayload } from "../components/Window/PromptWindow";
import useWindowManager from "../hooks/useWindowManager";

const SingleFileContextMenu = () => {
  const { getFocusedWindow, createWindow, requestRefresh } = useWindowManager();
  const item = useRecoilValue(selectedAtom);

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
          shareFile({ path: item.path }).then((v) => {
            createWindow<MessagePayload>("msg", {
              message: `/downloadUUID?
            UUID=${v.message}`,
            });
          });
        }
        break;
      case "information":
        getInfo({ filename: item.path }).then((e) => {
          createWindow<MessagePayload>("msg", {
            message: `작성일자 ${e.creationTime}, 마지막 접근 ${e.lastAccessTime}, 마지막 수정 ${e.lastModifiedTime}`,
          });
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
        if (!item.isDir) {
          downloadFile(item.path).then((data) => {
            // create file link in browser's memory
            if (!data) return;

            const href = URL.createObjectURL(data);

            // create "a" HTML element with href to file & click
            const link = document.createElement("a");
            link.href = href;
            link.setAttribute("download", item.name); //or any other extension
            document.body.appendChild(link);
            link.click();

            // clean up "a" element & remove ObjectURL
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
          });
        }
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
