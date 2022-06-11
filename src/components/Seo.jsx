import React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { useIntl } from "gatsby-plugin-intl"

const Seo = ({ title, description, article, url, date }) => {
  const data = useSiteMetadata()

  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  const metaTitle = title ? `${title} • ${data.title}` : data.title
  const metaDescription = description ? description : t("Description")
  const metaUrl = url ? url : data.siteUrl

  return (
    <Helmet>
      <html lang={intl.locale} amp />
      <title>{metaTitle}</title>

      <meta name="description" content={description} />
      <meta name="image" content={data.image} />
      <meta name='author' content={data.author} />

      <meta property="og:type" content={article ? "article" : "website"} />
      {article && date && <meta property="article:published_time" content={date} />}
      
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={data.image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={data.image} />
    </Helmet>
  )
}

export default Seo
