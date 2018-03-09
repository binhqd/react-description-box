import React from 'react';
import DescriptionBox from '../src/DescriptionBox';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let content = 'You will win if you want';
test('DescriptionBox has renderred a correct output', () => {

  const wrapper = mount(<DescriptionBox content={content} maxChars={11}/>);

  expect(wrapper.html()).toEqual('<div>You will...</div>');
  expect(wrapper.text()).toEqual('You will...');
});