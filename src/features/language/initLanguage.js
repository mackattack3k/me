import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import english from '../translation/english';
import swedish from '../translation/swedish';

export const AVAILABLE_LANGUAGES = {
  ENGLISH: 'en',
  SWEDISH: 'sv'
};

export const setupLanguage = () =>
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources: {
        [AVAILABLE_LANGUAGES.ENGLISH]: {
          translation: english
        },
        [AVAILABLE_LANGUAGES.SWEDISH]: {
          translation: swedish
        }
      },
      fallbackLng: AVAILABLE_LANGUAGES.ENGLISH,
      interpolation: {
        escapeValue: false
      }
    });
