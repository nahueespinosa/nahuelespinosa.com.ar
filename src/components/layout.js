import React from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'

const Layout = ({ children, data }) => {
  const { siteTitle, location, links } = data

  return (
    <>    
      <Header
        title={siteTitle}
      />
      <Main>
        {children}
      </Main>
      <Footer
        links={links}
        location={location}
      />
    </>
  )
}

export default Layout
