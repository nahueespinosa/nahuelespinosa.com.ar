import React from "react"
import { changeLocale, useIntl } from "gatsby-plugin-intl"

import Style from "./language-button.module.css"

const LanguageButton = ({ label }) => {
  const intl = useIntl()

  return(
    <button className={Style.button} onClick={() => {
      const language = (intl.locale === 'en') ? 'es' : 'en'
      changeLocale(language)
    }}>
      {label}
    </button>
  )
}

export default LanguageButton
