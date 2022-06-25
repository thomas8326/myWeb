import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

const i18Init = i18next.use(I18NextHttpBackend).use(LanguageDetector).use(initReactI18next).init({
    // resources: resources,
    backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
    react: {
        // Turn off the use of React Suspense
        useSuspense: false
    },
    debug: true,
    fallbackLng: "en",
    lng: localStorage.getItem('language') || 'en',
    interpolation: {
        // 是否要讓字詞 escaped 來防止 xss 攻擊，這裡因為 React.js 已經做了，就設成 false即可
        escapeValue: false,
    },

})

export default i18Init;
