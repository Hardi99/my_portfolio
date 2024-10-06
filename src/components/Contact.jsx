import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
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

const ContactInfo = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${props => props.theme.textSecondary};
  max-width: 800px;
  margin: 0 auto;
`;

const Contact = () => {
  return (
    <ContactSection>
      <Title>Contactez-moi</Title>
      <ContactInfo
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Intéressé par une collaboration ? Vous avez des questions ? N&apos;hésitez pas à me contacter : <br />
        <strong>Email:</strong> harditabuna@gmail.com <br />
        {/* Ajoutez d'autres liens si besoin (LinkedIn, Github...) */}
      </ContactInfo>
    </ContactSection>
  );
};

export default Contact;