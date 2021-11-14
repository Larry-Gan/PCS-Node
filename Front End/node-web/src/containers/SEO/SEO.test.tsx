import { shallow } from 'enzyme';
import React from 'react';
import { SEO } from './SEO';

describe('SEO container', () => {
  test('renders', () => {
    const wrapper = shallow(<SEO title="test" />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
