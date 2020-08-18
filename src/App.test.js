import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

// it("render without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   const container = div.getElementsByClassName("app");
//   expect(container.length).toBe(1);
// });

it("render without crashing", () => {
  const wrapper = shallow(<App />); // 浅渲染 只会渲染当前层级，不会渲染子组件
  // 这里就可以使用enzyme的语法了
  expect(wrapper.find(".app").length).toBe(1);
  // console.log(wrapper.debug());
  expect(wrapper.find(".app").prop("title")).toBe("react-app");

  // 解耦
  expect(wrapper.find("[data-test='container']").prop("title")).toBe(
    "react-app"
  );

  // jest-enzyme
  expect(wrapper.find("[data-test='container']")).toExist();
  expect(wrapper.find("[data-test='container']")).toHaveProp(
    "title",
    "react-app"
  );

  // 快照
  // expect(wrapper).toMatchSnapshot();
});
