import { shallow } from 'enzyme';
import React from 'react';
import { ResetPasswordForm } from './ResetPasswordForm';

describe('Reset Password Container', () => {
  test('renders', () => {
    const wrapper = shallow(<ResetPasswordForm />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
