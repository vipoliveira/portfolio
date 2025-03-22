import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa';
import myselfImage from '../assets/myself.jpeg';
import { useState } from 'react';

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
  font-family: 'Inter', sans-serif;
`;

const BackgroundImage = styled.div<{ isHovered: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${myselfImage});
  background-size: 120% auto;
  background-position: 100% center;
  background-repeat: no-repeat;
  filter: ${props => props.isHovered ? 'grayscale(0%)' : 'grayscale(100%)'};
  transition: filter 0.3s ease;
  z-index: 0;
  opacity: 0.85;
  transform: scaleX(-1);

  @media (max-width: 768px) {
    background-size: 150% auto;
    background-position: 15% center;
    opacity: 0.1;
  }
`;

const ContactSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
  padding-left: 4rem;
  min-height: 400px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-left: 0;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 500px;
  background-color: transparent;
  padding: 3rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  margin-left: -8rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: transparent;

  &:hover {
    background-color: transparent;
    border-color: transparent;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #000000;
  letter-spacing: -0.5px;
  text-align: center;
  font-family: 'Inter', sans-serif;
`;

const ContactDescription = styled.p`
  color: #000000;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  font-weight: 500;
  font-size: 1.1rem;
  text-align: center;
  max-width: 400px;
  font-family: 'Inter', sans-serif;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1rem;
  justify-content: center;
  width: 100%;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  color: #000000;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Contact = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <BackgroundImage isHovered={isHovered} />
      <ContactContainer>
        <PageTitle>{t('contact.title')}</PageTitle>
        <ContactSection>
          <ContactInfo 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
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