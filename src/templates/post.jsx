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
import ProgressBar from "../components/progress-bar"

const Small = styled.small`
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`

const Title = styled.h1`
  margin-top: 0;
`

const PostPage = ({ data }) => {
  const intl = useIntl()
  const { image, siteTitle, siteUrl, twitterUser, author } = useSiteMetadata()

  let node = data.allMdx.nodes.find(obj => {
    return obj.fields.lang === intl.locale
  })
  
  /* If there is no node for this locale, use default */
  if (node === undefined) node = data.allMdx.nodes[0]

  const { body, frontmatter, fields } = node
  
  const progressRef = React.createRef()

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

      <ProgressBar target={progressRef} />
      
      <section ref={progressRef}>
        <Small>
          <FormattedDate
            value={frontmatter.date}
            year="numeric"
            month="long"
            day="numeric"
          />
          <span>&nbsp; • &nbsp;</span>
          <span>{Math.ceil(fields.readingTime.minutes)} min &nbsp;</span>
          <FaClock/>
        </Small>

        <Title>{frontmatter.title}</Title>

        <MDXProvider components={{pre: Code}}>
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </MDXProvider>
      </section>
    </Layout>
  )
}

export const query = graphql`
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

export default PostPage