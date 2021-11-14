import { mount } from 'enzyme';
import React from 'react';
import { Container } from './Container';

describe('Container component', () => {
  test('renders', () => {
    const wrapper = mount(<Container />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
