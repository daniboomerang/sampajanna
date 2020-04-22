import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../components/header';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Layout from '../components/layout';
import SectionSeparator from '../components/section-separator';

const Index = () => {
  const { allDatoCmsPost: { nodes: posts }, datoCmsHome: { coverImage: homeCoverImage } } = useStaticQuery(graphql`
    query IndexQuery {
      datoCmsHome {
        coverImage {
          url
        }
      }
      allDatoCmsPost(sort: { fields: [position], order: ASC }, filter: {locale: {eq: "en"}}) {
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
          date,
          tags {
            name
          }
        }
      }
    }
  `);

  const heroPost = posts[0];
  const morePosts = posts.slice(1);
  const {
    title, coverImage, date, slug, excerpt, tags, author,
  } = heroPost;

  return (
    <Layout>
      <Header image={homeCoverImage} />
      <Container>
        {heroPost && (
          <HeroPost
            title={title}
            coverImage={coverImage}
            date={date}
            author={author}
            slug={slug}
            excerpt={excerpt}
            tags={tags}
          />
        )}
        <SectionSeparator />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
};

export default Index;
