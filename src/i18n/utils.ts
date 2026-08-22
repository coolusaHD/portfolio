import { ui, defaultLang, type Lang, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Path of the current page in the other language, preserving the hash-less path. */
export function getLocalizedPath(lang: Lang, path = '/'): string {
  const clean = path.replace(/^\/(de|en)(?=\/|$)/, '') || '/';
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}
