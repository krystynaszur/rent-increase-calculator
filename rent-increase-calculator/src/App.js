import './App.css';
import { useTranslation } from 'react-i18next';

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
    <div className="App">
      <div class="languageSwitcher">  {lngs.map((lng) => {
        const { code, native } = lng;
        return <button onClick={() => handleTrans(code)}>{native}</button>;
      })}
</div>
      <header className="App-header">
    
      <h1>{t('title')}</h1>

      
      </header>
    </div>
  );
}

