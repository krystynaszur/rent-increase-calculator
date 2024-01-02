import "./App.css";
import { useTranslation } from "react-i18next";

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
    <div className="app">
      <div className="lang-switcher">
        
        {lngs.map((lng) => {
          const { code, native } = lng;
          return (
            <button
              className="lang-button"
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
      <header>
        <h1 className="title">{t("title")}</h1>
      </header>
    </div>
  );
}
