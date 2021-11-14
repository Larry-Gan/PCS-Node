import React from 'react';
import { HeaderXl } from 'src/components';
import { Layout, SEO } from 'src/containers';

/**
 * 404 Page not found
 * Description: uses layout and is the basis of the 404 page which should be used in any undeclared path
 */

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <HeaderXl>Not Found</HeaderXl>
      <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
