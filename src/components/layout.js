import React from 'react'
import Header from '../components/header.js'
import Main from '../components/main.js'
import Footer from '../components/footer.js'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div id="wrapper">
        <Header/>
        <Main>
          {children}
        </Main>
        <Footer/>
      </div>
    )
  }
}

export default Layout
