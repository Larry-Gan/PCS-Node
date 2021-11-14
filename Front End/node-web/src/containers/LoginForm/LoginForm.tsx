/**
 * File Name: LoginForm
 * Purpose: This file contains the React component rendered on the login *       page and the functions that enable a user to sign in
 *       with an email and password or a google, github, twitter, and facebook
 *       account via Firebase Auth.
 * Created: February 2021
 * Revised:
 *    > Anna Mollere (5/16/2021) - added code comments and fixed typos
 * References:
 *    > https://formik.org/docs/tutorial
 * Author(s): Anna Mollere (OSU 2020/21)
 **/

import { Formik, Field, Form } from 'formik';
import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../FirebaseContext';
import { auth } from 'src/FirebaseConfig';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { GoMarkGithub } from 'react-icons/go';
import {
  FaRegEye,
  FaRegEyeSlash,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa';
import firebase from 'firebase';

export const LoginForm: React.FC = () => {
  //providers used to enable signing in with various accounts
  const FacebookProvider = new firebase.auth.FacebookAuthProvider();
  const GoogleProvider = new firebase.auth.GoogleAuthProvider();
  const GitHubProvider = new firebase.auth.GithubAuthProvider();
  const TwitterProvider = new firebase.auth.TwitterAuthProvider();

  //user context used to determine whether user is signed in or not
  const user = useContext(FirebaseContext);
  //router is used to redirect user to homepage after signing in
  const router = useRouter();

  //signInWithProvider function signs user in with facebook, google, github, and twitter accounts
  const signInWithProvider = async (provider: any) => {
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };

  //signIn function signs user in with email and password
  const signIn = async (email: string, password: string) => {
    try {
      await auth
        //try to sign in with email and password
        .signInWithEmailAndPassword(email, password)
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
            case 'auth/user-not-found':
              Swal.fire({
                icon: 'error',
                text: 'There is no user record associated with: ' + email + '.',
                backdrop: `rgb(255, 58, 51, 0.4)`,
              });
              break;
            case 'auth/wrong-password':
              Swal.fire({
                icon: 'error',
                text: 'Incorrect password entered.',
                backdrop: `rgb(255, 58, 51, 0.4)`,
              });
              break;
          }
        });
    } catch (error) {
      console.log(error);
    }
    if (user) {
      router.push('/');
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
      {/* Login Form Container (responsive, centers and sizes form) */}
      <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto mt-20 my-10 shadow-md text-center">
        {/* Login Form Inner Container (adds padding) */}
        <div className="py-8 px-8 rounded-xl">
          {/* Form Header: "Sign In" */}
          <span className="font-bold text-base text-center p-2 sm:text-xl md:text-2xl lg:text-3xl text-main-dark-blue">
            Sign In
          </span>

          {/* Formik Form */}
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values) => {
              const { email, password } = values;
              signIn(email, password);
            }}
          >
            <Form>
              {/* fields and submit button container */}
              <div className="m-auto text-left block w-4/5 p-5">
                {/* EMAIL field */}
                <label className="text-gray-600" htmlFor="email">
                  Email
                </label>
                <Field
                  required
                  className="my-2 w-full p-2 outline-none ring-1 ring-grey-600 focus:ring-2 focus:ring-main-dark-blue"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                />

                {/* PASSWORD field */}
                <label className="text-gray-600" htmlFor="password">
                  Password
                </label>
                {/* Password Field Div (used to position FaRegEye/FaRegEyeSlash icons) */}
                <div className="relative">
                  <Field
                    required
                    className="my-2 w-full p-2 outline-none ring-1 ring-grey-600 focus:ring-2 focus:ring-main-dark-blue"
                    id="password"
                    name="password"
                    //change type depending on passwordShown state
                    type={passwordShown ? 'text' : 'password'}
                    placeholder="Enter Password"
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

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="block my-3 w-full p-2 rounded-md border border-main-dark-blue text-gray-600 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-main-dark-blue hover:text-white"
                >
                  Sign In
                </button>

                {/* link to password recovery page */}
                <a
                  className="text-sm text-main-dark-blue hover:underline cursor-pointer"
                  id="passwordLink"
                  href="/resetPassword"
                >
                  Forgot password?
                </a>
              </div>
            </Form>
          </Formik>
          {/* horizontal divider between form fields and other sign in methods */}
          <h4 className="w-4/5 border-b text-gray-600 border-gray-600 leading-3 m-auto mb-5 text-sm">
            <span className="bg-white p-4">or sign in with</span>
          </h4>
          <>
            {/* Sign In with Google */}
            <button
              className="rounded-full inline-block px-2"
              id="google"
              onClick={() => signInWithProvider(GoogleProvider)}
            >
              <FcGoogle size={30} />
            </button>

            {/* Sign In with Facebook */}
            <button
              className="rounded-full inline-block px-2"
              id="facebook"
              onClick={() => signInWithProvider(FacebookProvider)}
            >
              <FaFacebookF className="text-facebookSwatch" size={30} />
            </button>

            {/* Sign In with Twitter */}
            <button
              className="rounded-full inline-block px-2"
              id="twitter"
              onClick={() => signInWithProvider(TwitterProvider)}
            >
              <FaTwitter className="text-twitterSwatch" size={30} />
            </button>

            {/* Sign In with GitHub */}
            <button
              className="rounded-full inline-block px-2"
              id="github"
              onClick={() => signInWithProvider(GitHubProvider)}
            >
              <GoMarkGithub size={30} />
            </button>
          </>

          {/* Form Footer: link back to Login Page */}
          <span className="block mt-4 mb-8 text-gray-600 text-sm">
            Don&apos;t have an account?{' '}
            <a
              className="text-sm text-main-dark-blue hover:underline cursor-pointer"
              href="/createAccount"
            >
              Create an account.
            </a>
          </span>
        </div>
      </div>
    </>
  );
};
