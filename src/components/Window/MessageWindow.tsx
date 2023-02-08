import BaseWindow, { WindowHandle } from "./BaseWindow";

export type MessagePayload = {
  message: string;
};

const MessageWindow = (props: WindowHandle<MessagePayload>) => {
  return (
    <BaseWindow {...props}>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.payload.message}
      </div>
    </BaseWindow>
  );
};

export default MessageWindow;
