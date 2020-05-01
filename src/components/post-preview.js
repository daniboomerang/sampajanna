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
  isHero,
}) => {
  const [isHovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={cn('rounded-md rounded-light position-relative')}>
        <div className={cn('duration-200 transform', { 'scale-102 shadow-md': isHovered })}>
          <CoverImage
            title={title}
            coverImage={coverImage}
            slug={slug}
            size={isHero ? 'md' : 'default'}
            className="border border-light"
          />
        </div>
        <div className={cn('relative mb-20 duration-200 transform', { 'scale-110': isHovered })}>
          <div className={cn('absolute border border-light text-center p-4 rounded m-auto -top-16 left-0 right-0 bg-accent-light duration-200 w-full sm:w-11.6/12 transform', { 'shadow-md border': isHovered })}>
            <div className={cn('mb-1 leading-tight', isHero ? 'text-4xl lg:text-5xl' : 'hover:text-accent text-2xl lg:text-4xl')}>
              <Link to={`/posts/${slug}`} className={cn('transition-colors duration-200', { 'text-accent': isHovered })}>{title}</Link>
            </div>
            <div className="mb-2 md:mb-3 text-base">
              <div className="mb-3 md:mb-1">
                <Date dateString={date} />
              </div>
              <Tags tags={tags} />
            </div>
            <p className="text-lg leading-relaxed mb-4 break-words">
              {excerpt}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostPreview;
