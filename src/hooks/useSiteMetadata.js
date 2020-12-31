import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            siteTitle
            author
            image
            siteUrl
            location
            twitterUser
            links {
              email
              github
              linkedin
              twitter
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}
