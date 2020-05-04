import * as icons from '../components/icon/icons';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = (): void => {};

// This allows us to load the icons to the registry
export const iconsLoader = (): void => {
  icons;
};
