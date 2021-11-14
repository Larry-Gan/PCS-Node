import { shallow } from 'enzyme';
import React from 'react';
import { CreateAccountForm } from './CreateAccountForm';
// import { auth } from 'src/FirebaseConfig';
// import { ResetPasswordForm } from '../ResetPasswordForm/ResetPasswordForm';

// jest.mock('auth', () => {
//     return {
//         auth: jest.fn().mockReturnThis();
//     };
// });

// describe('create user with email and password', () => {
//     afterAll(() => {{
//         jest.resetAllMocks();
//     }});
//     it('should pass', async () => {
//         const email = 'example@gmail.com';
//         const password = '12345abcde';
//     }
// })

describe('Create Account Form Container', () => {
  test('renders', () => {
    const wrapper = shallow(<CreateAccountForm />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
