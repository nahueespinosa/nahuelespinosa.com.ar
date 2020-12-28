import React from "react"
import { getI18n } from "react-i18next"

const LanguageButton = (props) => {
  const i18n = getI18n("translations")

  const language = (i18n.language === 'es') ? 'en' : 'es'

  return(
    <button onClick={() => i18n.changeLanguage(language)}>{props.label}</button>
  )
}

export default LanguageButton