import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaGlobeAmericas,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaSpotify,
  FaHeart,
  FaCalendarCheck,
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
        return <FaLinkedin size={25} />;
      case `Instagram`:
        return <FaInstagram size={25} />;
      case `Email`:
        return <FaEnvelope size={25} />;
      case `Twitter`:
        return <FaTwitter size={25} />;
      case `GitHub`:
        return <FaGithub size={25} />;
      case `Spotify`:
        return <FaSpotify size={25} />;
      case `He4rt Developers`:
        return <FaHeart size={25} />;
      case `Reunião`:
        return <FaCalendarCheck size={25} />;
      default:
        return <FaGlobeAmericas size={25} />;
    }
  };

  return (
    <Container href={linkTo} target="_blank" rel="noopener noreferrer">
      {SwitchIcon(text)}
      <span>{text}</span>
    </Container>
  );
};

export default SocialButton;
