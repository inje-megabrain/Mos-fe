import React from "react";
import useCreateDir from "../query/useCreateDir";

const T = () => {
  const { mutate: createDir } = useCreateDir();
  return (
    <div>
      <button
        onClick={() => {
          createDir({ dir: "hi" });
        }}
      >
        TEST
      </button>
    </div>
  );
};

export default T;
