import React, { FC } from 'react';
import { Link as LinkGatsby } from 'gatsby';
import { useIntl } from 'react-intl';
import { getIntlUrl } from '../lib/intlUtils';

type Props = {
  to: string;
  className?: string;
  type?: string;
};

const Link: FC<Props> = ({ to, className = '', children, ...rest }) => {
  const { locale } = useIntl();

  return (
    <LinkGatsby to={getIntlUrl(to, locale)} className={className} {...rest}>
      {children}
    </LinkGatsby>
  );
};

export default Link;
