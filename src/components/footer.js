import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Link as LinkGatsby } from 'gatsby';
import { getToggleIntlUrl } from '../lib/intlUtils';
import { getThemeColors } from '../lib/colorUtils';
import Link from './link';
import Container from './container';
import ToggleThemeButton from './toggle-theme-button';
import Icon from './icon';
import { ElementContext } from '../context/PageElementContext';

const Footer = ({ isDarkMode, onToggleTheme, copyright, siteName }) => {
  const { locale } = useIntl();
  const toggledIntlUrl = (currentPath) => getToggleIntlUrl(currentPath, locale);

  return (
    <ElementContext.Consumer>
      {({ location }) => (
        <footer className="bg-secondary py-6 border-t border-light">
          <Container>
            <div className="py-28 grid grid-cols-1 row-gap-4 sm:grid-cols-2 sm:row-gap-1 items-center justify-between">
              <div className="flex justify-between sm:justify-start">
                <Link to="/" className="mr-4 hover:text-accent-soft">
                  {siteName}
                </Link>
                <Link
                  to="/about"
                  className="ml-4 hover:text-accent-soft duration-200 transition-colors"
                >
                  <FormattedMessage id="about" />
                </Link>
              </div>
              <div className="flex items-center justify-between sm:justify-end">
                <div className="sm:mx-4">
                  <ToggleThemeButton onToggle={onToggleTheme} isDarkMode={isDarkMode} />
                </div>
                <LinkGatsby to={toggledIntlUrl(location.pathname)} className="flex items-center">
                  <Icon
                    icon={locale === 'en' ? 'esFlag' : 'enFlag'}
                    className="cursor-pointer rounded-full border hover:border-black"
                    color={getThemeColors().trns}
                    strokeColor={isDarkMode ? getThemeColors().bianca : getThemeColors().black}
                    strokeColorHover={isDarkMode ? getThemeColors().black : getThemeColors().black}
                  />
                  <span className="uppercase text-base ml-1">{locale === 'en' ? 'es' : 'en'}</span>
                </LinkGatsby>
              </div>
            </div>
            <div className="leading-none text-center text-sm text-accent-soft mt-4">
              {copyright}
            </div>
          </Container>
        </footer>
      )}
    </ElementContext.Consumer>
  );
};

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  copyright: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
};

export default Footer;
