import React from 'react';

const Tags = ({ tags }) => (
  <div>
    {tags.map((tag) => (
      <div className="inline-block ml-1 mr-1 my-1 first:ml-0 last:mr-0 bg-accent-soft text-solid rounded px-1" key={tag.name}>
        {tag.name}
      </div>
    ))}
  </div>
);

export default Tags;
