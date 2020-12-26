import React from 'react'
import Style from "./main.module.css"

class Main extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div id="main" className={Style.main}>
        <div className={Style.container}>
          {children}
        </div>
      </div>
    )
  }
}

export default Main
