import React from 'react';

import Layout from '@/components/Layout';
import Welcome from '@/components/Welcome';

import { Container } from './styles';

const Home: React.FC<{}> = () => (
  <Layout>
    <Container>
      <Welcome />
    </Container>
  </Layout>
);

export default Home;
