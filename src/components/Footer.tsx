import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000;
  padding: 2rem 0;
  z-index: 100;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
`;

const LogoCarousel = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const LogoTrack = styled.div<{ translateX: number }>`
  display: flex;
  width: max-content;
  transform: translateX(${props => props.translateX}px);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 30.5%, rgb(0, 0, 0) 69.5%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 30.5%, rgb(0, 0, 0) 69.5%, rgba(0, 0, 0, 0) 100%);
`;

const LogoContainer = styled.div`
  width: 160px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  opacity: 0.7;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(1.05) translateY(-2px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #ffffff;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 80%;
  }
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%) brightness(200%);
  transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Footer = () => {
  const clients = [
    { name: 'PayPal', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/PayPal_Logo2014.png' },
    { name: 'Ebury', logo: 'https://cu-2.com/wp-content/uploads/2022/09/ebury-fintech-logo.png' },
    { name: 'ScientifCloud', logo: 'https://s-c.ai/img/scientific_logao_redux.png'},
    { name: 'XPInc', logo: 'https://upload.wikimedia.org/wikipedia/pt/0/0b/XP_Investimentos_logo.png' },
    { name: 'AtSaude', logo: 'https://atsaude.com.br/wp-content/themes/atsaude/assets/images/logoats.png' },
    { name: 'Engineering do Brasil', logo: 'src/assets/engdb-logo.svg' },
    { name: 'TIM', logo: 'https://logopng.com.br/logos/tim-25.png' },
    { name: 'AkzoNobel', logo: 'https://plan.org.br/wp-content/uploads/2018/09/akzonobel.png' },
    { name: 'Amaro', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Amaro_logo.png' },
    { name: 'Banco BV', logo: 'https://blu365.com.br/blog/wp-content/uploads/sites/4/2020/07/Logo_sem_banco_Digital-1.png' },
    { name: 'UOL', logo: 'src/assets/logo-uol.avif' }
  ];

  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let currentTranslateX = 0;

    const animate = () => {
      if (!isHovered && !isPaused) {
        currentTranslateX -= 0.5;
        if (currentTranslateX <= -160 * clients.length) {
          currentTranslateX = 0;
        }
        setTranslateX(currentTranslateX);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, isPaused, clients.length]);

  const handleLogoClick = (clientName: string) => {
    console.log(`Clicked on ${clientName}`);
    // Add your click handler logic here
  };

  return (
    <FooterContainer>
      <LogoCarousel
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <LogoTrack translateX={translateX}>
          {[...clients, ...clients].map((client, index) => (
            <LogoContainer 
              key={index}
              onClick={() => handleLogoClick(client.name)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <Logo src={client.logo} alt={client.name} />
            </LogoContainer>
          ))}
        </LogoTrack>
      </LogoCarousel>
    </FooterContainer>
  );
};

export default Footer; 