import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
         title: "RENT INCREASE ESTIMATE CALCULATOR"
        }
      },
      fr: {
        translation: {
         title: "OUTIL D'ESTIMATION D'HAUSSE DE LOYER"
        }
      },
    }
  });

export default i18n;