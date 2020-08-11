import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../controllers/gifs-controller";

const useFecthGifs = (category) => {
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

  return gifs; /* {
		data: images,
		loading: false
	} */
};

export default useFecthGifs;
