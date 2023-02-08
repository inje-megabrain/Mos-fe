import { useEffect } from "react";
import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu,
} from "react-contexify";
import "react-contexify/ReactContexify.css";
import { PromptPayload } from "../components/Window/PromptWindow";
import useItemManager from "../hooks/useItemManager";
import useWindowManager from "../hooks/useWindowManager";
import useCreateDir from "../query/useCreateDir";
import { makePath } from "../utils/path";
import EmptyContextMenu from "./EmptyContextMenu";
import MultiFileContextMenu from "./MultiFileContextMenu";
import SingleFileContextMenu from "./SingleFileContextMenu";

const MENU_ID = "menu";

const ContextMenuLayer = () => {
  const { getSelection } = useItemManager();
  const { getFocusedWindow, createWindow } = useWindowManager();
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

  useEffect(() => {
    document.body.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.body.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [handleContextMenu]);

  return (
    <Menu id={MENU_ID} style={{ zIndex: 1002 }}>
      {getSelection().length === 0 && <EmptyContextMenu />}

      {getSelection().length > 1 && <MultiFileContextMenu />}

      {getSelection().length === 1 && <SingleFileContextMenu />}
    </Menu>
  );
};

export default ContextMenuLayer;
