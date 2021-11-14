import React from 'react';

import { NewNavbar } from 'src/components';
import { AboutSection, Footer } from 'src/components';

/**
 * About Layout
 * Desciption:
 *    This is where the Navbar,
 */

export const AboutLayout: React.FC = () => {
  return (
    <>
      <NewNavbar
        title={'NODE'}
        links={[
          ['About', '/about'],
          ['Search Results', '/searchResult'],
        ]}
      />
      <AboutSection />
      <Footer />
    </>
  );
};
