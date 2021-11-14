/**
 * File Name: OfficeHolderTemplate
 * Purpose: This file contains the React component rendered on the detailed    *    results page (Home->Search Results->Detailed Results)
 * Created: March 2021
 * Revised:
 *    > Anna Mollere (5/16/2021) - added code comments
 * References:
 *    >
 * Author(s): Anna Mollere (OSU 2020/21), Joey Didner (OSU 2020/21)
 **/

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaRegCopy } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import ReactTooltip from 'react-tooltip';
import copy from 'clipboard-copy';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

/** In type
 * In typescript you must define the interfaces and types of the data you that you expect to GET back from the Apolloclient Query
 * These interfaces were created from the schema that should be avaiable in the Data Service repository
 */
interface officeInventoryData {
  office: Office;
}

interface meetingInventoryData {
  meetings: Meeting;
}

interface Meeting {
  map(arg0: (meetingsInfo: any) => JSX.Element): React.ReactNode;
  geoid: string;
  website: string;
  location: MeetingLocation;
  schedule: MeetingSchedule[];
}

interface MeetingSchedule {
  timezone: number;
  time: Time;
  week: number;
  day: number;
  frequency: number;
  firstDate: number;
}

interface Time {
  hour: number;
  minute: number;
}
interface MeetingLocation {
  virtual: string;
  address: Address;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}
interface Office {
  id: string;
  title: string;
  website: string;
  state: string;
  term: DateRange;
  filingWindow: DateRange;
  officeholder: OfficeHolder;
  contact: OfficeContact;
}

interface DateRange {
  start: number;
  end: number;
}
interface OfficeHolder {
  termEnd: string;
  name: OfficeHolderName;
  socialMedia: OfficeHolderSocialMedia;
}

interface OfficeHolderName {
  first: string;
  last: string;
}

interface OfficeHolderSocialMedia {
  facebook: string;
  twitter: string;
  instagram: string;
}

interface OfficeContact {
  phone: PhoneNumber;
  email: string;
}

interface PhoneNumber {
  country: string;
  area: string;
  office: string;
  line: string;
}

interface OfficeVars {
  newOfficeId?: any; //check any type
}
interface MeetingVars {
  geoid?: any; //check any type
}

/**
 * This is the query itself.
 * We are using apolloclient and many of the parts of this query were derived from the apolloclient typescript docs and the useQuery hook
 * You may find these resources
 * https://www.apollographql.com/docs/react/api/react/hooks/
 * https://www.apollographql.com/docs/react/development-testing/static-typing/
 * Check the relevant schema that can be found at the IP address queried from ("Should be located in _app.tsx in pages")
 * The schema will be used to reveal why we are querying twice (once for officeholder data and once for Meetings data)
 */

const GET_OFFICE_DATA = gql`
  query OfficeDetails($newOfficeId: ID!) {
    office(id: $newOfficeId) {
      id
      title
      website
      state
      term {
        start
        end
      }
      filingWindow {
        start
        end
      }
      officeholder {
        termEnd
        name {
          first
          last
        }
        socialMedia {
          facebook
          twitter
          instagram
        }
      }
      contact {
        phone {
          country
          area
          office
          line
        }
        email
      }
    }
  }
`;

const GET_MEETINGS_DATA = gql`
  query getMeetingsData($geoid: String!) {
    meetings(geoid: $geoid) {
      website
      geoid
      schedule {
        timezone
        time {
          hour
          minute
        }
        week
        day
        frequency
        firstDate
      }
      location {
        virtual
        address {
          street
          city
          state
          zip
        }
      }
    }
  }
`;

/**
 * Utitlity function to translate epoch time data to human readable format for display
 */

function translateEpochTime(epochTimeNum: number) {
  const inputNum = epochTimeNum;
  const secondOperation = inputNum * 1000;
  const finalResultingNum = new Date(secondOperation);
  //const month = finalResultingNum.getMonth();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[finalResultingNum.getMonth()];
  const year = finalResultingNum.getFullYear();
  const newDate = month + ' ' + year;
  return newDate;
}

