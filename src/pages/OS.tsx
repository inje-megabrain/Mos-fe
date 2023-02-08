import ContextMenuLayer from "../features/ContextMenuLayer";
import Desktop from "../features/Desktop";
import WindowLayer from "../features/WindowLayer";

const OS = () => {
  return (
    <>
      <Desktop />
      <WindowLayer />
      <ContextMenuLayer />
    </>
  );
};

export default OS;
