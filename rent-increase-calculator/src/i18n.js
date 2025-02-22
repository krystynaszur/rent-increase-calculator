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
          author: {
            line1: "Made in Montreal by",
            line2: "Check out the repo:",
            line3: "Contact the author:",
          },
          buttons: {
            calculate: "Calculate rent increase",
            close: "Close",
            next: "Next",
            previous: "Back",
          },
          dwellings: {
            label: "How many dwellings are in your building?",
            info: "How many separate dwellings (rented or not) are in your building? For example, a duplex where no floors are subdivided usually has 2 units.",
          },
          explanation: {
            heating: "Base adjustement related to heating",
            municipalTax: "Adjustment related to municipal tax changes",
            schoolTax: "Adjustment related to school tax changes",
            repairs: "Adjustment related to repairs",
          },
          intro: {
            line1:
              "This tool is for you if you live in Montreal, rent an apartment and have received a notice of rent increase from your landlord.",
            line2:
              "You can check if the increase suggested by the landlord is in line with",
            link: "https://www.tal.gouv.qc.ca/en/news/detail?code=calculation-of-the-2025-rent-adjustment",
            linkTitle: "2025's guidelines",
            line3:
              "which have been published by Tribunal administratif du logement (TAL) and which define what counts as a fair and reasonable rent increase.",
            line4:
              "This tool is easier to use than the one prepared by TAL, because it is made with tenants in mind: it only asks for information to which you have access as a tenant.",
          },
          footer: {
            disclaimer1:
              "If the reasonable increase estimate calculated with the tool is much smaller than the increase proposed by the landlord, first",
            disclaimer2: "try talking to the landlord",
            disclaimer3:
              ". Ask for detailed explanations of the basis for the rent increase. Perhaps it is caused by the expenses that you do not know about but that can justify a more significant rent increase (e.g. insurance, maintenance).  Ideally, the landlord should provide you with the details of these extra expenses so you could enter them in",
            disclaimerLink:
              "https://extranet.tal.gouv.qc.ca/internet/asp/Outildecalcul/Calcul.asp",
            disclaimerLinkTitle:
              "the more detailed rent increase calculation tool developed by TAL.",
            line1: "You have the right to refuse a rent increase. ",
            line2: "Tribunal administratif du logement offers a form titled",
            link1:
              "https://www.tal.gouv.qc.ca/sites/default/files/notices/TAL_810A_E.pdf",
            linkTitle1:
              "Lessee’s response to a notice of rent increase and modification of another condition of the lease",
            line3:
              ", which you can print and deliver to your landlord by registered mail. Remember:",
            line4:
              "you must reply within one month of receiving the notice of increase.",
            line5: "If you need help,",
            line5a: "contact your local housing committee",
            line5b: ". Click",
            link2: "https://rclalq.qc.ca/en/housing-committee/",
            linkTitle2: "here",
            line6: "to find the one that is the closest to you.",
            line7: "This tool is based on 2025's estimation sheet created by",
            line8: "You can download this estimation sheet as a ",
            line9: "or",
            line10: "file.",
          },
          header: {
            dwelling: "Information about your dwelling",
            footer: "What next?",
            improvements: "Major improvements, repairs or other work",
            municipalTax: "Municipal taxes for the building",
            rentIncreaseEstimate:
              "Estimation of fair and reasonable increase of your rent",
            rentIncreaseEstimateExplanation:
              "How did we calculate this estimate?",
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
            label: "Municipal tax for 2024",
          },
          municipalTaxLastYear: {
            label: "Municipal tax for 2025",
          },
          municipalTaxModal: {
            button: "How do I find these amounts?",

            modalTexts: [
              'In order to verify how the municipal taxes have changed for your building, go to the website of <a target="_blank" href="https://montreal.ca/role-evaluation-fonciere">Rôle d\'évaluation foncière</a>. Pick “Par adresse” and then “Suivant”.',
              "On the following page enter your address. The website is not available in English, but you can translate it using Google Translate. Click “Rechercher”.",
              "Click on the green arrow to the right of the address that matches yours in the list.",
              "Go to the bottom of the page and click on “Compte de taxes” for both 2025 and 2024. These will open PDF documents.",
              "Copy the number labelled “Total du compte” in the bottom right of the table on the first page. Once you've found it in both PDFs, click “Close” and enter those numbers in the fields of the calculator.<br/><br/>Enter the numbers for the whole building. Do not try to calculate the part just for your dwelling (the tool will do that automatically).",
            ],
          },
          rent: {
            label: "What is your current monthly rent?",
            info: "Enter the amount of your monthly rent (before the increase proposed by the landlord).",
          },
          required: "Required field",
          schoolTaxTwoYearsAgo: {
            label: "School tax for 2023-2024",
          },
          schoolTaxLastYear: {
            label: "School tax for 2024-2025",
          },
          schoolTaxModal: {
            button: "How do I find these amounts?",

            modalTexts: [
              'In order to verify how the school taxes have changed for your building, go to the website of  <a target="_blank" rel="noopener noreferrer" href="https://tfp.cgtsim.qc.ca/asp/TFP.aspx?jlsid=1&jlrun=tfpint.general.Accueil&site=int">Comité de gestion de la taxe scolaire</a>. Click on “View data”.',
              "Enter your address on the following page.",
              "Click on the bill icon.",
              "Copy the first two numbers from the “Amount” column, which are the school tax amounts for the years 2023-2024 and 2022-2023. Then click “Close” and enter those numbers in the fields of the calculator.<br/><br/>Enter the numbers for the whole building. Do not try to calculate the part just for your dwelling (the tool will do that automatically).",
            ],
          },
          title: "RENT INCREASE ESTIMATE CALCULATOR",
        },
      },
      fr: {
        translation: {
          author: {
            line1: "Fait à Montreal par",
            line2: "Consultez le référentiel :",
            line3: "Contactez l'autrice :",
          },
          buttons: {
            calculate: "Calculez hausse de loyer",
            close: "Fermez",
            next: "Suivant",
            previous: "Précédent",
          },

          dwellings: {
            label: "Combien de logements se trouvent dans votre bâtiment?",
            info: "Combien de logements distincts (loués ou non) compte votre immeuble ? Par exemple, un duplex où aucun étage n’est subdivisé compte généralement 2 logements.",
          },
          explanation: {
            heating: "Ajustement de base lié au chauffage",
            municipalTax: "Ajustement lié aux changements de taxes municipales",
            schoolTax: "Ajustement lié aux changements de taxes scolaires",
            repairs: "Ajustement lié aux rénovations",
          },
          footer: {
            disclaimer1:
              "Si l’estimation de hausse raisonnable calculée avec cet outil est bien inférieure à l’augmentation proposée par le propriétaire,",
            disclaimer2: "essayez d’abord d’en parler avec le propriétaire",
            disclaimer3:
              ". Demandez des explications détaillées sur la base de l’augmentation du loyer. Cela est peut-être dû à des dépenses que vous ne connaissez pas mais qui peuvent justifier une augmentation plus significative de loyer (ex : assurance, entretien). Idéalement, le propriétaire devrait vous fournir le détail de ces dépenses supplémentaires afin que vous puissiez les saisir dans",
            disclaimerLink:
              "https://extranet.tal.gouv.qc.ca/internet/asp/Outildecalcul/Calcul.asp",
            disclaimerLinkTitle:
              "l'outil de calcul de l'augmentation de loyer plus détaillé développé par TAL.",
            line1: "Vous avez le droit de refuser une augmentation de loyer.",
            line2:
              "Tribunal administratif du logement offre un formulaire intitulé",
            link1:
              "https://www.tal.gouv.qc.ca/sites/default/files/notices/TAL_810_E.pdf",
            linkTitle1:
              "Réponse du locataire à l’avis d’augmentation de loyer et de modification d’une autre condition du bail",
            line3:
              ", que vous pourrez imprimer et livrer à votre propriétaire par courrier recommandé. Souvenez-vous :",
            line4:
              "vous devez répondre dans le mois suivant la réception de l'avis d'augmentation.",
            line5: "Si vous avez besoin d'aide,",
            line5a: "contactez votre comité du logement local",
            line5b: ". Cliquez",
            link2: "https://rclalq.qc.ca/comites-logement/",
            linkTitle2: "ici",
            line6: "pour trouver celui qui est le plus proche de chez vous.",
            line7:
              "Cet outil s'appuie sur la fiche d'estimation 2025 réalisée par",
            line8:
              "Vous pouvez télécharger cette fiche d'estimation sous forme du fichier ",
            line9: "ou",
            line10: ".",
          },
          intro: {
            line1:
              "Cet outil s'adresse à vous si vous habitez Montréal, louez un appartement et avez reçu un avis d'augmentation de loyer de votre propriétaire.",
            line2:
              "Vous pouvez vérifier si l'augmentation proposée par le propriétaire est conforme aux",
            link: "https://www.tal.gouv.qc.ca/fr/actualites/detail?code=le-calcul-de-l-ajustement-des-loyers-en-2025",
            linkTitle:
              "directives du Tribunal administratif du logement (TAL) pour 2025",
            line3:
              "qui définissent ce qui constitue une augmentation de loyer juste et raisonnable.",
            line4:
              "Cet outil est plus facile à utiliser que celui préparé par TAL, parce qu'il est fait en pensant aux locataires : il demande uniquement les informations auxquelles vouz avez l'accès comme locataire.",
          },
          header: {
            dwelling: "Informations sur votre logement",
            footer: "Et maintenant ?",
            municipalTax: "Taxes municipales pour le bâtiment",
            rentIncreaseEstimate:
              "Estimation d'une augmentation juste et raisonnable de votre loyer",
            rentIncreaseEstimateExplanation:
              "Comment on a calculé cette estimation ?",
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
              'Pour connaître la modification de la taxe municipale pour votre immeuble, rendez-vous sur le site du <a target="_blank" rel="noopener noreferrer" href="https://montreal.ca/role-evaluation-fonciere">Rôle d\'évaluation foncière</a> de Montréal. Choisissez “Par adresse” et ensuite “Suivant.”',
              "Entrez votre adresse sur la page suivante. Cliquez “Rechercher.”",
              "Cliquez sur la flèche verte à droite de l'adresse qui correspond à la vôtre dans la liste.",
              "Allez  au bas de la page et cliquez sur “Compte de taxes” pour 2025 et 2024. Ces documents s'ouvriront en format PDF.",
              "Copiez le chiffre intitulé “total du compte”, en bas à droite du tableau de la première page. Une fois que vous l'avez trouvé dans les deux PDF, cliquez sur “Fermez” et entrez ces chiffres dans les champs de l'outil.<br/><br/>Entrez les chiffres pour l'ensemble du bâtiment, n'essayez pas de calculer la partie uniquement pour votre logement (l'outil le fera automatiquement).",
            ],
          },
          modalTaxScolaire: {
            button: "Comment trouver ces montants ?",
            modalTexts: [
              'Pour connaître la modification de la taxe scolaire de l\'immeuble, rendez-vous sur le site du <a target="_blank" rel="noopener noreferrer" href="https://tfp.cgtsim.qc.ca/asp/TFP.aspx?jlsid=1&jlrun=tfpint.general.Accueil&site=int">Comité de gestion de la taxe scolaire</a>. Cliquez sur “Consulter les données”.',
              "Entrez votre adresse sur la page suivante.",
              "Cliquez sur l'icone de facture.",
              "Copiez les deux premiers chiffres de la colonne “Montant”, signifiant les montants des taxes scolaires pour les années 2024-2025 et 2023-2024. Ensuite cliquez sur “Fermez” et entrez ces chiffres dans les champs de l'outil. <br/><br/>Entrez les chiffres pour l'ensemble du bâtiment, n'essayez pas de calculer la partie uniquement pour votre logement (l'outil le fera automatiquement).",
            ],
          },
          municipalTaxTwoYearsAgo: {
            label: "Taxe municipale pour l’année 2024",
          },
          municipalTaxLastYear: {
            label: "Taxe municipale pour l’année 2025",
          },
          rent: {
            label: "Quel est votre loyer mensuel actuel ?",
            info: "Indiquez le montant de votre loyer mensuel (avant l'augmentation proposée par le propriétaire).",
          },
          rentEstimateExplanation: {},

          required: "Champ obligatoire",
          schoolTaxTwoYearsAgo: {
            label: "Taxe scolaire pour l’année 2023-2024",
          },
          schoolTaxLastYear: {
            label: "Taxe scolaire pour l’année 2024-2025",
          },
          title: "OUTIL D'ESTIMATION DE HAUSSE DE LOYER",
        },
      },
    },
  });

export default i18n;
