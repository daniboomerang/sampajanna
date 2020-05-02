import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';
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
  const { title, slug, seoMetaTags, coverImage, date, contentNode, tags } = post;
  const morePosts = morePostNodes.nodes;

  return (
    <Layout>
      <HelmetDatoCms seo={seoMetaTags} />
      <Header image={postCoverImage} />
      <article className="pt-4">
        <PostBar postTitle={title} />
        <Container>
          <div className="my-16">
            <PostHeader title={title} slug={slug} coverImage={coverImage} date={date} tags={tags} />
          </div>
          <PostBody contentNode={contentNode} />
        </Container>
      </article>
      <Container>
        <SectionSeparator />
        <div className="my-8 text-center text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter">
          <FormattedMessage id="moreStories" />
        </div>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
};

export default Posts;

export const query = graphql`
  query PostQuery($slug: String!, $locale: String!) {
    datoCmsPostPage {
      coverImage {
        url
      }
    }
    datoCmsPost(slug: { eq: $slug }, locale: { eq: $locale }) {
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
    allDatoCmsPost(limit: 2, filter: { slug: { ne: $slug }, locale: { eq: $locale } }) {
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
