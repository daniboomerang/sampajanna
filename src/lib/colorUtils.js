// eslint-disable-next-line import/no-extraneous-dependencies
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const { theme: { textColor } } = resolveConfig(tailwindConfig);

const getTextColors = () => textColor;

export { getTextColors };
