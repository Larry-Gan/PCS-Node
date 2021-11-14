import React from 'react';

import { NewNavbar } from 'src/components';
import { Footer } from 'src/components';

export const CorrectionsLayout: React.FC = () => {
  return (
    <>
      <NewNavbar
        title={'NODE'}
        links={[
          ['About', '/about'],
          ['Search Results', '/searchResult'],
        ]}
      />
      <Footer />
    </>
  );
};
