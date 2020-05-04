import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '../components/container';
import Layout from '../components/layout';

const NotFoundPage: FC = () => (
  <Layout>
    <Container>
      <div className="text-center">
        <div className="text-4xl">
          <FormattedMessage id="notFoundPage.head" />
        </div>
        <p>
          <FormattedMessage id="notFoundPage.description" />
        </p>
      </div>
    </Container>
  </Layout>
);

export default NotFoundPage;
