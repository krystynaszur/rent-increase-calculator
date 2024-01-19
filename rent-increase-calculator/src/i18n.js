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
   
    ns: ['translation'],
defaultNS: 'translation',
    // language resources
    resources: {
      en: {
        translation: {
          buttons: {
            amountSearch: "How do I find these amounts?"
                      },
          dwellings: {
            label:"How many dwellings are in your building?",
            info:"How many separate dwellings (rented or not) are in your building? For example, a duplex where no floors are subdivided usually has 2 units."
          },
          header: {
            dwelling: "Information about your dwelling"
          },
          municipalTaxModal: {
            button: "How do I find these amounts?",
           
            modalTexts:["To find the change in school tax for the building, go to the <b><a target=\"_blank\" href=\"https://servicesenligne2.ville.montreal.qc.ca/sel/evalweb/index\">Rôle d'évaluation foncière</a></b>. Pick “Addresse” and then “Continuer.”", "On the following page find your address. The website is not available in English, but you can translate it using Google Translate.", "Go to the bottom of the page and click on “Compte de taxes” for both 2023 and 2022. These will open PDF documents.", "Copy the number labelled “Total du compte” in the bottom right of the table on the first page. Once you've found it in both PDFs, click “Close” and enter those numbers in the fields of the calculator." 
          ]
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
          buttons: {
            amountSearch: "Comment trouver ces montants ?"
                      },
            
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
            button: "Comment trouver ces montants ? <1>www.google.com</1>",
            stackoverflow: "<site_anchor>Welcome to stackoverflow!</site_anchor> You can also <profile_anchor>check my profile</profile_anchor>",
            modalTexts:["To find the change in school tax for the building, go to the <0>second</0>. Click “Visiteur.”"
          ]
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