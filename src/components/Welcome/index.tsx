import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SocialButton from '@/components/SocialButton';
import { Container } from './styles';

const Welcome: React.FC<{}> = () => {
  const {
    site: {
      siteMetadata: { author, contact },
    },
    welcomeImage,
  } = useStaticQuery(
    graphql`
      query {
        welcomeImage: file(relativePath: { eq: "welcome_avatar.png" }) {
          childImageSharp {
            fluid {
              originalImg
            }
          }
        }
        site {
          siteMetadata {
            author
            contact {
              label
              linkTo
            }
          }
        }
      }
    `,
  );
  return (
    <>
      <Container>
        <h1>ONDE ME ENCONTRAR</h1>
        <figure>
          <img
            src={welcomeImage.childImageSharp.fluid.originalImg}
            alt={`${author} Avatar`}
          />
        </figure>
        <h4>Links úteis</h4>
        {contact.map((link) => (
          <SocialButton
            key={link.label}
            text={link.label}
            linkTo={link.linkTo}
          />
        ))}
        <h6>By: {author}</h6>
      </Container>
    </>
  );
};

export default Welcome;
