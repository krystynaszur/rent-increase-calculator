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
            calculate: "Calculate rent increase",
            close: "Close"
                      },
          dwellings: {
            label:"How many dwellings are in your building?",
            info:"How many separate dwellings (rented or not) are in your building? For example, a duplex where no floors are subdivided usually has 2 units."
          },
          header: {
            dwelling: "Information about your dwelling"
          },
          heating: {
            label:"How is your heating paid?",
            info:"The TAL’s “reasonable” increase calculator factors in whether your or your landlord pay for the heating in your dwelling. If they pay for it, different heating methods carry different percentage rates."
          },
          municipalTaxModal: {
            button: "How do I find these amounts?",
           
            modalTexts:["To find the change in school tax for the building, go to the <b><a target=\"_blank\" href=\"https://servicesenligne2.ville.montreal.qc.ca/sel/evalweb/index\">Rôle d'évaluation foncière</a></b>. Pick “Addresse” and then “Continuer.”", "On the following page enter your address. The website is not available in English, but you can translate it using Google Translate.", "Go to the bottom of the page and click on “Compte de taxes” for both 2023 and 2022. These will open PDF documents.", "Copy the number labelled “Total du compte” in the bottom right of the table on the first page. Once you've found it in both PDFs, click “Close” and enter those numbers in the fields of the calculator." 
          ]
          },
          rent: {
label: "What is your current monthly rent?",
info: "Enter the amount of your monthly rent (before the increase proposed by the landlord)."
          },
         schoolTaxModal: {
            button: "How do I find these amounts?",
           
            modalTexts:["To find the change in school tax for the building, go to the <b><a target=\"_blank\" href=\"https://servicesenligne2.ville.montreal.qc.ca/sel/evalweb/index\">Rôle d'évaluation foncière</a></b>. Pick “Addresse” and then “Continuer.”", "On the following page enter your address. The website is not available in English, but you can translate it using Google Translate.", "Go to the bottom of the page and click on “Compte de taxes” for both 2023 and 2022. These will open PDF documents.", "Copy the number labelled “Total du compte” in the bottom right of the table on the first page. Once you've found it in both PDFs, click “Close” and enter those numbers in the fields of the calculator." 
          ]
          },
         title: "RENT INCREASE ESTIMATE CALCULATOR"
        }
      },
      fr: {
        translation: {
          buttons: {
            calculate: "Calculez hausse de loyer",
            close: "Fermez"
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
          heating: {
            label:"Comment est payé votre chauffage ?",
            info:"L'outil d'estimation d'augmentation « raisonnable » du TAL prend en compte qui paie le chauffage de votre logement : vous ou votre propriétaire.Si c'est le propriétaire qui paie, les différentes méthodes de chauffage entraînent des taux de pourcentage différents."
          },
          
          modalTaxMunicipal: {
            button: "Comment trouver ces montants ?",
            modalTexts:["Pour connaître la modification de la taxe municipale pour votre immeuble, rendez-vous sur le site du <b><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://servicesenligne2.ville.montreal.qc.ca/sel/evalweb/\">Rôle d'évaluation foncière</a></b> de Montréal. Choisissez “Addresse” et ensuite “Continuer.”", "Entrez votre adresse sur la page suivante.", "Allez  au bas de la page et cliquez sur “Compte de taxes” pour 2023 et 2022. Ces documents s'ouvriront en format PDF.", "Copiez le chiffre intitulé “total du compte”, en bas à droite du tableau de la première page. Une fois que vous l'avez trouvé dans les deux PDF, cliquez sur “Fermez” et entrez ces chiffres dans les champs de l'outil."
          ]
          },
          modalTaxScolaire: {
            button: "Comment trouver ces montants ?",
            modalTexts:["Pour connaître la modification de la taxe municipale pour votre immeuble, rendez-vous sur le site du <b><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://servicesenligne2.ville.montreal.qc.ca/sel/evalweb/\">Rôle d'évaluation foncière</a></b> de Montréal. Choisissez “Addresse” et ensuite “Continuer.”", "Entrez votre adresse sur la page suivante.", "Allez  au bas de la page et cliquez sur “Compte de taxes” pour 2023 et 2022. Ces documents s'ouvriront en format PDF.", "Copiez le chiffre intitulé “total du compte”, en bas à droite du tableau de la première page. Une fois que vous l'avez trouvé dans les deux PDF, cliquez sur “Fermez” et entrez ces chiffres dans les champs de l'outil."
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