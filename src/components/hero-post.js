import React, { useState } from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';
import Date from './date';
import CoverImage from './cover-image';
import Tags from './tags';

const HeroPost = ({
  slug,
  title,
  excerpt,
  coverImage,
  date,
  tags,
}) => {
  const [isHovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={cn('rounded-md rounded-light position-relative', { 'shadow-accent-xl': isHovered })}>
        <div className={cn('duration-200 transform', { 'scale-102': isHovered })}>
          <CoverImage
            title={title}
            coverImage={coverImage}
            slug={slug}
            size="xl"
          />
        </div>
        <div className={cn('relative mb-48 duration-200 transform', { 'scale-105': isHovered })}>
          <div className={cn('absolute border border-light text-center w-11/12 p-4 rounded m-auto -top-20 left-0 right-0 bg-accent-light text-secondary', { 'shadow-accent-md': isHovered })}>
            <div className="text-4xl lg:text-5xl leading-tight mb-4 ">
              <Link to={`/posts/${slug}`} className={cn('transition-colors duration-200 text-secondary', { 'text-accent': isHovered })}>{title}</Link>
            </div>
            <div className="mb-4 md:mb-2 text-base">
              <Tags tags={tags} />
              <Date dateString={date} />
            </div>
            <p className="text-lg leading-relaxed mb-4">
              {excerpt}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
