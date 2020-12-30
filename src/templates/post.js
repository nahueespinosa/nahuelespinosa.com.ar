import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

import Layout from "../components/layout"
import Style from "./post.module.css"

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
  }
}
`

export default ({ data }) => {
  const { frontmatter, body } = data.mdx
  return (
    <Layout>
      <span className={Style.date}>{frontmatter.date}</span>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}
