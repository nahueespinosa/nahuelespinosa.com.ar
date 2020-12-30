import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import SEO from "react-seo-component"

import Layout from "../components/layout"
import Style from "./post.module.css"

import { useSiteMetadata } from "../hooks/useSiteMetadata"

export const query = graphql
`
query PostsByID($id: String!) {
  mdx(
    id: { eq: $id }
  ){
    body
    frontmatter {
      title
      date(formatString: "MMMM Do, YYYY")
    }
    fields {
      slug
    }
  }
}
`

export default ({ data }) => {
  const { frontmatter, body, fields } = data.mdx

  const metadata = useSiteMetadata()
  const { description, image, siteTitle, siteUrl, language, locale, twitterUser, author } = metadata

  return (
    <Layout data={metadata}>
      <SEO
        title={siteTitle}
        titleTemplate={frontmatter.title}
        description={description}
        image={`${siteUrl}${image}`}
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={language}
        siteLocale={locale}
        twitterUsername={twitterUser}
        author={author}
        article={true}
        datePublished={frontmatter.date}
        dateModified={frontmatter.date}
      />
      
      <span className={Style.date}>{frontmatter.date}</span>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}
