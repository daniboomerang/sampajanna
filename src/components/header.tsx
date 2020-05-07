import React, { FC } from 'react';
import useDarkMode from 'use-dark-mode';
import { useIntl } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import { Link as LinkGatsby } from 'gatsby';
import { getToggleIntlUrl } from '../lib/intlUtils';
import { getThemeColors } from '../lib/colorUtils';
import { ElementContext } from '../context/PageElementContext';
import Icon from './icon';

// Getting theme colors
const colors = getThemeColors();

const Header: FC = () => {
  const { locale } = useIntl();
  const darkMode = useDarkMode(true);
  const toggledIntlUrl = (currentPath: string): string => getToggleIntlUrl(currentPath, locale);
  const { value: isDarkMode } = darkMode;

  return (
    <ElementContext.Consumer>
      {({ location }) => (
        <div className="h-64">
          <div className="float-right mr-4 mt-1 sm:mr-8 sm:mt-4">
            <LinkGatsby
              to={toggledIntlUrl(location.pathname)}
              className="grid grid-rows-2 items-center"
            >
              <div className="text-base">
                <FormattedMessage id="readInLang" />
              </div>
              <Icon
                iconName={locale === 'en' ? 'esFlag' : 'enFlag'}
                className="cursor-pointer rounded-full border hover:border-black"
                styles={{ justifySelf: 'center' }}
                color={colors.trns}
                colorHover={'original'}
                strokeColor={isDarkMode ? colors.bianca : colors.black}
                strokeColorHover={isDarkMode ? colors.black : colors.black}
              />
            </LinkGatsby>
          </div>
        </div>
      )}
    </ElementContext.Consumer>
  );
};

export default Header;
