import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enFile from "./resources/en";
import deFile from "./resources/de";

export const languages = [
  "en",
  "de",
];

const resources = {
  en: enFile,
  de: deFile,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "de", 

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;