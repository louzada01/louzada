import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex: 1;
  width: min(601px, 100%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  color: #3eb43e;

  h1 {
    font-size: 42px;
    text-align: center;
    font-weight: 700;
  }

  h4,
  h6 {
    text-align: center;
    margin: 10px 0;
    font-weight: 700;
  }
`;
