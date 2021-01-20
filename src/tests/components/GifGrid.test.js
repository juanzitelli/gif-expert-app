import React from "react";
import "@testing-library/jest-dom";
import GifGrid from "../../components/GifGrid";
import { shallow } from "enzyme";
import {useFetchGifs} from "../../hooks/useFetchGifs";
// import "@testing-library/jest-dom";
jest.mock("../../hooks/useFetchGifs");

describe("GifGrid tests", () => {
  test("GifGrid debe renderizarse correctamente ", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category="Hello" />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar items cuando se cargan imágenes con useFetchGif", () => {
    const test_gifs = [
      {
        id: "ABC",
        url: "https://localhost/test/cosa.jpg",
        title: "Cualquier Cosa",
      },
      {
        id: "ABC",
        url: "https://localhost/test/cosa.jpg",
        title: "Cualquier Cosa",
      },
      {
        id: "ABC",
        url: "https://localhost/test/cosa.jpg",
        title: "Cualquier Cosa",
      },
      {
        id: "ABC",
        url: "https://localhost/test/cosa.jpg",
        title: "Cualquier Cosa",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: test_gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category="Hello" />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find("GifGridItem").length).toBe(test_gifs.length);
  });
});
