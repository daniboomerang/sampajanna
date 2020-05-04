import React, { FC } from 'react';

const SectionSeparator: FC = () => (
  <div className="h-24 mb-8 flex justify-center sm:h-40 md:h-40">
    <div
      className="bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: 'url(/images/separator.png)', width: '100%' }}
    />
  </div>
);

export default SectionSeparator;
