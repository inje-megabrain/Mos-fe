import { ReactNode, useCallback, useEffect, useRef } from "react";

type DragLayerProps = {
  onDropEntry(e: DragEvent): void;
  children: ReactNode;
};

const DragLayer = ({ onDropEntry, children }: DragLayerProps) => {
  const dragRef = useRef<HTMLLabelElement>(null);

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

  const handleDrop = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer) {
      onDropEntry(e);
    }
  }, []);

  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener("dragenter", handleDragIn);
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
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
        ref={dragRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </label>
    </div>
  );
};

export default DragLayer;
