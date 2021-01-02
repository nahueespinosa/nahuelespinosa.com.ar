import React from "react"
import styled from "styled-components"
import SEO from "react-seo-component"
import { useIntl } from "gatsby-plugin-intl"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/layout"

const Img = styled.img`
  width: 80%;
  padding: 5em 0;
`

const NotFoundPage = () => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  const metadata = useSiteMetadata()
  const { siteTitle, image, siteUrl, twitterUser } = metadata
  
  return (
    <Layout data={metadata}>
      <SEO
        title={siteTitle}
        titleTemplate={t("NotFoundPage.Title")}
        description={t("HomePage.Description")}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={intl.language}
        siteLocale={intl.locale}
        twitterUsername={twitterUser}
      />

      <h1>{t("NotFoundPage.Title")}</h1>
      <p>{t("NotFoundPage.Description")}</p>
      <Img src={require("../images/error.png")} alt="Error 404"/>
    </Layout>
  )
}

export default NotFoundPage