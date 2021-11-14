/**
 * File Name: detailedResults
 * Purpose: This file renders the page layout and OfficeHolderTemplate
 *    component
 * Created: February 2021
 * Revised:
 *    > Anna Mollere (5/16/2021) - added code comments
 * References:
 *    > N/A
 * Author(s): Anna Mollere (OSU 2020/21)
 **/

import React from 'react';
import { Layout, SEO, OfficeHolderTemplate } from 'src/containers';

const DetailedResults: React.FC = () => {
  return (
    <>
      {/* Layout component styles the window and displays the NavBar */}
      <Layout>
        <SEO title="Office Details" />
        {/* OfficeHolderTemplate component renders the detailed view of a particular officeholder and handles all data office, office location, and meeting queries */}
        <OfficeHolderTemplate />
      </Layout>
    </>
  );
};

export default DetailedResults;
