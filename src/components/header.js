import React from "react"
import Style from "./header.module.css"
import DarkToggle from "../components/toggle.js"
import Config from "../../data/SiteConfig"

import { withTranslation } from "react-i18next"

const Header = ({ t }) => (
  <div id="header" className={Style.header}>
    <div className={Style.container}>
      <span className={Style.title}>{Config.siteTitle}</span>
      <DarkToggle label={t("Header.Dark Mode")}/>
    </div>
  </div>
)

export default withTranslation("translations")(Header)
