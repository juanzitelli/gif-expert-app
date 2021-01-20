import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../controllers/gifs-controller";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((images) => {
      setGifs({
        data: images,
        loading: false,
      });
    });
  }, [category]);

  return gifs; 

};


