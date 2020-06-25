import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Conatainer, Logo } from './styles';

const Header: React.FC = () => {
  const {
    site: {
      siteMetadata: { author, siteURL },
    },
    avatarImage,
  } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar.png" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              originalImg
            }
          }
        }
        site {
          siteMetadata {
            author
            siteURL
          }
        }
      }
    `,
  );

  return (
    <Conatainer>
      <Logo to="/">
        <img
          src={`
            ${siteURL}${avatarImage.childImageSharp.fluid.originalImg}
            `}
          alt="Avatar Louzada"
        />
      </Logo>
      <p>{author}</p>
    </Conatainer>
  );
};

export default Header;
