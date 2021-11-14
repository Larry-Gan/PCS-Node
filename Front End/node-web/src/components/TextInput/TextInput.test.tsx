import { mount } from 'enzyme';
import React from 'react';
import { TextInput } from './TextInput';

describe('TextInput component', () => {
  test('renders', () => {
    const wrapper = mount(<TextInput />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
