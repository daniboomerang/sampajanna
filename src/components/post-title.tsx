import React, { FC } from 'react';

const PostTitle: FC = ({ children }) => (
  <div className="flex align-center justify-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
    {children}
  </div>
);

export default PostTitle;
