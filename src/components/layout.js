import React from 'react'
import SEO from '../components/seo.js'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div id="wrapper">
        <SEO />
        {children}
      </div>
    )
  }
}

export default Layout
