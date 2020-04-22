import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const CoverImage = ({
  title, coverImage, slug, className, size,
}) => {
  const image = (
    <Img
      fluid={coverImage.fluid}
      title={title}
      className={cn(
        'rounded-md rounded-light border border-light overflow-hidden',
        className,
        size === 'default' ? 'h-64' : 'h-128',
      )}
    />
  );

  return (
    <div className={cn('sm:mx-0 text-0px')}>
      {slug ? (
        <Link to={`/posts/${slug}`}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

CoverImage.defaultProps = {
  className: '',
  size: 'default',
};

CoverImage.propTypes = {
  title: PropTypes.string.isRequired,
  coverImage: PropTypes.shape().isRequired,
  slug: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
};

export default CoverImage;
