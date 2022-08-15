import i18n, { BackendModule, ReadCallback } from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./en.json";
import translationVI from "./vi.json";

const resourcesToBackend: BackendModule = {
  type: "backend",
  init: () => true,
  read: function read(
    language: string,
    namespace: string,
    callback: ReadCallback
  ) {
    import(`./${language}.json`)
      .then((v: { default: Record<string, string> }) => {
        callback(null, v.default);
      })
      .catch(() => {
        callback(null, null);
      });
  }
};
// the translations
const resources = {
  en: {
    translation: translationEN
  },
  vi: {
    translation: translationVI
  }
};

i18n
  .use(resourcesToBackend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

// use when file not Component
export function translate(text: string, options = {}) {
  return i18n.t(text, options);
}
