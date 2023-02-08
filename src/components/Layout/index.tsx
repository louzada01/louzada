import React from 'react';

import { GlobalStyle } from '@/styles/global';

import { Container, Content } from './styles';

interface LayoutInterface {
  children: React.FC | any;
}

const Layout: React.FC<LayoutInterface> = ({ children }) => (
  <Container>
    <GlobalStyle />
    <Content>{children}</Content>
    <footer>
      <span>©João Victor Louzada. all rights reserved</span>
    </footer>
  </Container>
);

export default Layout;
