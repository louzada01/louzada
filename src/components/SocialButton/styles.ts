import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 72px;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #fafafa;
  border-radius: 10px;
  color: #fafafa;
  background-color: #141414;
  text-decoration: none;

  font-size: 22px;

  transition: background-color 0.2s ease-in;

  :hover {
    color: #141414;
    background-color: #fafafa;
  }
  svg {
    padding: 0;
  }
  span {
    font-size: 8px;
  }
`;
