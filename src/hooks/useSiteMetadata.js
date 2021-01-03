import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const { site, file } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            siteUrl
            author
            location
            twitterUser
            social {
              email
              github
              linkedin
              twitter
            }
          }
        }
        file(relativePath: { eq: "site.png" }) {
          childImageSharp {
            fixed(width: 1600) {
              src
            }
          }
        }
      }
    `
  )

  site.siteMetadata.image = `${site.siteMetadata.siteUrl}${file.childImageSharp.fixed.src}`
  return site.siteMetadata
}