/**
 * Check the relevant schema that can be found at the IP address queried from ("Should be located in _app.tsx in pages")
 * The schema will be used to reveal why we are querying twice (once for officeholder data and once for Meetings data).
 * Since we have to query both of these and they both take in two different parameters for their queries,
 * We did the same trick as the last query page (search.tsx in pages) and we passed the Office ID and the GEOID into the url for parameters
 * Then we do a simple splice to split them up and are able to load in both using the UseQuery hook
 */

export const OfficeHolderTemplate: React.FC = () => {
  //MORE CHANGES
  const [open, setOpen] = useState(false);
  //const cancelButtonRef = useRef();

  function closeModal() {
    setOpen(false);
  } //Setting modal states for crowdsourcing button

  function openModal() {
    setOpen(true);
  } //Setting modal states for crowdsourcing button

  const router = useRouter();
  const { officeId } = router.query; //Returns the OfficeID AND the GEOID as one string.
  console.log('REturned router.query string: ', officeId);
  const stringToParse = officeId; //String parsing to separate Office ID and GeoID
  const geoid = stringToParse?.slice(20); //Store Geoid as such
  const newOfficeId = stringToParse?.slice(0, 20); //stor OFficeID as such
  console.log('OFFICEIDVARIABLE: ', newOfficeId);
  console.log('GEOID: ', geoid);

  const { loading: loading2, error: error2, data: data2 } = useQuery<
    officeInventoryData,
    OfficeVars
  >(GET_OFFICE_DATA, { variables: { newOfficeId } }); //storing the officeInventoryData... will be able to use as display!

  const { loading: loading3, error: error3, data: data3 } = useQuery<
    meetingInventoryData,
    MeetingVars
  >(GET_MEETINGS_DATA, { variables: { geoid } }); //storing the Meeting Inventory data... will be able to use as display!

  console.log(data2);
  console.log(data3);

  if (loading2 || loading3) {
    return <h1>Loading....</h1>;
  }
  if (error2) {
    return <h1> {error2.message}</h1>;
  }
  if (error3) {
    return <h1> {error3.message}</h1>;
  }

  /**
   * The time domain data is displayed in Epoch time and I wrote a function above to translate it to human readable time
   * Feel free to use this function before the return() statement to translate time to human readable format
   */

  const termStart = data2?.office.term.start;
  const displayTermStart = translateEpochTime(termStart!);

  const termEnd = data2?.office.term.end;
  const displayTermEnd = translateEpochTime(termEnd!);

  const filingWindowStart = data2?.office.filingWindow.start;
  const displayFilingWindowStart = translateEpochTime(filingWindowStart!);

  const filingWindowEnd = data2?.office.filingWindow.end;
  const displayFilingWindowEnd = translateEpochTime(filingWindowEnd!);

  /**
   * In this section we read in and display the data using ".map" command.
   */

  return (
    <>
      <>
        {/* Office Holder Details Container */}
        <div className="bg-white w-full transform -translate-x-0 left-1/2 h-5/6 p-5 mt-20 text-left sm:w-4/5 md:w-2/3 lg:w-1/2 m-auto">
          {/* Beginning of Description List; for office holder header */}
          <dl className="sm:divide-y sm:divide-gray-200">
            {/* Office Holder Details Header; contains name, title, and social media links */}
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt>
                {/* Office Holder Title */}
                <h3 className="text-xl leading-6 font-medium text-gray-900">
                  {data2?.office.title}
                </h3>
                {/* Office Holder Full Name */}
                <p className="max-w-2xl text-base text-gray-500">
                  {data2?.office.officeholder.name.first}{' '}
                  {data2?.office.officeholder.name.last}
                </p>
              </dt>
              {/* Social Media Links; only display icons if social media link isn't empty (i.e., instagram != "") */}
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <div className="block text-right sm:text-right">
                  {/* If office holder has Instagram, show icon. */}
                  {data2?.office.officeholder.socialMedia.instagram ? (
                    <button
                      className="rounded-full inline-block"
                      id="instagram"
                    >
                      <a
                        href={data2?.office.officeholder.socialMedia.instagram}
                        className="text-gray-500 hover:text-instagramSwatch"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram size={20} />
                      </a>
                    </button>
                  ) : null}
                  {/* If office holder has Facebook, show icon. */}
                  {data2?.office.officeholder.socialMedia.facebook ? (
                    <button
                      className="rounded-full inline-block pl-1 ml-1"
                      id="facebook"
                    >
                      <a
                        href={data2?.office.officeholder.socialMedia.facebook}
                        className="text-gray-500 hover:text-facebookSwatch"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF size={20} />
                      </a>
                    </button>
                  ) : null}
                  {/* If office holder has Twitter, show icon. */}
                  {data2?.office.officeholder.socialMedia.twitter ? (
                    <button
                      className="rounded-full inline-block pl-1 ml-1"
                      id="twitter"
                    >
                      <a
                        className="text-gray-500  hover:text-twitterSwatch"
                        href={data2?.office.officeholder.socialMedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter size={20} />
                      </a>
                    </button>
                  ) : null}
                  {/* If office holder has Website, show icon. */}
                  {data2?.office.website ? (
                    <button
                      className="rounded-full inline-block pl-1 ml-1"
                      id="website"
                    >
                      <a
                        className="text-gray-500 hover:text-main-red"
                        href={data2?.office.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    </button>
                  ) : null}
                </div>
              </dd>
            </div>
          </dl>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            {/* Beginning of Description List; for office holder information (includes term and filing windows, contact info, and meeting info) */}
            <dl className="sm:divide-y sm:divide-gray-200">
              {/* Term Window */}
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-gray-500">
                  Term Window
                </dt>
                {displayTermStart != 'December 1969' &&
                displayTermEnd != 'December 1969' ? (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {displayTermStart} - {displayTermEnd}
                  </dd>
                ) : (
                  <span className="text-sm text-gray-400">
                    Information Not Available
                  </span>
                )}
              </div>
              {/* Filing Window */}
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-gray-500">
                  Filing Window
                </dt>
                {displayFilingWindowStart != 'December 1969' &&
                displayFilingWindowEnd != 'December 1969' ? (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {displayFilingWindowStart} - {displayFilingWindowEnd}
                  </dd>
                ) : (
                  <span className="text-sm text-gray-400">
                    Information Not Available
                  </span>
                )}
              </div>
              {/* Contact Info: Email Address */}
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-gray-500">
                  Email Address
                </dt>
                {/* If the email isn't empty (i.e. email != ""), display it. Otherwise show placeholder. */}
                {data2?.office.contact.email ? (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                    {data2?.office.contact.email}
                  </dd>
                ) : (
                  <span className="text-sm text-gray-400">
                    Information Not Available
                  </span>
                )}
                {/* If there is an email to show (i.e. email != ""), display FaRegCopy icon and allow user to copy email to clipboard. */}
                {data2?.office.contact.email ? (
                  <dd className="text-left sm:text-right mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                    {/* The copy function is from clipboard-copy package. */}
                    <button
                      data-tip
                      data-for="copyEmailTip"
                      onClick={() => copy(data2?.office!.contact.email)}
                    >
                      <a
                        className="text-gray-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaRegCopy size={20} />
                      </a>
                    </button>
                    {/* Use ReactTooltip, from react-tooltip package, to show tooltip when user hovers over FaRegCopy icon. */}
                    <ReactTooltip id="copyEmailTip" place="left" effect="solid">
                      Copy Email Address to Clipboard
                    </ReactTooltip>
                  </dd>
                ) : null}
              </div>
              {/* Contact Info: Phone Number */}
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-gray-500">
                  Office Phone Number
                </dt>
                {/* If the phone line isn't empty (i.e. line != ""), display it. Otherwise show placeholder. */}
                {data2?.office.contact.phone.line ? (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    +{data2?.office.contact.phone.country}{' '}
                    {data2?.office.contact.phone.area}{' '}
                    {data2?.office.contact.phone.office}{' '}
                    {data2?.office.contact.phone.line}
                  </dd>
                ) : (
                  <span className="text-sm text-gray-400">
                    Information Not Available
                  </span>
                )}
              </div>
              {/* Meeting Information */}
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-gray-500">
                  Meeting Information
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" />
                {/* If there is no meeting info, show placeholder. */}
                {data3 && Object.keys(data3.meetings!).length === 0 ? (
                  <>
                    <dt className="text-sm font-medium text-gray-500">
                      Address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                      Information Not Available
                    </dd>
                    <dt className="text-sm font-medium text-gray-500">
                      Virtual Meeting Link
                    </dt>
                    <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                      Information Not Available
                    </dd>
                    <dt className="text-sm font-medium text-gray-500">
                      Website
                    </dt>
                    <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                      Information Not Available
                    </dd>
                  </>
                ) : null}
                {/* If there is meeting info, show it. */}
                {data3 &&
                  data3.meetings.map((meetingsInfo) => (
                    <>
                      {/* Meeting Info: Address */}
                      <dt className="text-sm font-medium text-gray-500">
                        Address
                      </dt>
                      {/* If the street address string isn't empty (i.e. street != ""), display full address. Otherwise show placeholder. */}
                      {meetingsInfo.location.address.street ? (
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {meetingsInfo.location.address.street}
                          {', '}
                          {meetingsInfo.location.address.city}
                          {', '}
                          {meetingsInfo.location.address.state}{' '}
                          {meetingsInfo.location.address.zip}
                        </dd>
                      ) : (
                        <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                          Information Not Available
                        </dd>
                      )}
                      {/* Meeting Info: Virtual Meeting Link */}
                      <dt className="text-sm font-medium text-gray-500">
                        Virtual Meeting Link
                      </dt>
                      <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                        {/* If the virtual link isn't empty (i.e. virtual != ""), display it. Otherwise show placeholder. */}
                        {meetingsInfo.location.virtual ? (
                          <a
                            className="text-sm text-main-dark-blue hover:underline cursor-pointer"
                            href={meetingsInfo.location.virtual}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {meetingsInfo.location.virtual}
                          </a>
                        ) : (
                          <>Information Not Available</>
                        )}
                      </dd>
                      {/* Meeting Info: Website Link */}
                      <dt className="text-sm font-medium text-gray-500">
                        Website
                      </dt>
                      <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
                        {/* If the website link isn't empty (i.e. website != ""), display it. Otherwise show placeholder. */}
                        {meetingsInfo.website ? (
                          <a
                            className="text-sm text-main-dark-blue hover:underline cursor-pointer"
                            href={meetingsInfo.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {meetingsInfo.website}
                          </a>
                        ) : (
                          <>Information Not Available</>
                        )}
                      </dd>
                    </>
                  ))}
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <button
                  className="text-sm font-medium text-gray-500"
                  type="button"
                  onClick={openModal}
                >
                  See something wrong? Click here to submit a correction!
                </button>
              </div>
            </dl>
          </div>
        </div>
      </>
      <>
        {/**This is the Modal button, style as you see fit */}
        <Transition show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            //initialFocus={cancelButtonRef}
            static
            open={open}
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    How to submit a Correction
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Our correction submissions are conducted via email. Please
                      send your corrections to
                      <text className="text-purple-600">
                        {' '}
                        jim@nationalofficeholderfile.com
                      </text>
                      . Please copy and paste the email body below into your
                      email browser:
                    </p>
                    <body className="mt-4">
                      <ul className="relative text-sm text-black-500">
                        <li>Hello NODE verifier, </li>
                        <li>
                          I am submitting this email to alert you of a possible
                          error in your database. The correction is in regards
                          to
                        </li>
                        <li>
                          {' '}
                          OfficeHolder:
                          <text className="text-red-500">
                            {' '}
                            {data2?.office.officeholder.name.first}{' '}
                            {data2?.office.officeholder.name.last}
                          </text>
                        </li>
                        <li>
                          {' '}
                          OfficeHolder ID:
                          <text className="text-red-500">
                            {' '}
                            {data2?.office.id}
                          </text>
                        </li>
                        <li>
                          The incorrect field for this officeholder is:
                          <text className="text-red-600">
                            {' '}
                            YOU FILL THIS PART OUT
                          </text>
                        </li>
                        <li>
                          The website listed the incorrect field as:
                          <text className="text-red-600">
                            {' '}
                            YOU FILL THIS PART OUT
                          </text>
                        </li>
                        <li>
                          The CORRECT information is:
                          <text className="text-red-600">
                            {' '}
                            YOU FILL THIS PART OUT
                          </text>
                        </li>
                      </ul>
                    </body>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500">
                        In addition to this email body, be sure to attach
                        evidence that supports your claim to your email. Thank
                        you for helping us maintain an accurate and up-to-date
                        databse!
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
    </>
  );
};
