import React from 'react';

export type AddTodoFn = (todo: string) => void;

export const ContentSection: React.FC = () => {
  return (
    <>
      <>
        <div className="py-16 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mt-8 mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                How To Submit
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Corrections
              </p>
            </div>
            <div className="z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
              <p className="text-lg text-gray-500">
                The NODE Project relies on correction submissions from users
                like you to keep our database accurate and up to date! If you
                see some information that is evidently incorrect please follow
                these instructions to submit a correction to a page.
              </p>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
              <div className="z-10">
                <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                  <p>
                    Our correction submissions are conducted via email. Please
                    send your corrections to
                    <text className="text-purple-600">
                      {' '}
                      jim@nationalofficeholderfile.com{' '}
                    </text>
                    with the following information attached:
                  </p>

                  <p className="mt-4">
                    Once youve made sure youve included all the information on
                    the checklist above, you can send the email to our verifiers
                    and you should receive a confirmation email within 3-5
                    business days. Thank you for submitting your corrections
                    claims.
                  </p>
                </div>
              </div>
              <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
                <svg
                  className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                  />
                </svg>
                <blockquote className="relative bg-white rounded-lg shadow-lg">
                  <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                    <h1 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                      Sample Email Body
                    </h1>
                    <div className="relative text-lg text-gray-700 font-medium mt-8">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <body>
                        <ul className="relative">
                          <li>Hello, </li>
                          <li>
                            {' '}
                            I am submitting this email to alert you of a
                            possible error in your database. The correction I
                            wish to alert you of is for:
                          </li>

                          <li>Officeholder name: Ron Wyden.</li>
                          <li>Officeholder position: Senator.</li>
                          <li>Officeholder state: Oregon.</li>

                          <li>
                            The incorrect field for this officeholder is: Term
                            Date.
                          </li>
                          <li>
                            The website listed his term dates as: January 2019
                            to January 2023.
                          </li>
                          <li>
                            The CORRECT term dates are: Janurary 2018 to January
                            2022.
                          </li>

                          <li>Thank you!</li>
                        </ul>
                      </body>
                    </div>
                  </div>
                  <cite className="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-4">
                    <span className="relative text-indigo-300 font-semibold leading-6  sm:pl-1">
                      <p className="text-white font-semibold sm:inline">
                        Remember to
                      </p>{' '}
                      <p className="sm:inline">
                        attach evidence and send to
                        jim@nationalofficeholderfile.com
                      </p>
                    </span>
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
