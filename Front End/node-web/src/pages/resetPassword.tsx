/**
 * File Name: resetPassword
 * Purpose: This file renders the page layout and ResetPasswordForm component
 * Created: February 2021
 * Revised:
 *    > Anna Mollere (5/16/2021) - added code comments and fixed typos
 * References:
 *    > N/A
 * Author(s): Anna Mollere (OSU 2020/21)
 **/

import React from 'react';
import { Layout, SEO, ResetPasswordForm } from 'src/containers';

const ResetPassword: React.FC = () => {
  return (
    <>
      {/* Layout component styles the window and displays the NavBar */}
      <Layout>
        <SEO title="Reset Password" />
        {/* ResetPasswordForm component renders the password reset form and handles password reset functionality with Firebase Auth */}
        {<ResetPasswordForm />}
      </Layout>
    </>
  );
};

export default ResetPassword;
