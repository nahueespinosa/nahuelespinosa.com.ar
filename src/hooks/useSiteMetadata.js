import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            siteTitle
            siteImage
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
      }
    `
  )

  return site.siteMetadata
}
