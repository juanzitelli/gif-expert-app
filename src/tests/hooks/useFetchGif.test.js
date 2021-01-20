import React from "react";
// import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en customHook useFetchGif", () => {
  test("Debe retornar el estado inicial", async () => {
    const category = "Perro";

    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category) );
	const { data, loading } = result.current;
	await waitForNextUpdate();
  
    
    expect(data).toStrictEqual([]);
    expect(loading).toBe(true);
  });

  test("Debe retornar un arreglo de imágenes y cambiar el valor de loading a false", async () => {
    const category = "Dogs";

    const { result, waitForNextUpdate } = renderHook( () =>
      useFetchGifs(category)
    );
	await waitForNextUpdate();
	const { data, loading } = result.current;
	
	// console.log(result.current)

	expect(loading).toBe(false)
	expect(data.length).toBe(10);
  });
});
