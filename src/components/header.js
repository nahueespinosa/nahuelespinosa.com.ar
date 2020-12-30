import React from "react"
import { Link } from 'gatsby'
import Style from "./header.module.css"
import LanguageButton from './language-button.js'
import DarkToggle from "./dark-toggle.js"

import { withTranslation } from "react-i18next"

const Header = ({ title, t }) => (
  <div id="header" className={Style.header}>
    <div className={Style.container}>
      <Link to="/" className={Style.title}>{Config.title}</Link>
      <div className={Style.options}>
        <LanguageButton label={t("Language")} />
        <DarkToggle label={t("Header.Dark Mode")} />
      </div>
    </div>
  </div>
)

export default withTranslation("translations")(Header)
