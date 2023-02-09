import { useEffect } from "react";
import { Menu, useContextMenu } from "react-contexify";
import "react-contexify/ReactContexify.css";
import { useRecoilState } from "recoil";
import selectedAtom from "../atoms/selectedAtom";
import EmptyContextMenu from "./EmptyContextMenu";
import SingleFileContextMenu from "./SingleFileContextMenu";

const MENU_ID = "menu";

const ContextMenuLayer = () => {
  const [item, setItem] = useRecoilState(selectedAtom);
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

  function handleMouseDown(event: MouseEvent) {
    if (event.button === 0) setItem(null);
  }

  useEffect(() => {
    document.body.addEventListener("contextmenu", handleContextMenu);
    document.body.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.body.removeEventListener("contextmenu", handleContextMenu);
      document.body.removeEventListener("mousedown", handleMouseDown);
    };
  }, [handleContextMenu, handleMouseDown]);

  return (
    <Menu
      id={MENU_ID}
      style={{ zIndex: 1002 }}
      onMouseDown={(e) => e.stopPropagation()}
    >
      {!item && <EmptyContextMenu />}

      {item && <SingleFileContextMenu />}
    </Menu>
  );
};

export default ContextMenuLayer;
