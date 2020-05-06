import React, { FC, RefObject, createRef, useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode';
import { getTextColors } from '../lib/colorUtils';
import cn from 'classnames';
import Link from './link';
import Icon from './icon';
import PostTitle from './post-title';

type Props = {
  postTitle: string;
};

const PostBar: FC<Props> = ({ postTitle }) => {
  const ref: RefObject<HTMLInputElement> = createRef();
  const [isSticky, setIsSticky] = useState(false);
  const darkMode = useDarkMode(true);

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

  const { value: isDarkMode, toggle: toggleTheme } = darkMode;
  return (
    <div
      ref={ref}
      className={cn('z-10 top-0 w-100 py-4 duration-200 transition-colors', {
        sticky: isSticky,
        'bg-almost-primary': isSticky,
        'shadow-md': isSticky,
        'text-accent': isSticky,
      })}
      style={{ top: '-1px' }}
    >
      <div className="max-w-screen-lg mx-auto px-8 md:px-16">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className={cn('opacity-0 transition-opacity duration-200 ease-in-out', {
              'opacity-100': isSticky,
            })}
          >
            <Icon
              iconName="home"
              color={getTextColors().primary}
              colorHover={getTextColors().accent}
              className="p-1"
            />
          </Link>
          <PostTitle textSizeBig={!isSticky}>{postTitle}</PostTitle>
          <button
            type="button"
            onClick={toggleTheme}
            className={cn('opacity-0 transition-opacity duration-200 ease-in-out', {
              'opacity-100': isSticky,
            })}
          >
            <Icon
              iconName={isDarkMode ? 'sun' : 'moon'}
              color={getTextColors().primary}
              colorHover={getTextColors().accent}
              className="p-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostBar;
