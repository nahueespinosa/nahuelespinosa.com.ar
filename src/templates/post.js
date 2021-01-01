import React from "react"
import SEO from "react-seo-component"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { FormattedDate, useIntl } from "gatsby-plugin-intl"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/layout"
import Code from "../components/code"

/* TODO(nahue): Change to styled component */
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
  const { image, siteTitle, siteUrl, twitterUser, author } = useSiteMetadata()

  let node = data.allMdx.nodes.find(obj => {
    return obj.fields.lang === intl.locale
  })
  
  if (node === undefined) node = data.allMdx.nodes[0]

  const { body, frontmatter, fields } = node
  
  return (
    <Layout>
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

        <MDXProvider components={{pre: Code}}>
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </MDXProvider>
      </section>
    </Layout>
  )
}
