import React from "react"
import { Link } from 'gatsby'
import Style from "./header.module.css"
import LanguageButton from './language-button.js'
import DarkToggle from "./dark-toggle.js"

const t = (text) => { return text }

const Header = ({ title }) => (
  <div id="header" className={Style.header}>
    <div className={Style.container}>
      <Link to="/" className={Style.title}>{title}</Link>
      <div className={Style.options}>
        <LanguageButton label={t("Language")} />
        <DarkToggle label={t("Header.Dark Mode")} />
      </div>
    </div>
  </div>
)

export default Header