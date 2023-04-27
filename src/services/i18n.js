import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "translate/en-US.json";
import uk from "translate/uk-UA.json";

const defaultLng = "en";

const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: uk,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: defaultLng,
    interpolation: {
      escapeValue: false,
    },

    // debug: true,
  });

export default i18n;
