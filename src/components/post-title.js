import React from 'react';

const PostTitle = ({ children }) => (
  <div className="flex align-center justify-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
    {children}
  </div>
);

export default PostTitle;
