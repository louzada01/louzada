import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  width: 90%;
  height: 55px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #3eb43e;
  border-radius: 10px;
  color: #3eb43e;
  background-color: #0a0705;
  margin: 5px 0;
  text-decoration: none;

  font-size: 22px;

  transition: background-color 0.2s ease-in;

  :hover {
    color: #0a0705;
    background-color: #3eb43e;
  }

  p {
    font-weight: 700;
    line-height: 22px;
    flex: 1;
  }

  svg {
    margin: 0 30px;
    padding: 0;
  }
`;
