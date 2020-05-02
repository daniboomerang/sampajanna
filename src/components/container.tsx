import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-screen-lg min-h-full mx-auto px-8 sm:px-16 md:px-8 lg:px-16">
      {children}
    </div>
  );
};

export default Container;
