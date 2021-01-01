import React from "react"
import styled from "styled-components"
import SEO from "react-seo-component"
import { FaClock } from "react-icons/fa"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { FormattedDate, useIntl } from "gatsby-plugin-intl"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/layout"
import Code from "../components/code"

const Date = styled.span`
  float: right;
  margin-top: 1em;
  font-size: 0.9em;
`

const Title = styled.h1`
  margin-bottom: 10px;
`

const Time = styled.div`
  width: 100%;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: var(--mid-contrast-color);
`

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
        readingTime {
          minutes
        }
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
        <Date>
          <FormattedDate
            value={frontmatter.date}
            year="numeric"
            month="long"
            day="numeric"
          />
        </Date>

        <Title>{frontmatter.title}</Title>
        <Time><span>{Math.ceil(fields.readingTime.minutes)} min &nbsp;</span><FaClock/></Time>

        <MDXProvider components={{pre: Code}}>
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </MDXProvider>
      </section>
    </Layout>
  )
}
