import React, { createContext, ComponentType, FC } from 'react';
import { IntlProvider } from 'react-intl';
import enMessages from '../locales/en';
import esMessages from '../locales/es';
import { Location } from '../types';

export const ElementContext = createContext({ location: { pathname: '' } });

type ContextProps = {
  location: Location;
};

const ContextProvider: FC<ContextProps> = ({ children, location }) => (
  <ElementContext.Provider value={{ location }}>{children}</ElementContext.Provider>
);

type PageElementProps = {
  element: ComponentType;
  props: {
    pageContext: { locale: string };
    location: Location;
  };
};

const PageElementContext: FC<PageElementProps> = ({
  element,
  props: {
    pageContext: { locale },
    location,
  },
}) => (
  <ContextProvider location={location}>
    <IntlProvider locale={locale} messages={locale === 'es' ? esMessages : enMessages}>
      {element}
    </IntlProvider>
  </ContextProvider>
);

export default PageElementContext;
