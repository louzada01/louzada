import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '@/components/Layout';

import { Container, Picture } from './404.styles';

const NotFound: React.FC<{}> = () => {
  const { searchImage } = useStaticQuery(
    graphql`
      query {
        searchImage: file(relativePath: { eq: "search_avatar.png" }) {
          childImageSharp {
            fluid {
              originalImg
            }
          }
        }
      }
    `,
  );

  return (
    <Layout>
      <Container>
        <Picture>
          <img
            src={searchImage.childImageSharp.fluid.originalImg}
            alt="Avatar com lupa"
          />
        </Picture>
        <h1>404</h1>
        <p>Desculpe, não foi possivél encontrar seu rumo!</p>
        <Link to="/">Voltar</Link>
      </Container>
    </Layout>
  );
};

export default NotFound;
