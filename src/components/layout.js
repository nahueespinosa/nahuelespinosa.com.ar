import React from 'react'
import SEO from '../components/seo.js'
import Main from '../components/main.js'
import Footer from '../components/footer.js'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div id="wrapper">
        <SEO/>
        <Main>
          {children}
        </Main>
        <Footer/>
      </div>
    )
  }
}

export default Layout
