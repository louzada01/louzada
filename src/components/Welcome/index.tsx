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
    <Container>
      <img
        className="welcome-avatar"
        src={welcomeImage.childImageSharp.fluid.originalImg}
        alt={`${author} Avatar`}
      />
      <section>
        <h1>João Victor Louzada</h1>
        <h2>- Louzin</h2>
        <div className="social-content">
          {contact.map((link) => (
            <SocialButton
              key={link.label}
              text={link.label}
              linkTo={link.linkTo}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Welcome;
