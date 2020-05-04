import { ComponentType } from 'react';
import { Icon } from '../../types';

type RegistryType = {
  [key: string]: ComponentType<Icon>;
};

const registry: RegistryType = {};

const withIcon = (key: string, Component: ComponentType): void => {
  if (registry.hasOwnProperty(key)) {
    throw new Error('An icon has already been registered with this key - try a different one');
  }

  registry[key] = Component;
};

export { withIcon };

export default registry;
