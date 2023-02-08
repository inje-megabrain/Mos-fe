import { useEffect, useState } from "react";
import fetchImage from "../api/fetchImage";

type ImageProps = {
  url: string;
};

const Image = ({ url }: ImageProps) => {
  const [path, setPath] = useState("");

  useEffect(() => {
    fetchImage(url).then((data) => {
      setPath(URL.createObjectURL(data));
    });
  }, []);

  return <img src={path} />;
};

export default Image;
