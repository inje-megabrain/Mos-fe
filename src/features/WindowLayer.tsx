import { Button } from "@mui/material";
import Window from "../components/Window";
import useWindowManager from "../hooks/useWindowManager";

export default function WindowLayer() {
  const { windows, createHandle, createWindow } = useWindowManager();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          position: "fixed",
          left: 0,
          background: "gray",
          width: "100%",
          bottom: 0,
        }}
      >
        <>
          <Button onClick={() => createWindow("dir", { path: "/hello" })}>
            +
          </Button>
          {windows.map((ctx) => (
            <button
              key={ctx.id}
              onClick={() => createHandle(ctx.id).setContext("active", true)}
            >
              {ctx.name}
            </button>
          ))}
        </>
      </div>
      {windows.map((ctx) => (
        <Window key={ctx.id} {...ctx} {...createHandle(ctx.id)} />
      ))}
    </>
  );
}
