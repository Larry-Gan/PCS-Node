import React from 'react';
import { HeaderXl } from 'src/components';
import { SEO } from 'src/containers';
import { AboutLayout } from 'src/containers/Layout/AboutLayout';

/**
 * About Layout page
 */

const About: React.FC = () => {
  return (
    <AboutLayout>
      <SEO title="About" />
      <HeaderXl>About NODE</HeaderXl>
      <p>This is a template site made with NextJS. </p>
    </AboutLayout>
  );
};

export default About;
