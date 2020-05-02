import React from 'react';
import { Link as LinkGatsby } from 'gatsby';
import { useIntl } from 'react-intl';
import { getIntlUrl } from '../lib/intlUtils';

const Link = ({ to, className, children }) => {
  const { locale } = useIntl();

  return (
    <LinkGatsby to={getIntlUrl(to, locale)} className={className}>
      {children}
    </LinkGatsby>
  );
};

export default Link;
