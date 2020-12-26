import React from "react"
import { Helmet } from "react-helmet"

import config from '../../data/SiteConfig'

function SEO({ title, description }) {
  let metaTitle = title ? title : config.siteTitle
  let metaDescription = description ? description : config.siteDescription

  return (
    <Helmet
      title={title ? title : config.siteTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
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
          name: `image`,
          property: `og:image`,
          content: config.siteImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: config.siteAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: config.siteImage,
        },
      ]}
    />
  )
}

export default SEO
