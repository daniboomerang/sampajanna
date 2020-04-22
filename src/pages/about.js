import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Layout from '../components/layout';
import Container from '../components/container';
import Header from '../components/header';
import PostBar from '../components/post-bar';
import PostBody from '../components/post-body';

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      datoCmsAboutPage(locale: {eq: "en"}) {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        title
        subtitle
        contentNode {
          childMarkdownRemark {
            html
          }
        }
        coverImage {
          url
        }
      }
    }
  `);

  const { datoCmsAboutPage } = data;
  const {
    seoMetaTags,
    title,
    contentNode,
    coverImage,
  } = datoCmsAboutPage;

  return (
    <Layout>
      <HelmetDatoCms seo={seoMetaTags} />
      <Header image={coverImage} />
      <article>
        <PostBar postTitle={title} />
        <Container>
          <PostBody contentNode={contentNode} />
        </Container>
      </article>
    </Layout>
  );
};

export default About;
