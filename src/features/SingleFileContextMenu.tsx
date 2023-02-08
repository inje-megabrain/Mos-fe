import { Item } from "react-contexify";
import { PromptPayload } from "../components/Window/PromptWindow";
import useItemManager from "../hooks/useItemManager";
import useWindowManager from "../hooks/useWindowManager";

const SingleFileContextMenu = () => {
  const { getSelection } = useItemManager();
  const { getFocusedWindow, createWindow } = useWindowManager();

  const handleItemClick = ({ id, event, props }: any) => {
    switch (id) {
      case "shareFile":
        break;
      case "information":
        break;
      case "changeName":
        createWindow<PromptPayload>(
          "prompt",
          {
            message: "이름을 입력해주세요",
            onConfirm: (text: string) => {},
          },
          "Information"
        );
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
    </>
  );
};

export default SingleFileContextMenu;
