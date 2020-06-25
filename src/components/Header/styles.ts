import styled from 'styled-components';
import { Link } from 'gatsby';

export const Conatainer = styled.header`
  width: 100%;
  height: 20vh;
  max-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2a292d;

  p {
    margin-left: 10px;
    font-size: 22px;
    font-weight: 700;
    color: #3eb43e;
  }
`;

export const Logo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;
