import React from 'react';
import { parseISO, format } from 'date-fns';

const Date = ({ dateString }) => {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString} className="leading-none text-sm text-accent">
      {format(date, 'LLLL d, yyyy')}
    </time>
  );
};

export default Date;
