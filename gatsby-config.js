module.exports = {
  siteMetadata: {
    title: "Nahuel Espinosa",
    author: "Nahuel Espinosa"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'nahuel-espinosa-site',
        short_name: 'nahuel-site',
        start_url: '/',
        background_color: '#333333',
        theme_color: '#ffffff',
        display: 'browser',
        icon: 'src/assets/images/logo.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-scroll-reveal',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'en',
        useLangKeyLayout: false
      }
    }
  ],
}
