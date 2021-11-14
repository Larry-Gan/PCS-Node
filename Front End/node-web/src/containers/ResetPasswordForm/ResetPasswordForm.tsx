/**
 * File Name: ResetPasswordForm
 * Purpose: This file contains the React component rendered on the reset *       password page and the function that enables a user to reset their
 *       password via Firebase Auth.
 * Created: February 2021
 * Revised:
 *    > Anna Mollere (5/16/2021) - added code comments and fixed typos
 * References:
 *    > https://formik.org/docs/tutorial
 * Author(s): Anna Mollere (OSU 2020/21)
 **/

import { Formik, Field, Form } from 'formik';
import React from 'react';
import { auth } from 'src/FirebaseConfig';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

export const ResetPasswordForm: React.FC = () => {
  const router = useRouter();

  //resetPassword function sends password reset email to user (when valid email is entered)
  const resetPassword = async (email: string) => {
    try {
      await auth
        //try to send a password reset email to user
        .sendPasswordResetEmail(email)
        //if successful...
        .then(() => {
          //display success message, thanks to sweetalert2 (https://sweetalert2.github.io/) and redirect user to homepage after 1.5 seconds
          Swal.fire({
            icon: 'success',
            text: 'A password reset link was just sent to: ' + email + '.',
            confirmButtonText: 'Return to Sign In Page',
            backdrop: `rgb(51, 204, 51, 0.4)`,
          }).then(() => router.push('./login'));
        })
        //if unsuccessful...
        .catch((error) => {
          //display error message, thanks to sweetalert2 (https://sweetalert2.github.io/)
          switch (error.code) {
            case 'auth/user-not-found':
              Swal.fire({
                icon: 'error',
                text: 'There is no user record associated with: ' + email + '.',
                backdrop: `rgb(255, 58, 51, 0.4)`,
              });
              break;
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Reset Password Form Container (responsive, centers and sizes form) */}
      <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto mt-20 my-10 shadow-md text-center">
        {/* Reset Password Form Inner Container (adds padding) */}
        <div className="py-8 px-8 rounded-xl">
          {/* Form Header: "Reset Password" */}
          <span className="font-bold text-base text-center p-2 sm:text-xl md:text-2xl lg:text-3xl text-main-dark-blue">
            Reset Password
          </span>
          <div>
            {/* Formik Form */}
            <Formik
              initialValues={{
                email: '',
              }}
              //call resetPassword function onSubmit with email value, then reset the form (useful when user enters invalid email)
              onSubmit={(values, { resetForm }) => {
                const { email } = values;
                resetPassword(email);
                resetForm();
              }}
            >
              <Form>
                {/* field and submit button container */}
                <div className="m-auto text-left block w-4/5 p-5">
                  {/* EMAIL field */}
                  <label className="text-gray-600" htmlFor="email">
                    Email Address
                  </label>
                  <Field
                    required
                    className="my-2 w-full p-2 outline-none ring-1 ring-grey-600 focus:ring-2 focus:ring-main-dark-blue"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                  />

                  {/* Reset Password Button */}
                  <button
                    type="submit"
                    className="block my-3 w-full p-2 rounded-md border border-main-dark-blue text-gray-600 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-main-dark-blue hover:text-white"
                  >
                    Reset Password
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
