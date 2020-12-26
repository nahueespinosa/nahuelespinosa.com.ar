import React from 'react'
import Style from "./header.module.css"
import Toggle from "../components/toggle.js"
import Config from '../../data/SiteConfig'

const Header = () => (
  <div id="header" className={Style.header}>
    <div className={Style.container}>
      <span className={Style.title}>{Config.siteTitle}</span>
      <Toggle/>
    </div>
  </div>
)

export default Header
