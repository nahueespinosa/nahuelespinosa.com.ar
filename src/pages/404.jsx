import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const ImgWrapper = styled.div`
  width: 50%;
  margin: 5em auto;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`

const NotFoundPage = ({ data }) => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  const { siteTitle, siteImage, siteUrl, twitterUser } = useSiteMetadata()
  
  return (
    <Layout>
      <SEO
        title={siteTitle}
        titleTemplate={t("NotFoundPage.Title")}
        description={t("HomePage.Description")}
        image={`${siteUrl}${siteImage}`}
        pathname={siteUrl}
        siteLanguage={intl.language}
        siteLocale={intl.locale}
        twitterUsername={twitterUser}
      />

      <h1>{t("NotFoundPage.Title")}</h1>
      <p>{t("NotFoundPage.Description")}</p>
      <ImgWrapper>
        <Img fluid={data.file.childImageSharp.fluid} alt="Error 404"/>
      </ImgWrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "error.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default NotFoundPage
