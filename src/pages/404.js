import React from "react"
import SEO from "react-seo-component"
import Layout from "../components/layout"
import { useIntl } from "gatsby-plugin-intl"

import { useSiteMetadata } from "../hooks/useSiteMetadata"

const NotFoundPage = () => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  const metadata = useSiteMetadata()
  const { description, siteTitle, image, siteUrl, language, locale, twitterUser } = metadata
  
  return (
    <Layout data={metadata}>
      <SEO
        title={siteTitle}
        titleTemplate={t("Not Found.Title")}
        description={description}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={language}
        siteLocale={locale}
        twitterUsername={twitterUser}
      />

      <h1>{t("Not Found.Title")}</h1>
      <p>{t("Not Found.Description")}</p>
      <img src={require("../assets/images/error.png")} alt="Error 404" width="50%;"/>
    </Layout>
  )
}

export default NotFoundPage
