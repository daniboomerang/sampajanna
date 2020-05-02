import React from 'react';
import Date from './date';
import CoverImage from './cover-image';
import Tags from './tags';

const PostHeader = ({ title, slug, coverImage, date, tags }) => (
  <>
    <div className="mb-4 md:mb-8 max-w-3xl mx-auto">
      <CoverImage title={title} coverImage={coverImage} size="xl" slug={slug} />
    </div>
    <div className="max-w-2xl mx-auto">
      <div className="block text-center sm:flex justify-between items-center mb-6 text-lg">
        <Tags tags={tags} />
        <Date dateString={date} />
      </div>
    </div>
  </>
);

export default PostHeader;
