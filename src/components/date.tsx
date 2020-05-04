import React, { FC } from 'react';
import { parseISO, format } from 'date-fns';

type Props = {
  dateString: string;
};

const Date: FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString} className="leading-none text-sm text-accent">
      {format(date, 'LLLL d, yyyy')}
    </time>
  );
};

export default Date;
