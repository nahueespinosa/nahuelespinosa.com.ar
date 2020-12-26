import React from 'react'
import Style from "./header.module.css"
import Toggle from "../components/toggle.js"

const Header = () => (
  <div id="header" className={Style.header}>
    <div className={Style.container}>
      <span>Nahuel Espinosa</span>
      <Toggle/>
    </div>
  </div>
)

export default Header
