import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa';
import myselfImage from '../assets/myself.jpeg';

const ContactContainer = styled.div`
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  min-height: 80vh;
  overflow: hidden;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
`;

const ContactSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 500px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 2rem;
  border-radius: 8px;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #000000;
`;

const ContactDescription = styled.p`
  color: #333333;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f0f0f0;
  color: #666666;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #000000;
    color: #ffffff;
    transform: translateY(-2px);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${myselfImage});
  background-size: 120% auto;
  background-position: 0% center;
  background-repeat: no-repeat;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
  z-index: 0;
  opacity: 0.85;

  &:hover {
    filter: grayscale(0%);
  }

  @media (max-width: 768px) {
    background-size: 150% auto;
    background-position: 85% center;
    opacity: 0.75;
  }
`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <BackgroundImage />
      <ContactContainer>
        <PageTitle>{t('contact.title')}</PageTitle>
        <ContactSection>
          <ContactInfo>
            <div>
              <ContactTitle>{t('contact.getInTouch.title')}</ContactTitle>
              <ContactDescription>{t('contact.getInTouch.description')}</ContactDescription>
            </div>
            <SocialLinks>
              <SocialLink href="https://linkedin.com/in/vipoliveira" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="https://github.com/vipoliveira" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://twitter.com/vipoliveiraxyz" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </SocialLink>
              <SocialLink href="https://t.me/vipoliveira" target="_blank" rel="noopener noreferrer">
                <FaTelegram />
              </SocialLink>
              <SocialLink href="mailto:vinicius@vipoliveira.xyz">
                <FaEnvelope />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
        </ContactSection>
      </ContactContainer>
    </>
  );
};

export default Contact; 