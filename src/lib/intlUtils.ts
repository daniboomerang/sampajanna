const getIntlUrl = (to: string, locale: string): string => {
  if (locale === 'en') {
    return to;
  }
  return `/${locale}${to}`;
};

const getToggleIntlUrl = (pathname: string, locale: string): string => {
  if (locale === 'en') {
    return `/es/${pathname}`;
  }
  return pathname.substring(3);
};

export { getIntlUrl, getToggleIntlUrl };
