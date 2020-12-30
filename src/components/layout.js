import React from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'

const Layout = ({ children, data }) => {
  const { title, location, links } = data

  return (
    <div id="wrapper">    
      <Header title={title}/>
      <Main>
        {children}
      </Main>
      <Footer
        links={links}
        location={location}
      />
    </div>
  )
}

export default Layout