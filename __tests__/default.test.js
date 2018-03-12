import React from 'react';
import DescriptionBox from '../src/DescriptionBox';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let content = 'You will win if you want';
test('DescriptionBox has renderred a correct output', () => {

  const wrapper = mount(<DescriptionBox content={content} maxChars={11}/>);

  expect(wrapper.html()).toEqual('<div>You will...</div>');
  expect(wrapper.text()).toEqual('You will...');
});

test('DescriptionBox return null if content is empty', () => {

  const wrapper = shallow(<DescriptionBox content='' maxChars={11}/>);
  expect(wrapper.html()).toEqual(null);
});

test('DescriptionBox return null if component is null', () => {

  const wrapper = shallow(<DescriptionBox component={null} content={content} maxChars={11}/>);
  expect(wrapper.html()).toEqual(null);
});

test('DescriptionBox return readMore link', () => {

  const wrapper = mount(<DescriptionBox content={content} maxChars={11} readMore={{
    text: 'Read more',
    link: 'http://google.com'
  }}/>);

  expect(wrapper.html()).toEqual('<div>You will...<a href=\"http://google.com\">Read more</a></div>');
});
