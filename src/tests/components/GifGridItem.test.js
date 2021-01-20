import GifGridItem from "../../components/GifGridItem";
import React from "react";
const { shallow } = require("enzyme");

describe("Pruebas en GifGridItem", () => {
  const test_title = "Some title";
  const test_url = "https://localhost/algo.jpg"

  const wrapper = shallow(<GifGridItem url={test_url} title={test_title} />);
  
  

  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe requerir título", () => {
	const title = wrapper.find("p").text().trim();
	expect(title).toBe(test_title);
  });

  test("Debe requerir url", () => {
	const url = wrapper.find("img").prop("src").trim();
	expect(url).toBe(test_url);
	
  });

  test("Debe tener la clase animate__fadeIn", () => {
	const hasClassFadeIn = wrapper.find("div").hasClass('animate__fadeIn');
    expect(hasClassFadeIn).toBe(true);
  });
});
