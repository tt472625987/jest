import React from "react";
import Header from "../../components/Header";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

it(`Header 组件包含一个input框`, () => {
  const wrapper = shallow(<Header />);
  const inputElem = wrapper.find('[data-test="input"]');
  expect(inputElem.length).toBe(1);
});

it(`Header 组件 input 初始值为空`, () => {
  const wrapper = shallow(<Header />);
  const inputElem = wrapper.find('[data-test="input"]');
  expect(inputElem.prop("value")).toEqual("");
});

it(`Header 组件 input 框内容，当用户输入时，会跟随变化`, () => {
  const wrapper = shallow(<Header />);
  const inputElem = wrapper.find('[data-test="input"]');
  const inputText = "今天学习jest";
  inputElem.simulate("change", {
    target: {
      value: inputText,
    },
  });
  const newInputElem = wrapper.find('[data-test="input"]');
  expect(newInputElem.prop("value")).toEqual(inputText);
});

it(`Header 组件 input框输入回车时，如果input框无内容，无操作`, () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addItem={fn} />);
  const inputElem = wrapper.find('[data-test="input"]');
  inputElem.simulate("change", {
    target: {
      value: "",
    },
  });
  inputElem.simulate("keyUp", {
    keyCode: 13,
  });
  expect(fn).not.toHaveBeenCalled();
});

it(`Header 组件 input框输入回车时，如果input框有内容，函数应该被调用`, () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addItem={fn} />);
  const inputElem = wrapper.find('[data-test="input"]');
  inputElem.simulate("change", {
    target: {
      value: "学习jest",
    },
  });
  const newInputElem = wrapper.find('[data-test="input"]');
  newInputElem.simulate("keyUp", {
    keyCode: 13,
  });
  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenLastCalledWith("学习jest");
});
