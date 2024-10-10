import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projects } from './data';

const ProjectsSection = styled.section`
  padding: 8rem 2rem;
  background-color: ${props => props.theme.bgSecondary};
  position: relative; // Pour positionner les flèches

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 4rem;
  color: ${props => props.theme.text};
`;

const ProjectSlider = styled(Slider)`
  .slick-slide > div { 
    padding: 0 15px; // Espace entre les projets
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
  }

  .slick-arrow {
    z-index: 10; 
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    width: 25px;
    height: 25px;
    border-radius: 50%;

    &:hover {
      background-color: ${props => props.theme.primary}; 
    }
  }

  .slick-prev {
    left: -15px;
  }

  .slick-next {
    right: -15px; 
  }
`;

const Popup = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100; 

  .popup-content {
    background-color: ${props => props.theme.bg};
    padding: 3rem;
    border-radius: 10px;
    max-width: 800px; 
    width: 100%;
    position: relative; 

    img {
      width: 100%;
      object-fit: cover;
      margin-bottom: 2rem;
      border-radius: 5px;
    }

    .close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 2rem;
      cursor: pointer;
      color: ${props => props.theme.text}; 

      &:hover {
        color: ${props => props.theme.primary};
      }
    }

    h3 {
      color: ${props => props.theme.text};
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      color: ${props => props.theme.textSecondary};
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    a {
      display: inline-block;
      background-color: ${props => props.theme.primary};
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: 5px;
      text-decoration: none;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: darken(${props => props.theme.primary}, 10%);
      }
    }

    .desktop-only {
      display: block;
      color: #dc3545;
      font-weight: bold;

      @media (max-width: 768px) {
        display: none; 
      }
    }
  }
`;

const Projects3 = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <ProjectsSection>
      <Title>Mes Projets</Title>
      <ProjectSlider {...settings}>
        {projects.map(project => (
          <img key={project.id} src={project.image} alt={project.title} onClick={() => handleProjectClick(project)} />
        ))}
      </ProjectSlider>

{selectedProject && (
  <Popup 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div className="popup-content">
      <span className="close-button" onClick={closePopup}>×</span> 
      <img src={selectedProject.image} alt={selectedProject.title} />
      <h3>{selectedProject.title}</h3>
      <p>{selectedProject.description}</p>
      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">Voir le site</a>
      {selectedProject.desktopOnly && <p className="desktop-only">Desktop Only</p>}
    </motion.div>
  </Popup>
)}
    </ProjectsSection>
  );
};

export default Projects3;