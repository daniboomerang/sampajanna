import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const {
  theme: { textColor, colors },
} = resolveConfig(tailwindConfig);

const getTextColors = () => textColor;
const getThemeColors = () => colors;

export { getTextColors, getThemeColors };
