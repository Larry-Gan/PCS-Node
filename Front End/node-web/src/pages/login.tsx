/**
 * File Name: login
 * Purpose: This file renders the page layout and LoginForm component
 * Created: February 2021
 * Revised:
 *    > Anna Mollere (5/16/2021) - added code comments
 * References:
 *    > N/A
 * Author(s): Anna Mollere (OSU 2020/21)
 **/

import React from 'react';
import { Layout, SEO, LoginForm } from 'src/containers';

const Login: React.FC = () => {
  return (
    <>
      {/* Layout component styles the window and displays the NavBar */}
      <Layout>
        <SEO title="Login" />
        {/* LoginForm component renders the login form and handles sign in functionality with Firebase Auth */}
        {<LoginForm />}
      </Layout>
    </>
  );
};

export default Login;
