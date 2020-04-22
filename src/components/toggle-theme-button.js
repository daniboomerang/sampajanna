import React from 'react';
import cn from 'classnames';
import { noop } from '../lib/fnUtils';
import styles from './toggle-theme-button.module.css';
import Icon from './icon';
import { getTextColors } from '../lib/colorUtils';

const ToggleThemeButton = ({ classNames, onToggle, isDarkMode }) => (
  <div className={cn(classNames, 'flex items-center justify-end')}>
    <button
      type="button"
      onClick={!isDarkMode ? onToggle : noop}
      className={cn({ 'cursor-auto': isDarkMode })}
    >
      <Icon
        icon="sun"
        color={isDarkMode ? getTextColors().accent : getTextColors().secondary}
        colorHover={getTextColors().accent}
        className="p-1"
      />
    </button>
    <button
      type="button"
      className={cn('mx-2 bg-primary text-secondary relative block border box-border', styles.slideBtn, { [isDarkMode]: isDarkMode })}
      onClick={onToggle}
    >
      <span
        className={cn(
          'absolute block bg-accent-light rounded-full border box-border',
          styles.slideBtnKnob,
          isDarkMode ? styles.slideBtnKnobDarkMode : styles.slideBtnKnobLightMode,
        )}
      />
    </button>
    <button
      type="button"
      onClick={isDarkMode ? onToggle : noop}
      className={cn({ 'cursor-auto': !isDarkMode })}
    >
      <Icon
        icon="moon"
        color={!isDarkMode ? getTextColors().accent : getTextColors().secondary}
        colorHover={getTextColors().accent}
        className="p-1"
      />
    </button>
  </div>
);

export default ToggleThemeButton;
