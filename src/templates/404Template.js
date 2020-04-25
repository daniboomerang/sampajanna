import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '../components/container';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <div className="text-center">
        <div className="text-4xl"><FormattedMessage id="notFoundPage.head" /></div>
        <p><FormattedMessage id="notFoundPage.description" /></p>
      </div>
    </Container>
  </Layout>
);

export default NotFoundPage;
