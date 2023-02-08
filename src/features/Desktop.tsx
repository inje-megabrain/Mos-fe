import { useRecoilValue } from "recoil";
import focusAtom from "../atoms/focusAtom";
import { entryProps } from "../pages/TestE";
import Panel from "./Panel";

const Desktop = () => {
  const focusId = useRecoilValue(focusAtom);

  return (
    <Panel entrys={[entryProps.entrydata]} focused={focusId === "Desktop"} />
  );
};

export default Desktop;
