import { DragEvent, ReactNode, useCallback } from "react";

type DragLayerProps = {
  onDropEntry(e: DragEvent): void;
  children: ReactNode;
};

const DragLayer = ({ onDropEntry, children }: DragLayerProps) => {
  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      if (e.dataTransfer) {
        onDropEntry(e);
      }
    },
    [onDropEntry]
  );

  return (
    <>
      <input
        type="file"
        id="fileUpload"
        style={{ display: "none" }}
        multiple={true}
        onClick={(e) => {
          e.preventDefault();
        }}
      />

      <label
        htmlFor="fileUpload"
        onDragEnter={handleDragIn}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragOut}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {children}
        </div>
      </label>
    </>
  );
};

export default DragLayer;
