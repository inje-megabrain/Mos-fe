import BaseWindow, { WindowHandle } from "./BaseWindow";
import { useState, useCallback } from "react";

export type PromptPayload = {
  message: string;
  placeholder?: string;
  onConfirm(text: string): void;
};

const PromptWindow = (props: WindowHandle<PromptPayload>) => {
  const [value, setValue] = useState(props.payload.placeholder || "");

  const onTextChange = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);

  return (
    <BaseWindow {...props}>
      {() => (
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {props.payload.message}
          <input
            style={{ marginTop: "10px" }}
            placeholder="Entry Name"
            value={value}
            onChange={onTextChange}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "80%",
            }}
          >
            <button
              style={{ marginTop: "20px", display: "flex" }}
              onClick={() => {
                if (value && value.length > 0) {
                  props.payload.onConfirm(value);
                  props.destroy();
                }
              }}
            >
              EDIT
            </button>
          </div>
        </div>
      )}
    </BaseWindow>
  );
};

export default PromptWindow;
