import React from "react";
import TodoList from "../../index";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

// it(`list 初始化为空`, () => {
//   const wrapper = shallow(<TodoList />);
//   const listWrap = wrapper.find('[data-test="listWrap"]');
//   expect(listWrap).not.toHaveText();
// });

it(`TodoList 应该给 Header组件传递 addItem 事件`, () => {
  const wrapper = shallow(<TodoList />);
  const Header = wrapper.find("Header");
  expect(Header.prop("addItem")).toBe(wrapper.instance().addItem);
});
