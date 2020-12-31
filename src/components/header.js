import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import LanguageButton from "./language-button"
import DarkToggle from "./dark-toggle"

import Style from "./header.module.css"

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
