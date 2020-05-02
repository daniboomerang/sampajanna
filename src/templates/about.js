import React from 'react';
import { graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Layout from '../components/layout';
import Container from '../components/container';
import Header from '../components/header';
import PostBar from '../components/post-bar';
import PostBody from '../components/post-body';

const About = ({ data }) => {
  const { about } = data;
  const { seoMetaTags, title, contentNode, coverImage } = about;

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

export const query = graphql`
  query AboutQuery($locale: String!) {
    about: datoCmsAboutPage(locale: { eq: $locale }) {
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
`;
