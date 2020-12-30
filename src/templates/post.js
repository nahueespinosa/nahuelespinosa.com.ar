import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import SEO from "react-seo-component"
import { FormattedDate, useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Style from "./post.module.css"

import { useSiteMetadata } from "../hooks/useSiteMetadata"

export const query = graphql
`
query POST_BY_ID_QUERY($id: String!) {
  mdx(
    id: { eq: $id }
  ){
    body
    frontmatter {
      title
      description
      date
    }
    fields {
      slug
    }
  }
}
`

export default ({ data }) => {
  const intl = useIntl()

  const { frontmatter, body, fields } = data.mdx

  const metadata = useSiteMetadata()
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
      
      <span className={Style.date}>
        <FormattedDate
          value={frontmatter.date}
          year="numeric"
          month="long"
          day="numeric"
        />
      </span>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}
