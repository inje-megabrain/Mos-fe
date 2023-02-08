import { useRecoilValue } from "recoil";
import focusAtom from "../atoms/focusAtom";
import Panel from "./Panel";

const Desktop = () => {
  const focusId = useRecoilValue(focusAtom);

  return <Panel entrys={[]} focused={focusId === "Desktop"} />;
};

export default Desktop;
