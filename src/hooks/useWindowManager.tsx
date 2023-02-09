import { useRecoilState, useSetRecoilState } from "recoil";
import windowAtom from "../atoms/windowAtom";
import { v4 } from "uuid";
import {
  WindowContext,
  WindowHandle,
  WindowType,
} from "../components/Window/BaseWindow";
import { makeWindow } from "../components/Window";
import focusAtom from "../atoms/focusAtom";
import { DirectoryPayload } from "../components/Window/DirectoryWindow";

function getIndex(windows: WindowContext[], id: string) {
  return windows.findIndex((ctx) => ctx.id === id);
}

export default function useWindowManager() {
  const [windows, setWindows] = useRecoilState(windowAtom);
  const [focusId, setFocus] = useRecoilState(focusAtom);

  const ret = {
    windows,
    createHandle(id: string): Omit<WindowHandle, keyof WindowContext> {
      return {
        setContext(key, value) {
          setWindows((prev) => {
            const i = getIndex(prev, id);
            return [
              ...prev.slice(0, i),
              {
                ...prev[i],
                [key]: value,
              },
              ...prev.slice(i + 1),
            ];
          });
        },
        focus() {
          setFocus(id);
        },
        destroy() {
          setWindows((prev) => {
            const nWins = [...prev];
            nWins.splice(getIndex(nWins, id), 1);
            return nWins;
          });
        },
        hasFocus() {
          return focusId === id;
        },
      };
    },
    createWindow<T>(type: WindowType, payload: T, name: string = "") {
      const win = makeWindow(v4(), type, payload, name);
      setWindows((prev) => {
        const nWindows = [...prev];
        nWindows.push(win);
        return nWindows;
      });
      setFocus(win.id);
    },
    getFocusedWindow() {
      if (focusId === "Desktop")
        return {
          id: "Desktop",
          type: "dir",
          payload: { path: "/" },
        };

      return windows.find((win) => win.id === focusId);
    },
    getDesktop() {
      return windows.find((el) => el.id === "Desktop");
    },
    requestRefresh(id: string) {
      const win = windows.find((el) => el.id === id);
      if (win?.type === "dir") {
        ret.createHandle(id).setContext("payload", {
          ...win.payload,
          refreshNumber: win.payload.refreshNumber + 1,
        });
      }
    },
  };

  return ret;
}
