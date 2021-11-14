/**
 * File Name: search
 * Purpose: This file queries office, office location, and meeting data and
 *    displays results based on an entered address.
 * Created: February 2021
 * Revised:
 *    > Anna Mollere (5/16/2021) - added code comments and fixed typos
 * References:
 *    > N/A
 * Author(s): Anna Mollere (OSU 2020/21), Joey Didner
 **/

import React from 'react';
import { Layout, SEO } from 'src/containers';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import Link from 'next/link';

/**
 * This is where the first results page generated from user input is created. The basic overview of this page is as follows:
 * This page is dynamically generated using Next.js's built in dynamic routing. The address entered by the user becomes the search parameter in the URL and is passed over to this page
 * The string the user generated (which was passed thru the URL) becomes the subject for our Apollo client query.
 * We then make the query with the user input string as the parameter variable and read in and display our results in the HTML area
 * Necessary Parameters: The string from the text input. (src/containers/todo/todoform.tsx)
 */

/**
 * The main difference between Typescript and regular Javascript is that you must define the interfaces and types of the data you that you expect to GET back from the Apolloclient Query
 * These interfaces were created from the schema that should be avaiable in the Data Service repository
 */
interface LocationInventoryData {
  location: Geometry[];
}

interface Geometry {
  geoid: string;
  offices: OfficePreview[];
  title: string;
}

interface OfficePreview {
  officeholder: OfficeHolderPreview;
  officeId: string;
  title: string;
}

interface OfficeHolderPreview {
  name: OfficeHolderName;
}

interface OfficeHolderName {
  first: string;
  last: string;
}

interface LocationVars {
  address: string;
}

/**
 * This is the query itself.
 * We are using apolloclient and many of the parts of this query were derived from the apolloclient typescript docs and the useQuery hook
 * You may find these resources helpful!
 * https://www.apollographql.com/docs/react/api/react/hooks/
 * https://www.apollographql.com/docs/react/development-testing/static-typing/
 */

const GET_LOCATION_DATA = gql`
  query getLocationData($address: String!) {
    location(address: $address) {
      title
      geoid
      offices {
        officeholder {
          name {
            first
            last
          }
        }
        officeId
        title
      }
    }
  }
`;

/**
 * This is the exported search results function! From here we read in the query data that
 * is returned and display the relevant information that was retreived from the GET Request
 */

const SearchResults: React.FC = () => {
  const router = useRouter();
  const { address } = router.query; //This line gets the router query (AKA the address the user put into the text box) and stores it as a variable:address.
  console.log('Address Ting:', address);
  const { loading, error, data } = useQuery<
    LocationInventoryData,
    LocationVars
  >(GET_LOCATION_DATA, { variables: { address: `${address}` } }); //This line reads in the location data. See the ApolloClient comments above for addition information
  if (loading) {
    return <h1>Loading....</h1>; //If loading procedure. Could put animations here!
  }
  if (error) {
    return <h1> {error.message}</h1>; //If error procedure. Could refine frontend look
  }

  //console.log("Hey Look:", data) //only has one item in location array?

  /**
   * In this section we read in and display the data using ".map" command.
   */
  return (
    <>
      <Layout>
        <SEO title="SearchResults" />
        {/* Search Results Container (responsive and centered) */}
        <div className="w-full transform -translate-x-0 left-1/2 h-5/6 mt-20 p-5 text-left sm:w-4/5 md:w-2/3 lg:w-1/2 m-auto mb-10">
          {/* Search Results Header (displays address that was entered on the Homepage) */}
          <div className="inline-block text-xs font-bold text-left p-2 sm:text-base md:text-lg lg:text-xl text-black">
            Search Results for:{' '}
            <span className="text-main-dark-blue">{address}</span>
          </div>
          {data &&
            data.location.map((inventory) => (
              <>
                {inventory &&
                  inventory.offices.map((officeInfo) => (
                    <>
                      {/* Description List: each office position follows this format (they all have a title and a description) */}
                      <dl className="sm:divide-y sm:divide-gray-200">
                        {/* centers content vertically and positions the office titles and names on the left and the layers on the right (e.g., "layer" could be Benton County or the State of Oregon) */}
                        <div className="border-t border-gray-200 py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 items-center">
                          <dt className="text-sm ">
                            {/* Position Title */}
                            <Link
                              href={`/detailedResults?officeId=${officeInfo.officeId}${inventory.geoid}`}
                            >
                              <div className="-mt-1 font-semibold cursor-pointer hover:text-main-dark-blue hover:underline">
                                <a>{officeInfo.title}</a>
                              </div>
                            </Link>
                            {/* Office Holder Full Name */}
                            <p className="max-w-2xl text-sm text-gray-500">
                              {officeInfo.officeholder.name.first}{' '}
                              {officeInfo.officeholder.name.last}
                            </p>
                          </dt>
                          {/* Layer (e.g., Benton County, State of Oregon, or Crook County School District 509J) */}
                          <dd className="mt-1 text-sm text-gray-500 sm:mt-0 sm:col-span-2 text-right">
                            {inventory.title}
                          </dd>
                        </div>
                      </dl>
                    </>
                  ))}
              </>
            ))}
        </div>
      </Layout>
    </>
  );
};

export default SearchResults;
