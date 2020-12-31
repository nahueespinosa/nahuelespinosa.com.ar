import React from "react"
import SEO from "react-seo-component"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { FormattedDate, useIntl } from "gatsby-plugin-intl"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/layout"

import Style from "./post.module.css"

export const query = graphql
`
query POST_BY_ID_QUERY($ids: [String!]) {
  allMdx(
    filter: {id: {in: $ids}}
  ){
    nodes {
      id
      body
      frontmatter {
        title
        description
        date
      }
      fields {
        lang
        slug
      }
    }
  }
}
`

export default ({ data }) => {
  const intl = useIntl()
  const metadata = useSiteMetadata()

  let node = data.allMdx.nodes.find(obj => {
    return obj.fields.lang === intl.locale
  })
  
  if (node === undefined) node = data.allMdx.nodes[0]

  const { body, frontmatter, fields } = node
  const { image, siteTitle, siteUrl, twitterUser, author } = metadata

  return (
    <Layout data={metadata}>
      <SEO
        title={siteTitle}
        titleTemplate={frontmatter.title}
        description={frontmatter.description}
        image={`${siteUrl}${image}`}
        pathname={`${siteUrl}/${intl.locale}${fields.slug}`}
        siteLanguage={intl.language}
        siteLocale={intl.locale}
        twitterUsername={twitterUser}
        author={author}
        article={true}
        datePublished={frontmatter.date}
        dateModified={frontmatter.date}
      />
      
      <section>
        <span className={Style.date}>
          <FormattedDate
            value={frontmatter.date}
            year="numeric"
            month="long"
            day="numeric"
          />
        </span>
        <MDXRenderer>
          {body}
        </MDXRenderer>
      </section>
    </Layout>
  )
}
