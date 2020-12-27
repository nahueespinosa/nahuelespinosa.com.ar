import React from "react"
import { useTranslation } from "react-i18next"

const LanguageButton = (props) => {
  const { t, i18n } = useTranslation("translations")

  const language = (i18n.language === 'es') ? 'en' : 'es'

  return(
    <button onClick={() => i18n.changeLanguage(language)}>{props.label}</button>
  )
}

export default LanguageButton