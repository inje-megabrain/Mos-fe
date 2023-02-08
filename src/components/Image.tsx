import { useEffect, useState } from "react";
import fetchImage from "../api/fetchImage";

type ImageProps = {
  fileName: string;
  folder: string;
};

const Image = ({ fileName, folder }: ImageProps) => {
  const [path, setPath] = useState("");

  useEffect(() => {
    fetchImage(folder, fileName).then((data) => {
      setPath(URL.createObjectURL(data));
    });
  }, []);

  return <img src={path} />;
};

export default Image;
