import React from 'react';
import { withIcon } from '../withIcon';

const EsFlag = ({
  color, strokeColor, height, width,
}) => (
  <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      strokeWidth="20px"
      stroke={strokeColor || '#000'}
      fill={color || '#FFDA44'}
      d="m 0,256 c 0,31.314 5.633,61.31 15.923,89.043 162.49024,0.86879 318.30056,1.32731 480.154,0 C 506.367,317.31 512,287.314 512,256 c 0,-31.314 -5.633,-61.31 -15.923,-89.043 -161.0502,-0.86879 -318.30056,0.11274 -480.154,0 C 5.633,194.69 0,224.686 0,256 Z"
    />
    <g>
      <path strokeWidth="20px" stroke={strokeColor || '#000'} fill={color || '#D80027'} d="M496.077,166.957C459.906,69.473,366.071,0,256,0S52.094,69.473,15.923,166.957H496.077z" />
      <path strokeWidth="20px" stroke={strokeColor || '#000'} fill={color || '#D80027'} d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957H15.923z" />
    </g>
  </svg>
);

EsFlag.defaultProps = {
  height: 28,
  width: 28,
};

export default withIcon('esFlag', EsFlag);
