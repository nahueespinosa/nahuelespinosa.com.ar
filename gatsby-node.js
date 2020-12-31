const { createFilePath } = require(`gatsby-source-filesystem`)

const _getMarkdownNodeInfo = node => {
  // Files are defined with "name-with-dashes.lang.mdx"
  // name returns "name-with-dashes.lang"
  // So grab the lang from that string
  let lang
  let isDefault = false

  try {
    lang = path.basename(node.fileAbsolutePath, ".mdx").split('.')[1]
  } finally {
    // Check if post.name is "index" -- because that's the file for default language
    // (In this case "en")
    if (lang === undefined) {
      lang = 'en'
      isDefault = true
    }
  }

  const name = path.dirname(node.fileAbsolutePath)

  return { name, isDefault, lang }
}

exports.onCreateNode = ({ node, actions, getNode, getNodes }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const path = createFilePath({ node, getNode })

    const { name, lang, isDefault } = _getMarkdownNodeInfo(node)

    const versions = []

    // if is default language then load versions in other languages
    if (isDefault) {
      // generate all versions of the node (including default language version)
      getNodes().forEach(other => {
        if (other.internal.type === `Mdx`) {
          const info = _getMarkdownNodeInfo(other)

          if (name === info.name) {
            versions.push({
              id: other.id,
              lang: info.lang,
              title: other.frontmatter.title,
              date: other.frontmatter.date,
              name: info.name,
            })
          }
        }
      })
    }
      
    createNodeField({ node, name: `slug`, value: `/posts${path}` })
    createNodeField({ node, name: `isDefault`, value: isDefault })
    createNodeField({ node, name: `lang`, value: lang })
    createNodeField({ node, name: `versions`, value: versions })
  }
}

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql
  (`
    query {
      allMdx {
        edges {
          node {
            id
            body
            fields {
              slug
              isDefault
              versions {
                id
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges

  posts.forEach(({ node }) => {
    // Only build pages for default nodes
    if (node.fields.isDefault) {
      const ids = node.fields.versions.map(node => node.id)

      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          ids,
        },
      })
    }
  })
}
