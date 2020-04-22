import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import useDarkMode from 'use-dark-mode';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Footer from './footer';
import '../styles/index.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }
      datoCmsFooter {
        copyright
      }
    }
  `);
  const darkMode = useDarkMode(true);
  const { value: isDarkMode, toggle: toggleTheme } = darkMode;

  const { datoCmsSite, datoCmsHome, datoCmsFooter: { copyright } } = data;
  const { faviconMetaTags, globalSeo: { siteName } } = datoCmsSite;
  const {
    seoMetaTags,
  } = datoCmsHome;

  return (
    <div className="bg-bg text-primary font-body text-2xl color-bg-transition ">
      <HelmetDatoCms
        favicon={faviconMetaTags}
        seo={seoMetaTags}
      />
      <div className="min-h-full">
        <main className="py-4">
          {children}
        </main>
        <Footer
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
          copyright={copyright}
          siteName={siteName}
        />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
