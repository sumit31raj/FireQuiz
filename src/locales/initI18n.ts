import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import { locales } from './';

I18n.fallbacks = 'en';
I18n.translations = locales;

const setLocales = () => {
  const locale = RNLocalize.getLocales()?.[0];
  if (locale) {
    const languageTag = `${locale.languageCode}-${locale.countryCode}`;
    if (locales[languageTag]) {
      I18n.locale = locale.languageCode;
    } else {
      I18n.locale = locale.languageTag;
    }
  }
};

RNLocalize.addEventListener('change', setLocales);
setLocales();
