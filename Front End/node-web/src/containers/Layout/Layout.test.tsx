import { shallow } from 'enzyme';
import React from 'react';
import { Layout } from './Layout';

describe('Layout container', () => {
  test('renders', () => {
    const wrapper = shallow(<Layout />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
