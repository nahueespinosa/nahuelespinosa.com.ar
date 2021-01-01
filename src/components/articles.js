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

const Ul = styled.ul`
  list-style: none;
`

const Span = styled.span`
  font-size: 0.8em;
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
      <Ul>
        {latest.map(({ fields }) => {
          let version = fields.versions.find(node => {
            return node.lang === intl.locale
          })

          if (version === undefined) version = fields.versions[0]
          
          return (
            <li>
              <Span>{version.date}</Span>
              <Link to={fields.slug}>{version.title}</Link>
            </li>
          )
        })}
      </Ul>
    </>
  )
}

export default Articles
