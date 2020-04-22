import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Container from '../components/container';
import PostBody from '../components/post-body';
import PostHeader from '../components/post-header';
import SectionSeparator from '../components/section-separator';
import MoreStories from '../components/more-stories';
import Header from '../components/header';
import PostBar from '../components/post-bar';

const Posts = ({
  data: {
    datoCmsPost: post,
    allDatoCmsPost: morePostNodes,
    datoCmsPostPage: { coverImage: postCoverImage },
  },
}) => {
  const {
    title,
    seoMetaTags,
    coverImage,
    date,
    author,
    contentNode,
    tags,
  } = post;
  const morePosts = morePostNodes.nodes;

  return (
    <Layout>
      <HelmetDatoCms seo={seoMetaTags} />
      <Header image={postCoverImage} />
      <article className="pt-4">
        <PostBar postTitle={title} />
        <Container>
          <div className="my-16">
            <PostHeader
              title={title}
              coverImage={coverImage}
              date={date}
              author={author}
              tags={tags}
            />
          </div>
          <PostBody contentNode={contentNode} />
        </Container>
      </article>
      <Container>
        <SectionSeparator />
        <div className="my-8 text-center text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter">
          More stories
        </div>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
};

export default Posts;

export const query = graphql`
  query PostQuery($slug: String!) {
    datoCmsPostPage {
      coverImage {
        url
      }
    }
    datoCmsPost(slug: {eq: $slug}, locale: {eq: "en"}) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      slug
      excerpt
      date
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      tags {
        name
      }
    }
    allDatoCmsPost(limit: 2, filter: {slug: {ne: $slug}, locale: {eq: "en"}}) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          url
          fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
          }
        }
        contentNode {
          childMarkdownRemark {
            html
          }
        }
        tags {
          name
        }
      }
    }
  }
`;
