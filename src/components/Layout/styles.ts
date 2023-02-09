import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  footer {
    span {
      font-weight: 400;
      font-size: 12px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 960px;
  color: #fff;
`;

export const PubliBar = styled.a`
  width: 100vw;
  position: absolute;
  padding: 1rem;
  background-color: #782bf1;
  text-align: center;
  color: #fff;
  font-weight: 700;
  :hover {
    cursor: pointer;
  }
`;
