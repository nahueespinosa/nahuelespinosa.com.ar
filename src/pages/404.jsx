import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

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
  
  return (
    <Layout>
      <Seo title={t("NotFoundPage.Title")} />

      <h1>{t("NotFoundPage.Title")}</h1>
      <p>{t("NotFoundPage.Description")}</p>
      <ImgWrapper>
        <GatsbyImage image={getImage(data.file)} alt="Error 404" />
      </ImgWrapper>
    </Layout>
  );
}

export const query = graphql`{
  file(relativePath: {eq: "error.png"}) {
    childImageSharp {
      gatsbyImageData(width: 800, layout: CONSTRAINED)
    }
  }
}
`

export default NotFoundPage
