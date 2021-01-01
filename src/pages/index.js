import React from "react"
import styled from "styled-components"
import SEO from "react-seo-component"
import { useIntl } from "gatsby-plugin-intl"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Articles from "../components/articles"
import Techs from "../components/techs"
import Layout from "../components/layout"

const Img = styled.img`
  float: right;
  margin-left: 20px;

  @media only screen and (max-width: 600px) {
    float: none;
    margin: auto;
    padding-bottom: 30px;
  }
`

const Li = styled.li`
  padding: 5px 25px;
  margin-left: 35px;
`

const HomeIndex = ({ data }) => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  const metadata = useSiteMetadata()
  const { siteTitle, image, siteUrl, twitterUser } = metadata
  
  return (
    <Layout data={metadata}>
      <SEO
        title={siteTitle}
        titleTemplate={t("HomePage.Title")}
        description={t("HomePage.Description")}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={intl.language}
        siteLocale={intl.locale}
        twitterUsername={twitterUser}
      />

      <section>
        <h1>{t("Greetings")}</h1>
        <Img src={require("../images/profile.jpg")} alt="Profile"/>
        <p>{t("About.Item1")}<br/>{t("About.Item2")}<br/>{t("About.Item3")}</p>
      </section>

      <section>
        <h2>{t("List.Title")}</h2>
        <ol>
          <Li>{t("List.Item1")} ✓</Li>
          <Li>{t("List.Item2")} ✓</Li>
          <Li>{t("List.Item3")} ✓</Li>
          <Li>{t("List.Item4")}</Li>
        </ol>
      </section>
      
      <section>
        <Articles/>
      </section>

      <section>
        <Techs/>
      </section>
    </Layout>
  )
}

export default HomeIndex
