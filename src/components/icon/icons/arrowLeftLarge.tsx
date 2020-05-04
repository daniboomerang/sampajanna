import React, { FC } from 'react';
import { withIcon } from '../withIcon';
import { Icon } from '../../../types';

const ArrowLeftLarge: FC<Icon> = ({ color, height = 32, width = 32 }) => (
  <svg width={width} height={height} version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path
      fill={color}
      fillRule="nonzero"
      d="M32 15H3.83L17.415 1.415 16 0 0 16l16 16 1.415-1.415L3.83 17H32z"
      stroke="none"
      strokeWidth="1"
    />
  </svg>
);

export default withIcon('arrowLeftLarge', ArrowLeftLarge);
