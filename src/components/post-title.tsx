import React, { FC } from 'react';
import cn from 'classnames';

const PostTitle: FC = ({ children }) => (
  <div
    className={cn(
      'flex align-center justify-center font-bold tracking-tighter text-center transition duration-100',
      'text-4xl md:text-5xl'
    )}
  >
    {children}
  </div>
);

export default PostTitle;
