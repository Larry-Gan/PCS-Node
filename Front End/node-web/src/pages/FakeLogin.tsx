import React from 'react';
import { HeaderXl } from 'src/components';
import { Layout, SEO } from 'src/containers';

const Login: React.FC = () => {
  return (
    <Layout>
      <SEO title="Login" />
      <HeaderXl>Login NODE</HeaderXl>
      <p>This is a template site made with NextJS. </p>
    </Layout>
  );
};

export default Login;
