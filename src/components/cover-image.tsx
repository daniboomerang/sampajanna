import React, { FC } from 'react';
import cn from 'classnames';
import Img from 'gatsby-image';
import Link from './link';
import { Image, Size } from '../types';

type Props = {
  title: string;
  coverImage: Image;
  slug: string;
  className?: string;
  size?: Size;
};

const CoverImage: FC<Props> = ({ title, coverImage, slug, className = '', size = Size.md }) => {
  const image = (
    <Img
      fluid={coverImage.fluid}
      title={title}
      className={cn(
        'rounded-md overflow-hidden',
        className,
        { 'h-64': size === Size.md },
        { 'h-128': size === Size.lg }
      )}
    />
  );

  return (
    <div className={cn('sm:mx-0 text-0px')}>
      {slug ? <Link to={`/posts/${slug}`}>{image}</Link> : image}
    </div>
  );
};

export default CoverImage;
