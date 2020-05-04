import React, { FC } from 'react';
import { Image } from '../types';

type Props = {
  name: string;
  picture: Image;
};

const Avatar: FC<Props> = ({ name, picture }) => (
  <div className="flex items-center">
    <img src={picture.url} className="w-12 h-12 rounded-full mr-4" alt={name} />
    <div className="text-xl font-bold">{name}</div>
  </div>
);

export default Avatar;
