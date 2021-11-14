import Link from 'next/link';
import React from 'react';

/**
 * Navbar
 * Description: This is original navbar. It is transulcent and difficult to use. It the navbar not currently in use.
 * Parameters: Navbar Props
 */
interface NavbarProps {
  title: string;
  links: [string, string][];
}

export const Navbar: React.FC<NavbarProps> = () => (
  <nav
    id="header"
    className="bg-main-dark-blue fixed w-full z-30 top-0 text-white"
  >
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div className="pl-4 flex items-center">
        <Link href="/">
          <a
            className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="/"
          >
            NODE
          </a>
        </Link>
      </div>
      <div className="block lg:hidden pr-4">
        <button
          id="nav-toggle"
          className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <a
              className="inline-block py-2 px-4 text-white font-bold hover:text-underline"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block text-white font-bold  hover:text-underline py-2 px-4"
              href="/about"
            >
              About
            </a>
          </li>
        </ul>
        <Link href="/login">
          <button
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
    <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
);

/*
import styled from 'styled-components';
import { Container } from 'src/global/GlobalStyle';


const StyledNavbar2 = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

const NavLogo = styled.label`
  color: #fff;
  background-color: #101522;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

const NavButton = styled.label`
  border-radius: 4px;
  background: '#54baff';
  white-space: nowrap;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #54baff;
    background: '30467FB';
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 5px solid #54baff;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

const NavLinks = styled.label`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2 rem;
    width: 100%;
    display: table;

    &:hover {
      color: #54baff;
      transition: all 0.3s ease;
    }
  }
`;
*/

/*
export const Navbar: React.FC<NavbarProps> = ({ title, links }) => (
  <StyledNavbar2>
    <NavbarContainer>
      <Link href="/">
        <a style={{ textDecoration: 'none' }}>
          <NavLogo>{title}</NavLogo>
        </a>
      </Link>
      <NavMenu>
        {links.map(([page, path]) => (
          <>
            <NavItem key={path}>
              <Link href={path}>
                <a style={{ textDecoration: 'none' }}>
                  <NavLinks>{page}</NavLinks>
                </a>
              </Link>
            </NavItem>
          </>
        ))}
        <NavButton>Sign Up</NavButton>
      </NavMenu>
    </NavbarContainer>
  </StyledNavbar2>
);
*/

/*

<NavMenu>
        <NavItem>
          <NavLinks>About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>Home</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>Contact Us</NavLinks>
        </NavItem>
        <NavButton>Sign In</NavButton>
      </NavMenu>



<StyledNavbar>
      <NavRow>
        <NavCol size={{ xs: 8, sm: 3, lg: 1 }}>
          <Link href="/">
            <a>
              <NavBtn>
                <HeaderXl color="black" underline="primary">
                  {title}
                </HeaderXl>
              </NavBtn>
            </a>
          </Link>
        </NavCol>
        {links.map(([page, path]) => (
          <NavCol key={path} size={{ xs: 1 }}>
            <Link href={path}>
              <a style={{ textDecoration: 'none' }}>
                <NavBtn>
                  <AlignBottom>
                    <HeaderMd>{page}</HeaderMd>
                  </AlignBottom>
                </NavBtn>
              </a>
            </Link>
          </NavCol>
        ))}
      </NavRow>
  </StyledNavbar2>

*/
