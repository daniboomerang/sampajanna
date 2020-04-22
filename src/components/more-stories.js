import React from 'react';
import PostPreview from './post-preview';

const MoreStories = ({ posts }) => (
  <section>
    <div className="block w-11/12 my-0 mx-auto md:grid md:grid-cols-2 md:col-gap-4 lg:col-gap-8 row-gap-16 md:row-gap-24 mb-32">
      {posts.map((post) => {
        const {
          slug,
          title,
          coverImage,
          date,
          author,
          excerpt,
          tags,
        } = post;

        return (
          <div key={slug} className="mb-24 md:mb-0">
            <PostPreview
              title={title}
              coverImage={coverImage}
              date={date}
              author={author}
              slug={slug}
              excerpt={excerpt}
              tags={tags}
            />
          </div>
        );
      })}
    </div>
  </section>
);

export default MoreStories;
