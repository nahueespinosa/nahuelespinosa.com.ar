import React from "react"
import Style from "./header.module.css"
import LanguageButton from './language-button.js'
import DarkToggle from "./dark-toggle.js"

import { withTranslation } from "react-i18next"

const Header = ({ title, t }) => (
  <div id="header" className={Style.header}>
    <div className={Style.container}>
      <span className={Style.title}>{title}</span>
      <div className={Style.options}>
        <LanguageButton label={t("Language")} />
        <DarkToggle label={t("Header.Dark Mode")} />
      </div>
    </div>
  </div>
)

export default withTranslation("translations")(Header)
