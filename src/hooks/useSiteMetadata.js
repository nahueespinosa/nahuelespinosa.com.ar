import {graphql, useStaticQuery} from 'gatsby';
import {getSrc} from 'gatsby-plugin-image';

export const useSiteMetadata = () => {
  const {site, file} = useStaticQuery(
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
            gatsbyImageData(width: 1600, placeholder: BLURRED, layout: FIXED)
          }
        }
      }
    `,
  );

  site.siteMetadata.image = `${site.siteMetadata.siteUrl}${getSrc(file)}`;
  return site.siteMetadata;
};
