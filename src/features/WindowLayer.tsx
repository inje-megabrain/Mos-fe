import { Button } from "@mui/material";
import Window from "../components/Window";
import useWindowManager from "../hooks/useWindowManager";
import WindowItem from "./WindowItem";

export default function WindowLayer() {
  const { windows, createHandle, createWindow } = useWindowManager();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "4px",
          alignItems: "center",
          position: "sticky",
          left: 0,
          background: "rgba(255,255,255, 0.3)",
          boxShadow: "0px -5px 5px rgba(255,255,255, 0.2) blur",
          backdropFilter: "blur(50px)",
          width: "100%",
          minHeight: 40,
          bottom: 0,
        }}
      >
        {windows
          .filter((win) => win.id !== "Desktop")
          .map((ctx) => (
            <WindowItem
              key={ctx.id}
              {...ctx}
              requestActive={() =>
                createHandle(ctx.id).setContext("active", true)
              }
            />
          ))}
      </div>
      {windows
        .filter((win) => win.id !== "Desktop")
        .map((ctx) => (
          <Window key={ctx.id} {...ctx} {...createHandle(ctx.id)} />
        ))}
    </>
  );
}
