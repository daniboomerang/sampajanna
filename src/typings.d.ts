declare module '*.module.css' {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export = classNames;
}

declare module 'gatsby-source-datocms';
declare module 'tailwindcss/resolveConfig';
declare module 'classnames';
