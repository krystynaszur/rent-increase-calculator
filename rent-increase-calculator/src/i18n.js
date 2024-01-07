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
          dwellings: {
            label:"How many dwellings are in your building?",
            info:"How many separate dwellings (rented or not) are in your building? For example, a duplex where no floors are subdivided usually has 2 units."
          },
          header: {
            dwelling: "Information about your dwelling"
          },
          municipalTaxModal: {
            button: "How do I find these amounts?"
          },
          rent: {
label: "What is your current monthly rent?",
info: "Enter the amount of your monthly rent (before the increase proposed by the landlord)."
          },
         title: "RENT INCREASE ESTIMATE CALCULATOR"
        }
      },
      fr: {
        translation: {
          dwellings: {
            label:"Combien de logements se trouvent dans votre bâtiment?",
            info:"How many separate dwellings (rented or not) are in your building? For example, a duplex where no floors are subdivided usually has 2 units."
          },
          header: {
            dwelling: "Informations sur votre logement",
            municipalTax: "Taxes municipales pour le bâtiment",
            schoolTax: "Taxes scolaires pour le bâtiment",
            improvements: "Améliorations majeures, réparations ou autres travaux"
          },
          municipalTaxModal: {
            button: "Comment trouver ces montants ?"
          },
          rent: {
            label: "Quel est votre loyer mensuel actuel ?",
            info: "Indiquez le montant de votre loyer mensuel (avant l'augmentation proposée par le propriétaire)."
                      },
         title: "OUTIL D'ESTIMATION D'HAUSSE DE LOYER"
        }
      },
    }
  });

export default i18n;