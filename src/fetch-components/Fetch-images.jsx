import { useEffect, useState } from "react";
import DisplayImage from "../display-components/DisplayImage";
const API_Key = import.meta.env.VITE_API_KEY;

export default function FetchImages() {
  const [image, setImage] = useState(null);

  const fetchImage = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=${API_Key}&s=cats`
      );
      if (!response.ok) {
        throw new Error("Failed to featch images");
      }

      const imageData = await response.json();
      setImage(imageData.data.images.original.url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return <DisplayImage img={image} />;
}
