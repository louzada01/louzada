import React from 'react';
import {
  FiGithub,
  FiTwitter,
  FiGlobe,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiArrowRight,
} from 'react-icons/fi';
import { Container } from './styles';

interface SocialButtonInterface {
  text: string;
  linkTo: string;
}

const SocialButton: React.FC<SocialButtonInterface> = ({ linkTo, text }) => {
  const SwitchIcon = (key: string): any => {
    switch (key) {
      case `Linkedin`:
        return <FiLinkedin />;
      case `Instagram`:
        return <FiInstagram />;
      case `Email`:
        return <FiMail />;
      case `Twitter`:
        return <FiTwitter />;
      case `GitHub`:
        return <FiGithub />;
      default:
        return <FiGlobe />;
    }
  };

  return (
    <Container href={linkTo}>
      {SwitchIcon(text)}
      <p>{text}</p>
      <FiArrowRight />
    </Container>
  );
};

export default SocialButton;
