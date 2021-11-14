/**
 * File Name: createAccount
 * Purpose: This file renders the page layout and CreateAccountForm component
 * Created: February 2021
 * Revised:
 *    > Anna Mollere (5/16/2021) - added code comments
 * References:
 *    > N/A
 * Author(s): Anna Mollere (OSU 2020/21)
 **/

import React from 'react';
import { Layout, SEO, CreateAccountForm } from 'src/containers';

const CreateAccount: React.FC = () => {
  return (
    <>
      {/* Layout component styles the window and displays the NavBar */}
      <Layout>
        <SEO title="Create Account" />
        {/* CreateAccountForm component renders the create account form and handles account creation functionality with Firebase Auth */}
        {<CreateAccountForm />}
      </Layout>
    </>
  );
};

export default CreateAccount;
