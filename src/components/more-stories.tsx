import React, { FC } from 'react';
import PostPreview from './post-preview';
import { Post } from '../types';

type Props = {
  posts: Array<Post>;
};

const MoreStories: FC<Props> = ({ posts }) => (
  <div className="block my-0 mx-auto md:grid md:grid-cols-2 md:col-gap-4 lg:col-gap-8 row-gap-16 md:row-gap-24 mb-32">
    {posts.map((post) => {
      const { slug, title, coverImage, date, excerpt, tags } = post;

      return (
        <div key={slug} className="mb-64 sm:mb-48 md:mb-24">
          <PostPreview
            title={title}
            coverImage={coverImage}
            date={date}
            slug={slug}
            excerpt={excerpt}
            tags={tags}
            isHero={false}
          />
        </div>
      );
    })}
  </div>
);

export default MoreStories;
