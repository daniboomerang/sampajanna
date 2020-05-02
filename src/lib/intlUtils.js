const getIntlUrl = (to, locale) => {
  if (locale === 'en') {
    return to;
  }
  return `/${locale}${to}`;
};

const getToggleIntlUrl = (pathname, locale) => {
  if (locale === 'en') {
    return `/es/${pathname}`;
  }
  return pathname.substring(3);
};

export { getIntlUrl, getToggleIntlUrl };
