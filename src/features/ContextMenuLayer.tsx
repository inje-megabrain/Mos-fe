import { useEffect } from "react";
import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu,
} from "react-contexify";
import "react-contexify/ReactContexify.css";

const MENU_ID = "menu";

const ContextMenuLayer = () => {
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
    <Menu id={MENU_ID}>
      <Item id="copy" onClick={handleItemClick}>
        Copy
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
