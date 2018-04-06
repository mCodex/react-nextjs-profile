import { I18n, Translate, Localize } from 'react-i18nify';
import locales from './locales';

export const setLocale = (locale) => { I18n.setLocale(locale); };
export const availableLocales = Object.keys(locales);
export const availableCountries = availableLocales
  .map(locale => ({
    locale,
    code: locales[locale].countryCode
  }));
export const initI18n = (locale) => {
  I18n.setTranslations(locales);
  I18n.setLocale(locale);
};

export {
  Translate,
  Localize,
};

export default I18n;
