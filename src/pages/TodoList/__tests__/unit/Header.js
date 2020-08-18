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
