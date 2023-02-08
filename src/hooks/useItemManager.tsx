import { useState } from "react";
import { useRecoilState } from "recoil";
import selectedAtom from "../atoms/selectedAtom";

//selectedAtom에 set하도록 하기
export default function useItemManager() {
  const [items, setItems] = useRecoilState(selectedAtom);

  return {
    items,
    setItems,
    setSelectedById(id: string, selected: boolean) {
      setItems((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          selected,
        },
      }));
    },
    getSelection() {
      return Object.values(items).filter((item) => item.selected);
    },
  };
}
