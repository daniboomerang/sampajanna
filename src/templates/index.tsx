import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import PostPreview from '../components/post-preview';
import Layout from '../components/layout';
import SectionSeparator from '../components/section-separator';
import { Image, Post } from '../types';

type Props = {
  data: {
    posts: {
      nodes: Array<Post>;
    };
    home: {
      coverImage: Image;
    };
  };
};

const Index: FC<Props> = ({ data }) => {
  const {
    posts: { nodes: posts },
    home: { coverImage: homeCoverImage },
  } = data;

  const heroPost = posts[0];
  const morePosts = posts.slice(1);
  const { title, coverImage, date, slug, excerpt, tags } = heroPost;

  return (
    <Layout image={homeCoverImage}>
      <Container>
        {heroPost && (
          <div className="mb-48">
            <PostPreview
              title={title}
              coverImage={coverImage}
              date={date}
              slug={slug}
              excerpt={excerpt}
              tags={tags}
              isHero
            />
          </div>
        )}
        <SectionSeparator />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query IndexQuery($locale: String!) {
    home: datoCmsHome(locale: { eq: $locale }) {
      coverImage {
        url
      }
    }
    posts: allDatoCmsPost(
      filter: { locale: { eq: $locale } }
      sort: { fields: [position], order: ASC }
    ) {
      nodes {
        id
        slug
        title
        excerpt
        coverImage {
          fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
          }
        }
        date
        tags {
          name
        }
      }
    }
  }
`;
