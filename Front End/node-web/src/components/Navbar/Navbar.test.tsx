import { mount } from 'enzyme';
import React from 'react';
import { Navbar } from './Navbar';

describe('Navbar component', () => {
  test('renders', () => {
    const wrapper = mount(<Navbar title="test" links={[]} />);

    expect(wrapper.exists()).toBe(true);
  });
});
