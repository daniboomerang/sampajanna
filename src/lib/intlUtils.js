const getIntlUrl = (to, locale) => {
  if (locale === 'en') {
    return to;
  }
  return `/${locale}${to}`;
};

const getToggleIntlUrl = (locale) => {
  // eslint-disable-next-line no-undef
  const { pathname } = window.location;

  if (locale === 'en') {
    return `/es/${pathname}`;
  }
  return pathname.substring(3);
};


export { getIntlUrl, getToggleIntlUrl };
