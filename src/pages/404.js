import React from "react"
import SEO from "react-seo-component"
import Layout from "../components/layout"
import { useTranslation } from "react-i18next"

import "../components/i18n"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const NotFoundPage = () => {
  const metadata = useSiteMetadata()
  const { description, title, image, url, language, locale, twitterUser } = metadata
  const { t } = useTranslation("translations")

  return (
    <Layout data={metadata}>
      <SEO
        title={title}
        titleTemplate={t("Not Found.Title")}
        description={description}
        image={`${url}${image}`}
        pathname={url}
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
