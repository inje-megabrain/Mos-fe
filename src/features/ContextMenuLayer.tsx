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

const MENU_ID = "menu";

const ContextMenuLayer = () => {
  const { getSelection } = useItemManager();
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
    switch (id) {
      case "copy":
        console.log(event, props);
        break;
      case "cut":
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
    <Menu id={MENU_ID} style={{ zIndex: 1001 }}>
      <Item id="info" onClick={handleItemClick}>
        선택된 {getSelection().length} 아이템
      </Item>
      <Item id="copy" onClick={handleItemClick}>
        복사
      </Item>
      <Item id="cut" onClick={handleItemClick}>
        Cut
      </Item>
      <Separator />
      <Item disabled>Disabled</Item>
      <Separator />
      <Submenu label="Foobar">
        <Item id="reload" onClick={handleItemClick}>
          Reload
        </Item>
        <Item id="something" onClick={handleItemClick}>
          Do something else
        </Item>
      </Submenu>
    </Menu>
  );
};

export default ContextMenuLayer;
