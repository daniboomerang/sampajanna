import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Layout from '../components/layout';
import Container from '../components/container';
import PostBar from '../components/post-bar';
import PostBody from '../components/post-body';
import { ContentNode, Image, SeoMetaTags } from '../types';

type Props = {
  data: {
    about: {
      seoMetaTags: SeoMetaTags;
      title: string;
      contentNode: ContentNode;
      coverImage: Image;
    };
  };
};

const About: FC<Props> = ({ data }) => {
  const { about } = data;
  const { seoMetaTags, title, contentNode, coverImage } = about;

  return (
    <Layout image={coverImage}>
      <HelmetDatoCms seo={seoMetaTags} />
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
