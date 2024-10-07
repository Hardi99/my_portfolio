import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaAngular, SiTypescript, SiTailwindcss, SiMongodb 
} from 'react-icons'; // Import d'icônes supplémentaires

const SkillsSection = styled.section`
  padding: 8rem 2rem;
  background-color: ${props => props.theme.bgSecondary};

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background-color: ${props => props.theme.bg};
  border-radius: 10px;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
  padding: 2rem;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const SkillTitle = styled.h3`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  font-weight: bold;
`;

const SkillDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
`;

const Skills = () => {
  const skills = [
    { id: 1, title: 'React', icon: <FaReact />, description: 'Développement d\'interfaces utilisateur interactives avec React.js.' },
    { id: 2, title: 'Node.js', icon: <FaNodeJs />, description: 'Création d\'API backend robustes et performantes.' },
    { id: 3, title: 'HTML5', icon: <FaHtml5 />, description: 'Structuration de contenu web avec HTML5.' },
    { id: 4, title: 'CSS3', icon: <FaCss3Alt />, description: 'Stylisation avancée des sites web avec CSS3.' },
    { id: 5, title: 'JavaScript', icon: <FaJsSquare />, description: 'Programmation JavaScript pour des sites web interactifs.' },
    { id: 6, title: 'Git', icon: <FaGitAlt />, description: 'Gestion de version et collaboration avec Git.' },
    { id: 7, title: 'TypeScript', icon: <SiTypescript />, description: 'Typage statique et sécurité avec TypeScript.' },
    { id: 8, title: 'Angular', icon: <FaAngular />, description: 'Framework performant pour la construction d\'applications avec Angular.' },
    { id: 9, title: 'Tailwind CSS', icon: <SiTailwindcss />, description: 'Framework CSS utilitaire pour une conception rapide et personnalisée.' },
    { id: 10, title: 'MongoDB', icon: <SiMongodb />, description: 'Base de données NoSQL flexible avec MongoDB.' },
  ];

  return (
    <SkillsSection>
      <Title>Mes Compétences</Title>
      <Grid>
        {skills.map(skill => (
          <SkillCard 
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <IconWrapper>{skill.icon}</IconWrapper>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillDescription>{skill.description}</SkillDescription>
          </SkillCard>
        ))}
      </Grid>
    </SkillsSection>
  );
};

export default Skills;