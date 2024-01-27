import "./App.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { RentForm } from "./RentForm";

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
    <div className="app bg-emerald-50" key="app">
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
      <RentForm />
    </div>
  );
}
