// lib/dictionary.ts
const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = (locale: 'en' | 'es') => dictionaries[locale]();
