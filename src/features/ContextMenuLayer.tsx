import { useEffect } from "react";
import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu,
} from "react-contexify";
import "react-contexify/ReactContexify.css";
import useItemManager from "../hooks/useItemManager";
import useWindowManager from "../hooks/useWindowManager";
import useCreateDir from "../query/useCreateDir";
import { makePath } from "../utils/path";

const MENU_ID = "menu";

const ContextMenuLayer = () => {
  const { getSelection } = useItemManager();
  const { getFocusedWindow, createWindow } = useWindowManager();
  const { mutate: createDir } = useCreateDir();
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  function handleContextMenu(event: any) {
    show({
      event,
      props: {
        key: "value",
      },
    });
  }

  const handleItemClick = ({ id, event, props }: any) => {
    const currentWindow = getFocusedWindow();
    switch (id) {
      case "addFolder":
        createDir({ dir: makePath(currentWindow?.payload.path, "fff") });
        break;
      case "addFile":
        console.log(event, props);
        break;
      //etc...
    }
  };

  useEffect(() => {
    document.body.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.body.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [handleContextMenu]);

  return (
    <Menu id={MENU_ID} style={{ zIndex: 1002 }}>
      {getSelection().length === 0 ? (
        <Submenu label="추가">
          <Item id="addFolder" onClick={handleItemClick}>
            폴더
          </Item>
          <Item id="addFile" onClick={handleItemClick}>
            파일
          </Item>
        </Submenu>
      ) : (
        <>
          <Item id="delete" onClick={handleItemClick}>
            삭제
          </Item>
          <Item id="copy" onClick={handleItemClick}>
            복사
          </Item>
        </>
      )}
      <Separator />
      {getSelection().length === 1 && <Item id="changeName">이름 변경</Item>}
    </Menu>
  );
};

export default ContextMenuLayer;
