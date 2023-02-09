import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex: 1;
  height: 95vh;
  width: 100vw;
  align-items: center;
  color: #141414;

  .welcome-avatar {
    width: 320px;
  }

  h1 {
    font-size: clamp(2rem, 2.5vw, 4rem);
    font-weight: 700;
  }
  h2 {
    font-size: clamp(1rem, 2.5vw, 2rem);
    font-weight: 300;
  }

  h4,
  h6 {
    margin: 10px 0;
    font-weight: 700;
  }
  section {
    width: 100%;
  }
  .social-content {
    margin-top: 1rem;
    justify-content: space-around;
    display: grid;
    grid-template-columns: repeat(6, 72px);
    grid-auto-flow: column;
    grid-gap: 1rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 3rem;
    h1,
    h2 {
      text-align: center;
    }

    .social-content {
      grid-template-columns: repeat(3, 72px);
      grid-auto-flow: row;
    }
  }
`;
