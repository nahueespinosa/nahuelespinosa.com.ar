import React from "react"
import { changeLocale, useIntl } from "gatsby-plugin-intl"

const LanguageButton = ({ label }) => {
  const intl = useIntl()

  return(
    <button onClick={() => {
      let language = (intl.locale === 'en') ? 'es' : 'en'
      changeLocale(language)
    }}>
      {label}
    </button>
  )
}

export default LanguageButton