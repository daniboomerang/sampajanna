import React from 'react';
import { withIcon } from '../withIcon';

const EsFlag = ({ height, width }) => (
  <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      fill="#FFDA44"
      d="M0,256c0,31.314,5.633,61.31,15.923,89.043L256,367.304l240.077-22.261
      C506.367,317.31,512,287.314,512,256s-5.633-61.31-15.923-89.043L256,144.696L15.923,166.957C5.633,194.69,0,224.686,0,256z"
    />
    <g>
      <path fill="#D80027" d="M496.077,166.957C459.906,69.473,366.071,0,256,0S52.094,69.473,15.923,166.957H496.077z" />
      <path fill="#D80027" d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957H15.923z" />
    </g>
  </svg>
);

EsFlag.defaultProps = {
  height: 28,
  width: 28,
};

export default withIcon('esFlag', EsFlag);
