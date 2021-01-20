import React from "react";
import "@testing-library/jest-dom";
// import GifGrid from "../../components/GifGrid";
import { shallow } from "enzyme";
import GifExpertApp from "../../components/GifExpertApp";
// import { useFetchGifs } from "../../hooks/useFetchGifs";
import "@testing-library/jest-dom";

describe("Pruebas en GifExpertApp", () => {
  test("Debe renderizarse correctamente", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  }); 

  test("Debe mostrar una lista de categorias", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
