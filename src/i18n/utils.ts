import { en } from './en';
import { es } from './es';
import type { Translations } from './en';

export const languages = { en, es } as const;
export type Lang = keyof typeof languages;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return 'en';
}

export function useTranslations(lang: Lang): Translations {
  return languages[lang];
}

export function getLocalePath(lang: Lang, path = ''): string {
  if (lang === 'en') return `/${path}`;
  return `/${lang}/${path}`;
}
