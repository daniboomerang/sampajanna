import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';
import { Colors, TextColors } from '../types';

const {
  theme: { textColor, colors },
} = resolveConfig(tailwindConfig);

const getTextColors = (): TextColors => textColor;
const getThemeColors = (): Colors => colors;

export { getTextColors, getThemeColors };
