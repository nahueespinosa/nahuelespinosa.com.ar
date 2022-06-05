import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Greetings from "../components/Greetings"
import Articles from "../components/Articles"

const StyledImg = styled(Img)`
  border-radius: 50%;
`

const ListItem = styled.li`
  padding: 0 1em;
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
          image={<StyledImg fixed={data.file.childImageSharp.fixed} />}
        />
      </section>

      <section>
        <h2>{t("HomePage.List.Title")}</h2>
        <ol>
          <ListItem>{t("HomePage.List.Item1")} ✓</ListItem>
          <ListItem>{t("HomePage.List.Item2")} ✓</ListItem>
          <ListItem>{t("HomePage.List.Item3")} ✓</ListItem>
          <ListItem>{t("HomePage.List.Item4")}</ListItem>
        </ol>
      </section>

      <section>
        <Articles/>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default HomeIndex
