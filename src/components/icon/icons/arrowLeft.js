import React from 'react';
import { withIcon } from '../withIcon';

const ArrowLeft = ({ color, height, width }) => (
  <svg width={width} height={height} viewBox="0 0 14 12">
    <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M13.7002141,5.3 L8.70378301,0.3 C8.52391149,0.11 8.27408994,-5.68434189e-14 7.99428979,-5.68434189e-14 C7.44468237,-5.68434189e-14 6.99500357,0.45 6.99500357,1 C6.99500357,1.28 7.10492505,1.53 7.28479657,1.71 L10.5724483,5 L0.999286224,5 C0.449678801,5 0,5.45 0,6 C0,6.55 0.449678801,7 0.999286224,7 L10.5824411,7 L7.29478944,10.29 C7.11491792,10.47 7.00499643,10.72 7.00499643,11 C7.00499643,11.55 7.45467523,12 8.00428266,12 C8.2840828,12 8.53390435,11.89 8.71377587,11.71 L13.710207,6.71 C13.8900785,6.53 14,6.28 14,6 C14,5.72 13.8800857,5.48 13.7002141,5.3 L13.7002141,5.3 Z"
        id="1"
        fill={color}
        transform="translate(7.000000, 6.000000) rotate(-180.000000) translate(-7.000000, -6.000000) "
      />
    </g>
  </svg>
);

ArrowLeft.defaultProps = {
  height: 16,
  width: 16,
};

export default withIcon('arrowLeft', ArrowLeft);
