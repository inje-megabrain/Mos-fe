import { Item } from "react-contexify";
import { PromptPayload } from "../components/Window/PromptWindow";
import useItemManager from "../hooks/useItemManager";
import useWindowManager from "../hooks/useWindowManager";

const MultiFileContextMenu = () => {
  const { getSelection } = useItemManager();
  const { getFocusedWindow, createWindow } = useWindowManager();

  const handleItemClick = ({ id, event, props }: any) => {
    switch (id) {
      case "delete":
        break;
      case "copy":
        break;
    }
  };

  return (
    <>
      <Item id="delete" onClick={handleItemClick}>
        삭제
      </Item>
      <Item id="copy" onClick={handleItemClick}>
        복사
      </Item>
    </>
  );
};

export default MultiFileContextMenu;
