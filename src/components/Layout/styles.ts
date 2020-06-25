import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
  max-width: 960px;
  max-height: 80px;
`;

export const Content = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 960px;
  color: #fff;
`;
