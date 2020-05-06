import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Link from './link';
import Container from './container';

type Props = {
  copyright: string;
  siteName: string;
};

const Footer: FC<Props> = ({ copyright, siteName }) => (
  <footer className="bg-secondary py-3 border-t border-light">
    <Container>
      <div className="text-base sm:text-lg py-28 block sm:flex items-center justify-between">
        <div className="flex items-center justify-between">
          <Link to="/" className="mr-2 sm:mr-4 hover:text-accent-soft">
            {siteName}
          </Link>
          <Link
            to="/about"
            className="ml-2 sm:ml-4 hover:text-accent-soft duration-200 transition-colors"
          >
            <FormattedMessage id="about" />
          </Link>
        </div>
        <div className="grid grid-rows-2 items-center justify-center">
          <a
            href="https://github.com/daniboomerang/sampajanna"
            target="_blank_"
            style={{ justifySelf: 'center' }}
          >
            <img width={24} height={24} src="/images/octocat.png" />
          </a>
          <div className="leading-none text-center text-sm text-accent-soft">{copyright}</div>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
