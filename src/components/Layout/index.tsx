import React from 'react';

import { GlobalStyle } from '@/styles/global';
import Header from '@/components/Header/index';

import { Container, Content } from './styles';

interface LayoutInterface {
  children: React.FC | any;
}

const Layout: React.FC<LayoutInterface> = ({ children }) => (
  <Container>
    <GlobalStyle />
    <Header />
    <Content>{children}</Content>
  </Container>
);

export default Layout;
