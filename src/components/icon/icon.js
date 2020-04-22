import React, { useState } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import icons from './icons';
import registry from './withIcon';
import { getTextColors } from '../../lib/colorUtils';


const Icon = ({
  icon, color, colorHover, className, ...rest
}) => {
  const [isHovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  // eslint-disable-next-line no-prototype-builtins
  if (registry.hasOwnProperty(icon)) {
    const Component = registry[icon];

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={className}
      >
        <Component
          color={isHovered ? colorHover : color}
          {...rest}
        />
      </div>
    );
  }

  return null;
};

Icon.defaultProps = {
  color: getTextColors.primary,
  colorHover: getTextColors.secondary,
  className: '',
  iconWidth: 24,
  iconHeight: 24,
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  colorHover: PropTypes.string,
  className: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
};

export default Icon;
