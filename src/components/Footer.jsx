import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.bg};
  padding: 2rem 0;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.textSecondary};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        © {new Date().getFullYear()} Votre Nom. Tous droits réservés.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;