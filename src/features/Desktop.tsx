import { useRecoilValue } from "recoil";
import focusAtom from "../atoms/focusAtom";
import { entrydata } from "../utils/entry";
import Panel from "./Panel";

const Desktop = () => {
  const focusId = useRecoilValue(focusAtom);

  return <Panel entrys={entrydata} focused={focusId === "Desktop"} />;
};

export default Desktop;
