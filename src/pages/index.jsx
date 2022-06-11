import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Greetings from "../components/Greetings"
import Articles from "../components/Articles"

const StyledImg = styled(GatsbyImage)`
  border-radius: 50%;
`

const HomeIndex = ({ data }) => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  return (
    <Layout>
      <Seo/>

      <section>
        <Greetings
          title={t("Greetings")}
          text={t("About")}
          image={<StyledImg image={getImage(data.file)} />}
        />
      </section>

      <section>
        <Articles/>
      </section>
    </Layout>
  );
}

export const query = graphql`{
  file(relativePath: {eq: "profile.png"}) {
    childImageSharp {
      gatsbyImageData(width: 128, height: 128, layout: FIXED)
    }
  }
}
`

export default HomeIndex
