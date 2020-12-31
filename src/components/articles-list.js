import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"

import Style from "./articles-list.module.css"

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

const ArticlesList = () => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  const latest = useMdxLatest()

  if (latest.length < 1) {
    return (<section></section>)
  }

  return (
    <>
      <h2>{t("Articles.Title")}</h2>
      <ul className={Style.list}>
        {latest.map(({ fields }) => {
          let version = fields.versions.find(node => {
            return node.lang === intl.locale
          })

          if (version === undefined) version = fields.versions[0]
          
          return (
            <li>
              <span className={Style.dateTag}>{version.date}</span>
              <Link to={fields.slug}>{version.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ArticlesList
