import React from 'react';
import { Helmet } from 'react-helmet';

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = '',
  lang = 'en',
  meta = [],
}) => {
  const metaDescription =
    description ||
    'The front end web server of the National Open Data Elections (NODE) project.';
  const siteTitle = 'NODE';
  const author = 'Ben Geyer';

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};
