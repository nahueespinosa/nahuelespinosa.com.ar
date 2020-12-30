import React from "react"
import Style from "./header.module.css"
import LanguageButton from './language-button.js'
import DarkToggle from "./dark-toggle.js"
import { useIntl, Link } from "gatsby-plugin-intl"

const Header = ({ title }) => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  return (
    <header className={Style.header}>
      <div className={Style.container}>
        <Link to="/" className={Style.title}>{title}</Link>
        <div className={Style.options}>
          <LanguageButton label={t("Header.Language")} />
          <DarkToggle label={t("Header.Dark Mode")} />
        </div>
      </div>
    </header>
  )
}

export default Header