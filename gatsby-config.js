module.exports = {
  siteMetadata: {
    siteTitle: 'Nahuel Espinosa',
    siteUrl: 'https://www.nahuelespinosa.com.ar',
    author: 'Nahuel Espinosa',
    image: '/site.png',
    location: 'Buenos Aires, Argentina',
    twitterUser: '@nahueespinosa',
    links: {
      email: 'mailto:me@nahuelespinosa.com.ar',
      github: 'https://github.com/nahueespinosa/',
      linkedin: 'https://www.linkedin.com/in/nahuel-espinosa-617a1398/',
      twitter: 'https://www.twitter.com/nahueespinosa',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nahuel Espinosa',
        short_name: 'Nahuel Espinosa',
        description: 'Nahuel Espinosa is a semi-senior EE and software developer interested in computer science and related topics.',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#333333',
        display: 'browser',
        icon: 'static/logo.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-153304934-3',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    'gatsby-remark-reading-time',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-dark-mode',
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/intl`,
        languages: ['en', 'es'],
        defaultLanguage: 'en',
      }
    },
    'gatsby-plugin-styled-components',
  ],
}
