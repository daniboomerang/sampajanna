import React, { FC, useState } from 'react';
import registry from './withIcon';
import { getTextColors } from '../../lib/colorUtils';
import { Icon as IconType } from '../../types';
import { iconsLoader } from '../../lib/fnUtils';

// Getting theme text colors
const textColors = getTextColors();

// Loading all icons to the registry
iconsLoader();

type Props<T> = { iconName: string } & T;

const Icon: FC<Props<IconType>> = ({
  iconName,
  color = textColors.primary,
  colorHover = textColors.secondary,
  strokeColor = textColors.primary,
  strokeColorHover = textColors.secondary,
  className = '',
  width = 24,
  height = 24,
  styles,
}) => {
  const [isHovered, setHovered] = useState(false);
  const handleMouseEnter = (): void => setHovered(true);
  const handleMouseLeave = (): void => setHovered(false);

  if (registry.hasOwnProperty(iconName)) {
    const Component = registry[iconName];

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={className}
        style={styles}
      >
        <Component
          color={isHovered ? colorHover : color}
          strokeColor={isHovered ? strokeColorHover : strokeColor}
          width={width}
          height={height}
        />
      </div>
    );
  }

  return null;
};

export default Icon;
