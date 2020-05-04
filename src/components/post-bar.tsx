import React, { FC, RefObject, createRef, useEffect, useState } from 'react';
import cn from 'classnames';
import Link from './link';
import Icon from './icon';
import PostTitle from './post-title';
import { getTextColors } from '../lib/colorUtils';

type Props = {
  postTitle: string;
};

const PostBar: FC<Props> = ({ postTitle }) => {
  const ref: RefObject<HTMLInputElement> = createRef();
  const [isSticky, setIsSticky] = useState(false);

  // Mount
  useEffect(() => {
    /**
     * Use IntersectionObserver API to handle states when the bar is been sticky
     * */
    const cachedRef = ref.current;
    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(([e]) => setIsSticky(e.intersectionRatio < 1), {
      threshold: [1],
    });

    if (cachedRef) {
      observer.observe(cachedRef);
    }

    // Unmount;
    return () => {
      if (cachedRef) {
        observer.unobserve(cachedRef);
      }
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={cn('border-b border-light z-10 top-0 w-100 py-4 duration-200 transition-colors', {
        sticky: isSticky,
        'bg-almost-primary': isSticky,
        'shadow-md': isSticky,
        'text-accent': isSticky,
      })}
      style={{ top: '-1px' }}
    >
      <div className="max-w-screen-lg mx-auto px-8 md:px-16">
        <div className="relative flex justify-center items-center">
          <Link to="/" type="button" className="absolute left-0">
            <Icon
              iconName="home"
              color={getTextColors().primary}
              colorHover={getTextColors().accent}
              className="p-1"
            />
          </Link>
          <PostTitle>{postTitle}</PostTitle>
          <span />
        </div>
      </div>
    </div>
  );
};

export default PostBar;
