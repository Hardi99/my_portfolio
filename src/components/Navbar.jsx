import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.text};
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
  text-decoration: none;
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: ${props => props.theme.text};
    margin: 5px 0;
    transition: transform 0.3s ease;
  }
`;

const NavMenu = styled(motion.ul)`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: ${props => props.theme.bg};
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    padding: 1rem 0;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &.active {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (min-width: 769px) {
    opacity: 1 !important; /* Toujours visible sur les grands écrans */
    transform: none !important;
    position: relative; /* Réinitialiser pour grands écrans */
  }
`;

const NavItem = styled.li`
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem 1rem;
    text-align: center;
  }

  a {
    color: ${props => props.theme.text};
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: ${props => props.theme.primary};
    }
  }
`;

const Navbar = ({ onMenuToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    onMenuToggle(!isOpen); // Envoie l'état du menu
  };

  // Gérer la taille de l'écran et ajuster l'état mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false); // Fermer le menu si on revient sur une grande taille
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Mon Portfolio</Logo>
        {isMobile && (
          <Hamburger onClick={toggleMenu}>
            <div />
            <div />
            <div />
          </Hamburger>
        )}
        <NavMenu
          className={isMobile && isOpen ? 'active' : ''}
          animate={isMobile && isOpen ? { opacity: 1 } : { opacity: 0 }}
        >
          <NavItem>
            <Link to="/about">À propos</Link>
          </NavItem>
          <NavItem>
            <Link to="/skills">Compétences</Link>
          </NavItem>
          <NavItem>
            <Link to="/projects">Projets</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;