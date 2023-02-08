import React from 'react';

import Layout from '@/components/Layout';
import Welcome from '@/components/Welcome';
import SEO from '@/components/SEO';

const Home: React.FC<{}> = () => (
  <Layout>
    <SEO />
    <Welcome />
  </Layout>
);

export default Home;
