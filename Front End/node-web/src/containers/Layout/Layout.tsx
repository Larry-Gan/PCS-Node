import React from 'react';
import { Footer } from 'src/components';
import { NewNavbar } from 'src/components/Navbar/NewNavbar';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      {/* <div className="absolute w-full h-screen mx-auto"> */}
      <NewNavbar
        title={'NODE'}
        links={[
          ['About', '/about'],
          ['Search Results', '/searchResult'],
        ]}
      />
      {/* <div style={{ padding: '2em' }} /> */}
      {children}
      {/* </div> */}
      <Footer />
    </>
  );
};

/*
 const navigation = {
  title: { name: 'NODE', to: '/' },
  links: [
    { name: 'Sign In', to: '/login' },
    { name: 'Search Results', to: '/searchResults' },
  ],
};*/
