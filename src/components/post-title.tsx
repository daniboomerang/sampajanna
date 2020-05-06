import React, { FC } from 'react';
import cn from 'classnames';

type Props = {
  textSizeBig?: boolean;
};

const PostTitle: FC<Props> = ({ textSizeBig = true, children }) => (
  <div
    className={cn(
      'flex align-center justify-center font-bold tracking-tighter text-center transition-all duration-200',
      textSizeBig ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'
    )}
  >
    {children}
  </div>
);

export default PostTitle;
