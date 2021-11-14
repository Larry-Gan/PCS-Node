import React from 'react';

//export type AddTodoFn = (todo: string) => void;

export const AboutSection: React.FC = () => {
  return (
    <>
      <>
        {/*
            This example requires Tailwind CSS v2.0+ 
            
            This example requires some changes to your config:
            
            ```
            // tailwind.config.js
            module.exports = {
                // ...
                plugins: [
            // ...
            require('@tailwindcss/aspect-ratio'),
                ]
            }
            ```
            */}
        <>
          {/*
          <div className="max-w-7xl mx-auto px-6 ">Spacer</div>
          <div className="max-w-7xl mx-auto px-6">Spacer</div>
          <div className="max-w-7xl mx-auto px-6">i</div>
            */}
        </>
        <div className="bg-white">
          <div className="mx-auto py-6 px-4 mt-14 max-w-7xl sm:px-4 lg:px-6 lg:py-8">
            <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
              <div className="space-y-5 sm:space-y-4">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  About Us
                </h2>
                <p className="text-xl text-gray-500">
                  The NODE Project was started as an Oregon State University
                  Capstone Project to help people from all around the United
                  States get to know the elected officials that represent them.
                  The goal of the NODE project has always been to facilitate
                  civic engagement and allow citizens free access to knowledge
                  about their local officeholders.
                </p>
              </div>
              <div className="lg:col-span-2">
                <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                  <li className="sm:py-8">
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img
                          className="object-cover shadow-lg rounded-lg"
                          src="/Jim.jpg"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>Jim Cupples</h3>
                            <p className="text-indigo-600">
                              Founder / Project Partner
                            </p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">
                              Cupples is a technologist from Springfield, Oregon
                              and CEO/Cofounder of Terrapin Data. Jim often
                              works on projects in civic tech and agricultural.
                              Previously, Jim cofounded the site Run For Office,
                              and has a new project called All The Farms in
                              beta.
                            </p>
                          </div>
                          <ul className="flex space-x-5">
                            <li>
                              <a
                                href="https://www.linkedin.com/in/jimcupples/"
                                className="text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* More people... */}
                  <li className="sm:py-8">
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img
                          className="object-cover shadow-lg rounded-lg"
                          src="/Ben.jpeg"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>Ben Geyer</h3>
                            <p className="text-indigo-600">
                              Lead Back-End Engineer
                            </p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">
                              Ben Geyer is a fourth-year Computer Science
                              undergraduate student at Oregon State University
                              and an incoming Software Development Engineer at
                              Zillow Group. He is a full-stack developer and
                              particularly enjoys working on the backend and
                              cloud of web applications. He previously worked as
                              a cofounder of the website ShoeBio and a DevOps
                              Intern at the City of Salem IT Department.
                            </p>
                          </div>
                          <ul className="flex space-x-5">
                            <li>
                              <a
                                href="https://www.linkedin.com/in/bengeyer/"
                                className="text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/**More people */}
                  <li className="sm:py-8">
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img
                          className="object-cover shadow-lg rounded-lg"
                          src="/Anna.jpg"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>Anna Mollere</h3>
                            <p className="text-indigo-600">
                              Lead Front-End Engineer
                            </p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">
                              Anna Mollere is a Computer Science student at
                              Oregon State University (expected graduation
                              August 2021). Anna aspires to solve usability
                              problems and create inclusive user interfaces that
                              directly impact end-users as a user experience
                              researcher and designer post-graduation.
                            </p>
                          </div>
                          <ul className="flex space-x-5">
                            <li>
                              <a
                                href="https://www.linkedin.com/in/anna-mollere/"
                                className="text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="sm:py-8">
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img
                          src="/IMG-6627.jpeg"
                          className="object-cover shadow-lg rounded-lg"
                          alt=""
                        />
                        {/**backgroundImage: "url('/assets/images/background1.jpg')"
                         * <img src={'./assets/images/JosephDidner.jpeg'} className="object-cover shadow-lg rounded-lg" alt="" />
                         */}
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>Joseph Didner</h3>
                            <p className="text-indigo-600">
                              The Other Lead Front-End Engineer
                            </p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">
                              Joseph Didner is a Computer Science student at
                              Oregon State majoring in Human Computer
                              Interaction and Minoring in Women, Gender and
                              Sexuality Studies. He is a frontend developer who
                              has worked on
                            </p>
                          </div>
                          <ul className="flex space-x-5">
                            <li>
                              <a
                                href="https://twitter.com/JDidner"
                                className="text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">Twitter</span>
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/in/josephdidner/"
                                className="text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* More people... */}
                  <li className="sm:py-8">
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img
                          className="object-cover shadow-lg rounded-lg"
                          src="/Emily.jpg"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>Emily Fowler</h3>
                            <p className="text-indigo-600">Project Advisor</p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">
                              Emily is a Venture for America fellow and a
                              University of Oregon alum working in tech policy.
                              With a background in politics, not Python, she is
                              passionate about civic technology and data
                              privacy. Emily enjoys finding exciting ways to
                              visualize data, researching disinformation, and
                              learning how technology can be wielded for good.
                            </p>
                          </div>
                          <ul className="flex space-x-5">
                            <li>
                              <a
                                href="https://emilyannfowler.medium.com"
                                className="text-gray-400 hover:text-gray-500"
                              >
                                <img
                                  className="w-7 h-7"
                                  aria-hidden="true"
                                  src="/Medium.jpg"
                                />
                                <span className="sr-only">LinkedIn</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <></>
      </>
    </>
  );
};
