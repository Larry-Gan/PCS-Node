import React, { useContext } from 'react';
import { FirebaseContext } from 'src/FirebaseContext';
import { auth } from 'src/FirebaseConfig';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

/**
 * NewNavbar
 * Description: This is basically Navbar 2.0. It the navbar currently in use.
 * Parameters: Navbar Props
 */

interface NavbarProps {
  title: string;
  links: [string, string][];
}

export const NewNavbar: React.FC<NavbarProps> = () => {
  const user = useContext(FirebaseContext);
  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <>
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            {/* Regular NavBar!*/}
            <nav
              id="header"
              className="bg-white shadow fixed top-0 w-full z-10"
            >
              {/*CODE TO MAKE WORK WITH REGULAR LAYOUT className="bg-main-dark-blue fixed w-full z-30 top-0 text-white">*/}
              <div className="max-w-7xl mx-auto px-2 sm:px-6 md:space-x-10 lg:px-8">
                {' '}
                {/* this is where u should add some padding with      
       <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">*/}
                <div className="relative flex justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <a href="/" className="flex-shrink-0 flex items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="workflow"
                      />
                      <text className="font-mono text-center font-semi-bold ml-2 text-black leading-5">
                        NODE
                      </text>
                    </a>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                      <a
                        href="/"
                        className="border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      >
                        Home
                      </a>
                      <a
                        href="/about"
                        className="border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      >
                        About
                      </a>
                    </div>
                  </div>
                  {!user ? (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      {/* Profile dropdown */}
                      <div className="ml-3 relative">
                        <div>
                          <a
                            href="/login"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Log In
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <span className="bg-white mt-1 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">View notifications</span>
                        {/* Heroicon name: outline/bell */}
                        <text className="">
                          {user.email?.substring(
                            0,
                            user.email.lastIndexOf('@')
                          )}
                        </text>
                      </span>
                      {/* Profile dropdown */}
                      <div className="ml-3 relative">
                        <div>
                          <span
                            className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            id="user-menu"
                            aria-expanded="false"
                            aria-haspopup="true"
                          >
                            <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                              <svg
                                className="h-full w-full text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </span>
                            <button
                              className="inline-flex items-center mx-4 px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              onClick={signOut}
                            >
                              Sign Out
                            </button>
                          </span>
                        </div>
                        {/* Dropdown menu, show/hide based on menu state. Entering:
                  "transition ease-out duration-200" From: "transform opacity-0
                  scale-95" To: "transform opacity-100 scale-100" Leaving:
                  "transition ease-in duration-75" From: "transform opacity-100
                  scale-100" To: "transform opacity-0 scale-95" */}
                        {/* <Transition
                    show={isOpen}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    {(ref) => (
                      <div
                        ref={ref}
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Your Profile
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Settings
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Sign out
                        </a>
                      </div>
                    )}
                  </Transition> */}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Mobile menu, show/hide based on menu state. */}
              {/*<div className="sm:hidden" id="mobile-menu">
        <div className="pt-2 pb-4 space-y-1"> */}
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {/*<a href="#" className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Home</a>
          <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">About</a>
          <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Sign Up</a>
          <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Contact Us</a>
        </div>
      </div>*/}
            </nav>
            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-4 mt-16 space-y-1">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <a
                  href="/"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  About
                </a>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
