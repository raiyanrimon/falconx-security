import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, author, canonicalUrl }) => (
  <Helmet>
    {/* Primary Meta Tags */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />

    {/* Canonical URL */}
    {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
  </Helmet>
);

export default SEO;
