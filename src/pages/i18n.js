import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translations: require('../locales/en/translations.json')
      },
      es: {
        translations: require('../locales/es/translations.json')
      }
    },

    react: {
      wait: true,
      useSuspense: false
    }
  })

export default i18n