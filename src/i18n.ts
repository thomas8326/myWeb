import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

i18next.use(LanguageDetector).use(I18NextHttpBackend).use(initReactI18next).init({
    backend: { loadPath: "/locales/{{lng}}/translation.json", },
    fallbackLng: "en",
    lng: "zh_tw",
    interpolation: {
        // 是否要讓字詞 escaped 來防止 xss 攻擊，這裡因為 React.js 已經做了，就設成 false即可
        escapeValue: false,
    },
});

export default i18next;
