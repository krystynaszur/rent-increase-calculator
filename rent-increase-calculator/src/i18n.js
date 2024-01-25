import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    ns: ["translation"],
    defaultNS: "translation",
    // language resources
    resources: {
      en: {
        translation: {
          buttons: {
            calculate: "Calculate rent increase",
            close: "Close",
          },
          dwellings: {
            label: "How many dwellings are in your building?",
            info: "How many separate dwellings (rented or not) are in your building? For example, a duplex where no floors are subdivided usually has 2 units.",
          },
          explanation: {
            heating:"Base adjustement related to heating",
            municipalTax: "Adjustment related to municipal tax changes",
            schoolTax: "Adjustment related to school tax changes",
            repairs: "Adjustment related to repairs"
          },
          header: {
            dwelling: "Information about your dwelling",
            improvements: "Major improvements, repairs or other work",
            municipalTax: "Municipal taxes for the building",
            rentIncreaseEstimate:
              "Estimation of fair and reasonable increase of your rent",
              rentIncreaseEstimateExplanation: "How did we calculate this estimate?",
            schoolTax: "School taxes for the building",
          },
          heating: {
            label: "How is your heating paid?",
            info: "The TAL’s “reasonable” increase calculator factors in whether your or your landlord pay for the heating in your dwelling. If they pay for it, different heating methods carry different percentage rates.",
            electricity: "My landlord pays for electric heating",
            gas: "My landlord pays for gas heating",
            oil: "My landlord pays for oil (or other) heating",
            self: "I pay for heating myself",
          },
          improvementsBuilding: {
            label: "Amount spent on major repairs for the whole building",
            info: "How much did your landlord spend on major repairs and improvements of the building as a whole? This may involve work aimed at repairing or modifying the main elements of the building's structure (roof, pipes, heating system, insulation, windows), renovations in common areas.",
          },
          improvementsDwelling: {
            label:
              "Amount spent on major repairs for your dwelling specifically",
            info: "How much did your landlord spend on major repairs in your dwelling specifically? This may involve work aimed at renovating a bathroom or a kitchen, replacement of cabinets.",
          },
          municipalTaxTwoYearsAgo: {
            label: "Municipal tax for 2022",
          },
          municipalTaxLastYear: {
            label: "Municipal tax for 2023",
          },
          municipalTaxModal: {
            button: "How do I find these amounts?",

            modalTexts: [
              'To find the change in school tax for the building, go to the <b><a target="_blank" href="https://servicesenligne2.ville.montreal.qc.ca/sel/evalweb/index">Rôle d\'évaluation foncière</a></b>. Pick “Addresse” and then “Continuer.”',
              "On the following page enter your address. The website is not available in English, but you can translate it using Google Translate.",
              "Go to the bottom of the page and click on “Compte de taxes” for both 2023 and 2022. These will open PDF documents.",
              "Copy the number labelled “Total du compte” in the bottom right of the table on the first page. Once you've found it in both PDFs, click “Close” and enter those numbers in the fields of the calculator.",
            ],
          },
          rent: {
            label: "What is your current monthly rent?",
            info: "Enter the amount of your monthly rent (before the increase proposed by the landlord).",
          },

          schoolTaxTwoYearsAgo: {
            label: "School tax for 2023-2024",
          },
          schoolTaxLastYear: {
            label: "School tax for 2022-2023",
          },
          schoolTaxModal: {
            button: "How do I find these amounts?",

            modalTexts: [
              'To find the change in school tax for the building, go to the <b><a target="_blank" href="https://servicesenligne2.ville.montreal.qc.ca/sel/evalweb/index">Rôle d\'évaluation foncière</a></b>. Pick “Addresse” and then “Continuer.”',
              "On the following page enter your address. The website is not available in English, but you can translate it using Google Translate.",
              "Go to the bottom of the page and click on “Compte de taxes” for both 2023 and 2022. These will open PDF documents.",
              "Copy the number labelled “Total du compte” in the bottom right of the table on the first page. Once you've found it in both PDFs, click “Close” and enter those numbers in the fields of the calculator.",
            ],
          },
          title: "RENT INCREASE ESTIMATE CALCULATOR",
        },
      },
      fr: {
        translation: {
          buttons: {
            calculate: "Calculez hausse de loyer",
            close: "Fermez",
          },

          dwellings: {
            label: "Combien de logements se trouvent dans votre bâtiment?",
            info: "How many separate dwellings (rented or not) are in your building? For example, a duplex where no floors are subdivided usually has 2 units.",
          },
          explanation: {
            heating:"Ajustement de base lié au chauffage",
            municipalTax: "Ajustement lié aux changements de taxes municipales",
            schoolTax: "Ajustement lié aux changements de taxes scolaires",
            repairs: "Ajustement lié aux rénovations"
          },
          header: {
            dwelling: "Informations sur votre logement",
            municipalTax: "Taxes municipales pour le bâtiment",
            rentIncreaseEstimate:
              "Estimation d'une augmentation juste et raisonnable de votre loyer",
              rentIncreaseEstimateExplanation: "Comment on a calculé cette estimation ?",
            schoolTax: "Taxes scolaires pour le bâtiment",
            improvements:
              "Améliorations majeures, réparations ou autres travaux",
          },
          heating: {
            label: "Comment est payé votre chauffage ?",
            info: "L'outil d'estimation d'augmentation « raisonnable » du TAL prend en compte qui paie le chauffage de votre logement : vous ou votre propriétaire.Si c'est le propriétaire qui paie, les différentes méthodes de chauffage entraînent des taux de pourcentage différents.",
            electricity: "Mon propriétaire paie le chauffage électrique",
            gas: "Mon propriétaire paie le chauffage au gaz",
            oil: "Mon propriétaire paie le chauffage au mazout (ou autre)",
            self: "Je paie le chauffage moi-même",
          },
          improvementsBuilding: {
            label: "Montant dépensé pour les travaux majeurs sur l'immeuble",
            info: "Combien votre propriétaire a-t-il dépensé pour les réparations et les améliorations majeures de l'immeuble dans son ensemble ?  Il peut s’agir de travaux visant à réparer ou modifier les principaux éléments de la structure de l’immeuble (toit, tuyauterie, système de chauffage, isolation, fenêtres), de travaux de rénovation dans les espaces communs.",
          },
          improvementsDwelling: {
            label:
              "Montant dépensé pour les travaux majeurs sur votre logement",
            info: "Combien votre propriétaire a-t-il dépensé spécifiquement pour des réparations majeures dans votre logement ? Il peut s'agir de la rénovation d'une salle de bain ou d'une cuisine, du remplacement d'armoires.",
          },

          modalTaxMunicipal: {
            button: "Comment trouver ces montants ?",
            modalTexts: [
              'Pour connaître la modification de la taxe municipale pour votre immeuble, rendez-vous sur le site du <b><a target="_blank" rel="noopener noreferrer" href="https://servicesenligne2.ville.montreal.qc.ca/sel/evalweb/">Rôle d\'évaluation foncière</a></b> de Montréal. Choisissez “Addresse” et ensuite “Continuer.”',
              "Entrez votre adresse sur la page suivante.",
              "Allez  au bas de la page et cliquez sur “Compte de taxes” pour 2023 et 2022. Ces documents s'ouvriront en format PDF.",
              "Copiez le chiffre intitulé “total du compte”, en bas à droite du tableau de la première page. Une fois que vous l'avez trouvé dans les deux PDF, cliquez sur “Fermez” et entrez ces chiffres dans les champs de l'outil.",
            ],
          },
          modalTaxScolaire: {
            button: "Comment trouver ces montants ?",
            modalTexts: [
              'Pour connaître la modification de la taxe municipale pour votre immeuble, rendez-vous sur le site du <b><a target="_blank" rel="noopener noreferrer" href="https://servicesenligne2.ville.montreal.qc.ca/sel/evalweb/">Rôle d\'évaluation foncière</a></b> de Montréal. Choisissez “Addresse” et ensuite “Continuer.”',
              "Entrez votre adresse sur la page suivante.",
              "Allez  au bas de la page et cliquez sur “Compte de taxes” pour 2023 et 2022. Ces documents s'ouvriront en format PDF.",
              "Copiez le chiffre intitulé “total du compte”, en bas à droite du tableau de la première page. Une fois que vous l'avez trouvé dans les deux PDF, cliquez sur “Fermez” et entrez ces chiffres dans les champs de l'outil.",
            ],
          },
          municipalTaxTwoYearsAgo: {
            label: "Taxe municipale pour l’année 2022",
          },
          municipalTaxLastYear: {
            label: "Taxe municipale pour l’année 2023",
          },
          rent: {
            label: "Quel est votre loyer mensuel actuel ?",
            info: "Indiquez le montant de votre loyer mensuel (avant l'augmentation proposée par le propriétaire).",
          },
          rentEstimateExplanation: {

          },
          schoolTaxTwoYearsAgo: {
            label: "Taxe scolaire pour l’année 2022-2023",
          },
          schoolTaxLastYear: {
            label: "Taxe scolaire pour l’année 2023-2024",
          },
          title: "OUTIL D'ESTIMATION D'HAUSSE DE LOYER",
        },
      },
    },
  });

export default i18n;
