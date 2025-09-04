// lib/i18n.ts - SOLO para cliente
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Solo inicializar en el cliente
if (typeof window !== "undefined") {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      debug: process.env.NODE_ENV === "development",
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: "/locales/{{lng}}/translation.json",
      },
    });
}

export default i18n;