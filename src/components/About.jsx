import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 8rem 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Content = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${props => props.theme.textSecondary};
  max-width: 800px;
  margin: 0 auto;
`;

const About = () => {
  return (
    <AboutSection>
      <Title>À propos de moi</Title>
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Passionné de développement web, je crée des applications web performantes et esthétiques. 
        Mon objectif est de fournir des expériences utilisateur exceptionnelles grâce à un code propre et optimisé.
      </Content>
    </AboutSection>
  );
};

export default About;