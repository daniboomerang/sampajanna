import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import useDarkMode from 'use-dark-mode';
import Container from '../components/container';
import Footer from '../components/footer';
import '../styles/index.css';

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query Query {
      datoCmsSite {
        globalSeo {
          siteName
        }
      }
      datoCmsFooter {
        copyright
      }
    }
  `);
  const darkMode = useDarkMode(true);
  const { value: isDarkMode, toggle: toggleTheme } = darkMode;

  const { datoCmsSite, datoCmsFooter: { copyright } } = data;
  const {
    globalSeo: { siteName },
  } = datoCmsSite;

  return (
    <div
      className="grid bg-bg text-primary font-body text-2xl color-bg-transition min-h-full"
      style={{ gridTemplateRows: 'auto min-content' }}
    >
      <main className="py-4">
        <Container>
          <div className="flex justify-center items-center">
            <h1>Ouch!!</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </Container>
      </main>
      <Footer
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        copyright={copyright}
        siteName={siteName}
      />
    </div>
  );
};

export default NotFoundPage;
