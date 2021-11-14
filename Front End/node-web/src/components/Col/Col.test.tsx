import { mount } from 'enzyme';
import React from 'react';
import { Col } from './Col';

describe('Col component', () => {
  test('renders', () => {
    const wrapper = mount(<Col />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
