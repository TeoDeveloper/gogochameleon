import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translateEN from './locales/en/translationEN.json'
import translateES from './locales/es/translationES.json'
import translateITA from './locales/ita/translationITA.json'

const resources = {
    ita: {translation: translateITA},
    en: {translation: translateEN},
    es: {translation: translateES},
}

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    resources,
    lng: 'ita',
    debug: false,
    detection: {
        order: ['querystring', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false
    }
})

export default i18n
