import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Header from '../components/header';
import Footer from './footer';
import { Image } from '../types';
import '../styles/index.css';

type Props = {
  image?: Image;
};

const Layout: FC<Props> = ({ image, children }) => {
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

  const {
    datoCmsSite,
    datoCmsHome,
    datoCmsFooter: { copyright },
  } = data;
  const {
    faviconMetaTags,
    globalSeo: { siteName },
  } = datoCmsSite;
  const { seoMetaTags } = datoCmsHome;

  return (
    <>
      {image && (
        <div
          className="absolute bg-contain bg-no-repeat bg-left-top w-full h-full"
          style={{ backgroundImage: `url(${image.url})` }}
        />
      )}
      <div className="text-primary font-body text-2xl color-bg-transition relative">
        <HelmetDatoCms favicon={faviconMetaTags} seo={seoMetaTags} />
        <Header />
        <main className="py-4">{children}</main>
        <Footer copyright={copyright} siteName={siteName} />
      </div>
    </>
  );
};

export default Layout;
