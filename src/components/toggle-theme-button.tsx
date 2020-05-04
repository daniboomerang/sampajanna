import React, { FC } from 'react';
import cn from 'classnames';
import { noop } from '../lib/fnUtils';
import styles from './toggle-theme-button.module.css';
import Icon from './icon';
import { getTextColors } from '../lib/colorUtils';

type Props = {
  onToggle: () => void;
  isDarkMode: boolean;
};

const ToggleThemeButton: FC<Props> = ({ onToggle, isDarkMode }) => (
  <div className={'flex items-center justify-end'}>
    <button
      type="button"
      onClick={!isDarkMode ? onToggle : noop}
      className={cn({ 'cursor-auto': isDarkMode })}
    >
      <Icon
        iconName="sun"
        color={isDarkMode ? getTextColors().accent : getTextColors().primary}
        colorHover={getTextColors().accent}
        className="p-1"
      />
    </button>
    <button
      type="button"
      className={cn(
        'mx-2 bg-accent-dark text-secondary relative block border box-border',
        styles.slideBtn
      )}
      onClick={onToggle}
    >
      <span
        className={cn(
          'absolute block color-bg-transition bg-accent-soft hover:bg-accent rounded-full border border-soft box-border',
          styles.slideBtnKnob,
          isDarkMode ? styles.slideBtnKnobDarkMode : styles.slideBtnKnobLightMode
        )}
      />
    </button>
    <button
      type="button"
      onClick={isDarkMode ? onToggle : noop}
      className={cn({ 'cursor-auto': !isDarkMode })}
    >
      <Icon
        iconName="moon"
        color={!isDarkMode ? getTextColors().accent : getTextColors().primary}
        colorHover={getTextColors().accent}
        className="p-1"
      />
    </button>
  </div>
);

export default ToggleThemeButton;
