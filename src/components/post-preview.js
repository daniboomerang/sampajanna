import React, { useState } from 'react';
import cn from 'classnames';
import Link from './link';
import Date from './date';
import CoverImage from './cover-image';
import Tags from './tags';

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  tags,
}) => {
  const [isHovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={cn('max-w-screen-sm rounded-md rounded-light transition duration-200 ease-in-out transform hover:scale-102')}>
      <CoverImage
        slug={slug}
        title={title}
        coverImage={coverImage}
        className={cn({ 'shadow-xl': isHovered })}
      />
      <div className="relative">
        <div className={cn('-my-12 border border-light text-center w-11/12 p-2 rounded m-auto bg-accent-light', { 'shadow-xl': isHovered })}>
          <div className="hover:text-accent text-shadow-xl text-2xl lg:text-4xl leading-tight mb-2 md:mb-4">
            <Link to={`/posts/${slug}`} className={cn('transition-colors duration-200', { 'text-accent': isHovered })}>{title}</Link>
          </div>
          <div className="mb-2 md:mb-4 text-base">
            <Tags tags={tags} />
            <Date dateString={date} />
          </div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
