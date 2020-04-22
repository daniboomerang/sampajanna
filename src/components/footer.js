import React from 'react';
import { Link } from 'gatsby';
import cn from 'classnames';
import { noop } from '../lib/fnUtils';
import Container from './container';
import ToggleThemeButton from './toggle-theme-button';
import Icon from './icon';

const Footer = ({
  isDarkMode, onToggleTheme, copyright, siteName,
}) => (
  <footer className="bg-secondary p-6">
    <Container>
      <div className="py-28 flex flex-col sm:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <Link to="/" className="mr-4 hover:text-accent-soft">{siteName}</Link>
          <Link to="/about" className="ml-4 hover:text-accent-soft duration-200 transition-colors">
            About
          </Link>
        </div>
        <div className="flex-1 mt-8 sm:mt-0 flex items-center justify-center md:justify-end">
          <div className="sm:mx-4">
            <ToggleThemeButton onToggle={onToggleTheme} isDarkMode={isDarkMode} />
          </div>
          <Icon
            onClick={noop}
            icon="enFlag"
            className={cn(
              'p-1 cursor-pointer',
            )}
          />
        </div>
      </div>
      <div className="leading-none text-sm text-accent-soft">
        {copyright}
      </div>
    </Container>
  </footer>
);

export default Footer;
