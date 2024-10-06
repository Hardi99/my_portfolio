import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import backgroundImage from '../assets/background.jpg'

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(${backgroundImage}); // Remplacez par votre image
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 0 2rem;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: ${props => props.theme.primary};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 2rem;
  }
`;

const Button = styled(motion.button)`
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: ${props => props.theme.primary};
  }
`;

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.8, transition: { duration: 1 } },
  };

  return (
    <HeaderContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        style={{background:'black', padding:'20px'}}
      >
        <h1>Bienvenue sur mon Portfolio!</h1>
        <p>Je suis un développeur Front-End passionné.</p>
        <a href="/skills">
        <Button whileHover={{ scale: 1.1 }}>Voir mes projets</Button>          
        </a>
      </motion.div>
    </HeaderContainer>
  );
};

export default Header;