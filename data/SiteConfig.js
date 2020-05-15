const config = {
  siteTitle: 'Nahuel Espinosa',
  siteTitleShort: 'Nahuel Espinosa',
  siteTitleAlt: 'Nahuel Espinosa',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://www.nahuelespinosa.com.ar',
  repo: 'https://github.com/nahueespinosa/my-site',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    "Nahuel Espinosa is an electronics engineer and software developer passionate about computer science and related topics.",
  email: 'nahuelespinosa@fecea.edu.ar',
  location: 'Buenos Aires, Argentina',
  linkedin: 'https://www.linkedin.com/in/nahuel-espinosa-617a1398/',
  github: 'https://github.com/nahueespinosa',
  menuLinks: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Resources',
      link: '/resources/',
    },
    {
      name: 'Projects',
      link: '/projects/',
    },
    {
      name: 'Timeline',
      link: '/timeline/',
    },
    {
      name: 'Articles',
      link: '/articles/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

module.exports = config