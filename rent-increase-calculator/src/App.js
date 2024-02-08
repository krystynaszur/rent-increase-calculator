import "./App.css";
import { useTranslation } from "react-i18next";
import { RentForm } from "./RentForm";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const lngs = [
  { code: "en", native: "English" },
  { code: "fr", native: "Français" },
];

export default function App() {
  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className="app bg-emerald-50 px-4 sm:px-10" key="app">
      <div key="lang-switcher" className="lang-switcher">
        {lngs.map((lng) => {
          const { code, native } = lng;
          return (
            <button
              key={native}
              className="text-lg font-semibold leading-6 text-gray-900"
              style={{
                fontWeight: i18n.resolvedLanguage === code ? "bold" : "normal",
              }}
              onClick={() => handleTrans(code)}
            >
              {native}
            </button>
          );
        })}
      </div>
      <header key="header">
        <h1 className="title text-4xl text-center font-extrabold">
          {t("title")}
        </h1>
      </header>
      <div className="max-w-2xl mt-6 text-lg ">
        {t("intro.line1")} <br /> <br />
        {t("intro.line2")}{" "}
        <a target="_blank" href={t("intro.link")}>
          {t("intro.linkTitle")}
        </a>
        &nbsp;{t("intro.line3")} <br /> <br />
        {t("intro.line4")}
        <hr className="mt-6 bg-emerald-900" />
      </div>

      <RentForm />
      <div className="max-w-2xl text-lg extra-text ">
        <h2 className="text-3xl font-bold mb-5 text-left text-emerald-900 w-full">
          {t("header.footer")}
        </h2>
        <div className="mb-4">
          <b>{t("footer.line1")}</b>&nbsp;{t("footer.line2")}&nbsp;
          <i>
            <a target="_blank" href={t("footer.link1")}>
              {t("footer.linkTitle1")}
            </a>
          </i>
          {t("footer.line3")}&nbsp;
          <b>{t("footer.line4")}</b>
        </div>
        <div className="mb-4">
          {t("footer.line5")}&nbsp;
          <a target="_blank" href={t("footer.link2")}>
            {t("footer.linkTitle2")}
          </a>{" "}
          {t("footer.line6")}
        </div>
        <div className="mb-24">
          {t("footer.line7")}&nbsp;
          <a target="_blank" href="https://clpmr.com/">
            Comité logement du Plateau Mont-Royal
          </a>
          .&nbsp;
          {t("footer.line8")}
          <a
            target="_blank"
            href="https://clpmr.com/wp-content/uploads/2024/01/Grille-calcul-hausse-CLPMR-2024.pdf"
          >
            PDF
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://clpmr.com/wp-content/uploads/2024/01/Outil-calcul-Hausse-de-loyers-janvier-2024-1.xlsx"
          >
            Excel
          </a>{" "}
          {t("footer.line9")}{" "}
          <a
            target="_blank"
            href="https://clpmr.com/wp-content/uploads/2024/01/Grille-calcul-hausse-CLPMR-2024.docx"
          >
            Word
          </a>
          &nbsp;{t("footer.line10")}
          <br />
        </div>
        <div className="mb-4 flex-column text-sm justify-center italic">
          <div className="w-full mb-4">  <hr className="mt-6 bg-emerald-900" /></div>
        
          <div className="flex justify-center mb-2">{t("author.line1")} Krystyna Szurmanska</div>
         
          <div className="flex justify-center gap-x-2 items-center	">  {t("author.line2")} <a target="_blank" href="https://github.com/krystynaszur/rent-increase-calculator"><FaGithub /></a></div>
         
          <div className="flex justify-center gap-x-2 items-center	">    {t("author.line3")}  <a target="_blank" href="https://www.linkedin.com/in/krystyna-szurmanska/"><FaLinkedin /></a></div>
        </div>
      </div>
    </div>
  );
}
