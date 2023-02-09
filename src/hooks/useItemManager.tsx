import { useRecoilState } from "recoil";
import selectedAtom from "../atoms/selectedAtom";

//selectedAtom에 set하도록 하기
export default function useItemManager() {
  const [item, setItem] = useRecoilState(selectedAtom);

  return {
    item,
    setItem,
  };
}
