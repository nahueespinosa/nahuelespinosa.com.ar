import React from "react"
import styled from "styled-components"
import SEO from "react-seo-component"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/layout"
import Greetings from "../components/greetings"
import Articles from "../components/articles"
import Techs from "../components/techs"

const StyledImg = styled(Img)`
  border-radius: 50%;
`

const ListItem = styled.li`
  padding: 0 1em;
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
        <Greetings
          title={t("Greetings")}
          text={t("About")}
          image={<StyledImg fixed={data.file.childImageSharp.fixed}/>}
        />
      </section>

      <section>
        <h2>{t("List.Title")}</h2>
        <ol>
          <ListItem>{t("List.Item1")} ✓</ListItem>
          <ListItem>{t("List.Item2")} ✓</ListItem>
          <ListItem>{t("List.Item3")} ✓</ListItem>
          <ListItem>{t("List.Item4")}</ListItem>
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
