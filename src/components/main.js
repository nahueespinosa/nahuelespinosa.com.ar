import React from 'react'
import style from "./main.module.css"

class Main extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div id="main" className={style.main}>
        <div className={style.container}>
          {children}
        </div>
      </div>
    )
  }
}

export default Main