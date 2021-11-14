import { shallow } from 'enzyme';
import React from 'react';
import { LoginForm } from './LoginForm';

describe('Login Form Container', () => {
  test('renders', () => {
    const wrapper = shallow(<LoginForm />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
