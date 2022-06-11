import React from "react"
import styled from "styled-components"
import { useIntl, Link } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"

export const useMdxLatest = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query MDX_LATEST_QUERY {
        allMdx(
          sort: {fields: [frontmatter___date], order: DESC},
          filter: {frontmatter: {published: {eq: true}}, fields: {isDefault: {eq: true}}}
        ){
          nodes {
            fields {
              slug
              versions {
                lang
                title
                date(formatString: "YYYY-MM-DD")
              }
            }
          }
        }
      }
    `
  )

  return allMdx.nodes
}

const List = styled.ul`
  list-style: none;
`

const Small = styled.small`
  padding: 1em;
`

const Articles = () => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  const latest = useMdxLatest()

  if (latest.length < 1) {
    return (<></>)
  }

  return (
    <>
      <h2>{t("Articles.Title")}</h2>
      <List>
        {latest.map(({ fields }) => {
          let version = fields.versions.find(node => {
            return node.lang === intl.locale
          })

          /* If there is no node for this locale, use default */
          if (version === undefined) version = fields.versions[0]
          
          return (
            <li key={fields.slug}>
              <Small>{version.date}</Small>
              <Link to={fields.slug}>{version.title}</Link>
            </li>
          )
        })}
      </List>
    </>
  )
}

export default Articles
