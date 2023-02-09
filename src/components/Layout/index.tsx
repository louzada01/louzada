import React from 'react';

import { GlobalStyle } from '@/styles/global';

import { Container, Content, PubliBar } from './styles';

interface LayoutInterface {
  children: React.FC | any;
}

const Layout: React.FC<LayoutInterface> = ({ children }) => (
  <Container>
    <GlobalStyle />
    <PubliBar href="https://heartdevs.com/" target="_blank">
      Conheça a He4rt Developers
    </PubliBar>
    <Content>{children}</Content>
    <footer>
      <span>©João Victor Louzada. all rights reserved</span>
    </footer>
  </Container>
);

export default Layout;
