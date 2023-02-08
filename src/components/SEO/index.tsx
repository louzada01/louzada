/* eslint-disable object-curly-newline */
import React from 'react';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

interface SeoInterface {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.FC;
}

const SEO = ({ title, description, pathname, children }: SeoInterface) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteURL,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteURL}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  );
};

export default SEO;
