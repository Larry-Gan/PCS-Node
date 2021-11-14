import { mount } from 'enzyme';
import React from 'react';
import { Button } from './Button';

describe('Button component', () => {
  test('renders', () => {
    const wrapper = mount(<Button />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
