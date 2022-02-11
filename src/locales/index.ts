import en from './en.json';

const locales: Record<string, any> = {};

[en].forEach(locale => {
  const key = Object.keys(locale)[0] as keyof typeof en;
  locales[key] = locale[key];
});

export { locales };
