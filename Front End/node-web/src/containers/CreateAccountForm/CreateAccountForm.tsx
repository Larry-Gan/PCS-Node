/**
 * File Name: CreateAccountForm
 * Purpose: This file contains the React component rendered on the create *       account page and the functions that enable a user to create an account
 *       with an email and password via Firebase Auth.
 * Created: February 2021
 * Revised:
 *    > Anna Mollere (5/16/2021) - added code comments
 * References:
 *    > https://formik.org/docs/tutorial
 * Author(s): Anna Mollere (OSU 2020/21)
 **/

import { Formik, Field, Form, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { auth } from 'src/FirebaseConfig';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

export const CreateAccountForm: React.FC = () => {
  {
    /* router is used later to redirect user to homepage after creating an account */
  }
  const router = useRouter();

  {
    /* create account with email and password via Firebase Auth */
  }
  const createAccount = async (email: string, password: string) => {
    try {
      await auth
        //try to create an account with an email and password
        .createUserWithEmailAndPassword(email, password)
        //if successful...
        .then(() => {
          //display success message, thanks to sweetalert2 (https://sweetalert2.github.io/) and redirect user to homepage after 1.5 seconds
          Swal.fire({
            icon: 'success',
            text:
              'Welcome ' +
              email?.substring(0, email.lastIndexOf('@')) +
              '!\n' +
              'Redirecting you to you to the NODE homepage.',
            showConfirmButton: false,
            backdrop: `rgb(51, 204, 51, 0.4)`,
            timer: 1500,
          }).then(() => router.push('./'));
        })
        //if unsuccessful...
        .catch((error) => {
          //display error message, thanks to sweetalert2 (https://sweetalert2.github.io/)
          switch (error.code) {
            case 'auth/email-already-in-use':
              Swal.fire({
                icon: 'error',
                text:
                  'This email address (' +
                  email +
                  ') is already in use by another account.',
                backdrop: `rgb(255, 58, 51, 0.4)`,
              });
              break;
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  //state is used to toggle password visibility
  const [passwordShown, setPasswordShown] = useState(false);

  //togglePasswordVisibility is triggered when someone clicks on the FaRegEye/FaRegEyeSlash icons
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      {/* Create Account Form Container (responsive, centers and sizes form) */}
      <div className="bg-white lg:w-4/12 md:w-6/12 w-10/12 m-auto mt-20 my-10 shadow-md text-center">
        {/* Create Account Form Inner Container (adds padding) */}
        <div className="py-8 px-8 rounded-xl">
          {/* Form Header: "Create Account" */}
          <span className="font-bold text-base text-center p-2 sm:text-xl md:text-2xl lg:text-3xl text-main-dark-blue">
            Create Account
          </span>
          {/* Formik Form */}
          <Formik
            initialValues={{
              email: '',
              password: '',
              passwordConfirm: '',
            }}
            //Form won't submit until all required fields are filled out with valid info, also includes messages to guide user
            validationSchema={Yup.object().shape({
              password: Yup.string()
                .min(6, 'Password must have at least 6 characters')
                .max(18, 'Password cannot exceed 18 characters')
                .required('Required'),
              passwordConfirm: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Required'),
              email: Yup.string().email('Invalid email').required('Required'),
            })}
            //call createAccount function onSubmit with email and password values
            onSubmit={(values) => {
              const { email, password } = values;
              createAccount(email, password);
            }}
            //if status == 'success' then display success message and redirect user (see line 33), else display error message and return to form (see line 48)
            render={({ status }) =>
              status ? (
                <div>{status ? status.success : ''}</div>
              ) : (
                <Form>
                  <>
                    {/* fields and submit button container */}
                    <div className="m-auto text-left block w-4/5 p-5">
                      {/* EMAIL field */}
                      <label className="text-gray-600" htmlFor="email">
                        Email Address
                      </label>
                      {/* display error message for EMAIL field (see line 102) */}
                      <ErrorMessage
                        component="div"
                        className="text-red-500 text-xs font-bold"
                        name="email"
                      />
                      <Field
                        required
                        className="my-2 w-full p-2 outline-none ring-1 ring-grey-600 focus:ring-2 focus:ring-main-dark-blue"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                      />

                      {/* PASSWORD field */}
                      <label className="text-gray-600" htmlFor="password">
                        Password
                      </label>
                      {/* display error message for PASSWORD field (see line 94) */}
                      <ErrorMessage
                        component="div"
                        className="text-red-500 text-xs font-bold"
                        name="password"
                      />
                      {/* Password Field Div (used to position FaRegEye/FaRegEyeSlash icons) */}
                      <div className="relative items-center">
                        <Field
                          required
                          className="my-2 w-full p-2 outline-none ring-1 ring-grey-600 focus:ring-2 focus:ring-main-dark-blue"
                          id="password"
                          name="password"
                          placeholder="Password"
                          //change type depending on passwordShown state
                          type={passwordShown ? 'text' : 'password'}
                        />
                        {/* change eye icon depending on passwordShown state */}
                        {passwordShown ? (
                          <FaRegEyeSlash
                            onClick={togglePasswordVisibility}
                            size={34}
                            className="absolute my-2 inset-y-1 right-0 pr-3 flex items-center leading-5"
                          />
                        ) : (
                          <FaRegEye
                            onClick={togglePasswordVisibility}
                            size={34}
                            className="absolute my-2 inset-y-1 right-0 pr-3 flex items-center leading-5"
                          />
                        )}
                      </div>

                      {/* PASSWORD CONFIRM field */}
                      <label
                        className="text-gray-600"
                        htmlFor="passwordConfirm"
                      >
                        Retype Password
                      </label>
                      {/* display error message for PASSWORD field (see line 98) */}
                      <ErrorMessage
                        component="div"
                        className="text-red-500 text-xs font-bold"
                        name="passwordConfirm"
                      />
                      {/* Password Confirm Field Div (used to position FaRegEye/FaRegEyeSlash icons) */}
                      <div className="relative items-center">
                        <Field
                          required
                          className="my-2 w-full p-2 outline-none ring-1 ring-grey-600 focus:ring-2 focus:ring-main-dark-blue"
                          id="passwordConfirm"
                          name="passwordConfirm"
                          //change type depending on passwordShown state
                          type={passwordShown ? 'text' : 'password'}
                          placeholder="Retype Password"
                        />
                        {/* change eye icon depending on passwordShown state */}
                        {passwordShown ? (
                          <FaRegEyeSlash
                            onClick={togglePasswordVisibility}
                            size={34}
                            className="absolute my-2 inset-y-1 right-0 pr-3 flex items-center leading-5"
                          />
                        ) : (
                          <FaRegEye
                            onClick={togglePasswordVisibility}
                            size={34}
                            className="absolute my-2 inset-y-1 right-0 pr-3 flex items-center leading-5"
                          />
                        )}
                      </div>

                      {/* Create Account Button */}
                      <button
                        type="submit"
                        className="block my-3 w-full p-2 rounded-md border border-main-dark-blue text-gray-600 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-main-dark-blue hover:text-white"
                      >
                        Create Account
                      </button>
                    </div>

                    {/* Form Footer: link back to Login Page */}
                    <span className="block text-gray-600 text-sm">
                      Already have an account?{' '}
                      <a
                        className="text-sm text-main-dark-blue hover:underline cursor-pointer"
                        href="/login"
                      >
                        Sign in.
                      </a>
                    </span>
                  </>
                </Form>
              )
            }
          />
        </div>
      </div>
    </>
  );
};
