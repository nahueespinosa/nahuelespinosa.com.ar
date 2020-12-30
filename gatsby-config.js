module.exports = {
  siteMetadata: {
    siteTitle: 'Nahuel Espinosa',
    description: 'Nahuel Espinosa is a semi-senior EE and software developer interested in computer science and related topics.',
    author: 'Nahuel Espinosa',
    image: '/site.png',
    siteUrl: 'https://www.nahuelespinosa.com.ar',
    language: 'en',
    locale: 'en_US',
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
        name: 'posts',
        path: `${__dirname}/content/posts`,
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
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-dark-mode',
  ],
}
