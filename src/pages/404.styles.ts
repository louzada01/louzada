import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #3eb43e;
  font-weight: 700;
  text-align: center;
  h1 {
    margin: 10px 0;
    width: 90%;
  }

  a {
    width: 90%;
    padding: 16px;
    margin: 20px 0;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #3eb43e;
    border: 2px solid #3eb43e;
    border-radius: 5px;
  }
`;

export const Picture = styled.picture`
  margin: 30px 0;
  img {
    max-width: 60%;
    border-radius: 50%;
    border: 5px solid #3eb43e;
  }
`;
