import { useEffect } from "react";
import useReadFile from "../../query/useReadFile";
import { getNearEntryName } from "../../utils/path";
import BaseWindow, { WindowHandle } from "./BaseWindow";

export type TxtPayload = {
  path: string;
};

const TxtWindow = (props: WindowHandle<TxtPayload>) => {
  const { data } = useReadFile(props.payload.path, () => {});
  useEffect(() => {
    // set Window Name
    props.setContext("name", getNearEntryName(props.payload.path));
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
          }}
        >
          {data}
        </div>
      )}
    </BaseWindow>
  );
};

export default TxtWindow;
