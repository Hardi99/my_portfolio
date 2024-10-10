import styled from 'styled-components';
import { motion } from 'framer-motion';

import pokemonImage from '../assets/pokemon.png'
import voyageImage from '../assets/voyage.png'
import natureImage from '../assets/nature.png'
import photoImage from '../assets/photo.png'
import numberImage from '../assets/number.png'
import geocodeImage from '../assets/actress.png'

const ProjectsSection = styled.section`
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const ProjectCard = styled(motion.a)`
  background-color: ${props => props.theme.bg};
  border-radius: 10px;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Content = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
`;

const Projects = () => {
  // Remplacez par vos projets
  const projects = [
    {
      id: 1,
      title: 'Projet 1',
      description: 'Description du projet 1...',
      image: pokemonImage,
      link: 'https://ornate-genie-d6b3bd.netlify.app'
    },
    {
      id: 2,
      title: 'Projet 2',
      description: 'Description du projet 2...',
      image: voyageImage,
      link: 'https://stately-shortbread-dcf83a.netlify.app'
    },
    {
      id: 3,
      title: 'Projet 3',
      description: 'Description du projet 3...',
      image: natureImage,
      link: 'https://boisterous-basbousa-114921.netlify.app'
    },
    {
      id: 4,
      title: 'Projet 4',
      description: 'Description du projet 4...',
      image: photoImage,
      link: 'https://gleaming-cat-83a51c.netlify.app/'
    },
    {
      id: 5,
      title: 'Projet 5',
      description: 'Description du projet 5...',
      image: numberImage,
      link: 'https://aesthetic-piroshki-888625.netlify.app'
    },
    {
      id: 6,
      title: 'Projet 6',
      description: 'Description du projet 6...',
      image: geocodeImage,
      link: 'https://starlit-blini-5a9d0b.netlify.app/'
    },
  ];

  return (
    <ProjectsSection>
      <Title>Mes Projets</Title>
      <Grid>
        {projects.map(project => (
          <ProjectCard key={project.id} target='blank' href={project.link} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}>
            <div style={{background:`url(${project.image}) center center/coVER no-repeat`, height:'246px'}}></div>
            <Content>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </Content>
          </ProjectCard>
        ))}
      </Grid>
    </ProjectsSection>
  );
};

export default Projects;