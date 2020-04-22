const registry = {};

const withIcon = (key, Component) => {
  // eslint-disable-next-line no-prototype-builtins
  if (registry.hasOwnProperty(key)) {
    throw new Error('An icon has already been registered with this key - try a different one');
  }

  registry[key] = Component;
};

export { withIcon };

export default registry;
