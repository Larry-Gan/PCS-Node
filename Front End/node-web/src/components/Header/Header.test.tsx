import { mount } from 'enzyme';
import React from 'react';
import { HeaderXl } from './Header';

describe('Header component', () => {
  test('renders', () => {
    const wrapper = mount(<HeaderXl />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
