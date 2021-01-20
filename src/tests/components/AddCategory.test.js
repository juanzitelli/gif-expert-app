import React from "react";
import "@testing-library/jest-dom";
import AddCategory from "../../components/AddCategory";
import { shallow } from "enzyme";
describe("Pruebas en componente AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper;
  const value = "Hola mundo";
  const event = {
    target: {
      value,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test("AddCategoy se renderiza correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    input.simulate("change", event);
  });
  test("NO debe postear la información con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
  test("Debe ser llamado el setCategories Y limpiar la caja de texto ", () => {
    wrapper.find("input").simulate("change", event);
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find("input").prop('value')).toBe('');
})});
