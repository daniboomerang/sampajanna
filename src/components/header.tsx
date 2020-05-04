import React, { FC } from 'react';
import { Image } from '../types';

type Props = {
  image: Image;
};

const Header: FC<Props> = ({ image }) => (
  <div className="h-64 flex justify-center my-16">
    <div
      className="bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${image.url})`, width: '600px' }}
    />
  </div>
);

export default Header;
