import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaGlobeAmericas,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
  FaSpotify,
  FaHeart
} from 'react-icons/fa';
import { Container } from './styles';

interface SocialButtonInterface {
  text: string;
  linkTo: string;
}

const SocialButton: React.FC<SocialButtonInterface> = ({ linkTo, text }) => {
  const SwitchIcon = (key: string): any => {
    switch (key) {
      case `Linkedin`:
        return <FaLinkedin />;
      case `Instagram`:
        return <FaInstagram />;
      case `Email`:
        return <FaEnvelope />;
      case `Twitter`:
        return <FaTwitter />;
      case `GitHub`:
        return <FaGithub />;
      case `Spotify`:
        return <FaSpotify />;
      case `He4rt Developers`:
        return <FaHeart />
      default:
        return <FaGlobeAmericas />;
    }
  };

  return (
    <Container href={linkTo} target="_blank" rel="noopener noreferrer">
      {SwitchIcon(text)}
      <p>{text}</p>
      <FaArrowRight />
    </Container>
  );
};

export default SocialButton;
