const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Nahuel Espinosa',
    siteUrl: 'https://www.nahuelespinosa.com.ar',
    author: 'Nahuel Espinosa',
    location: 'Buenos Aires, Argentina',
    twitterUser: '@nahueespinosa',
    social: {
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
        short_name: 'Nahue',
        description: 'Nahuel Espinosa\'s personal site',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#333333',
        display: 'browser',
        icon: 'static/favicon.png',
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
        name: 'blog',
        path: path.join(__dirname, 'content', 'blog')
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: path.join(__dirname, 'content', 'assets'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: path.join(__dirname, 'static'),
      }
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: path.join(__dirname, 'src', 'intl'),
        languages: ['en', 'es'],
        defaultLanguage: 'en',
      }
    },
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
        ],
      },
    },
    'gatsby-remark-reading-time',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-preload-fonts',
  ],
}
