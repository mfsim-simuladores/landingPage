import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpApi) // Carrega traduções via http (da pasta public/locales)
  .use(LanguageDetector) // Detecta o idioma do usuário
  .use(initReactI18next) // Passa a instância do i18n para o react-i18next
  .init({
    supportedLngs: ['pt', 'en'],
    fallbackLng: 'pt', // Idioma padrão caso a detecção falhe
    debug: false, // Mude para true para ver logs no console
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false, // Necessário para evitar que a página quebre antes de carregar as traduções
    },
  });

export default i18n;
