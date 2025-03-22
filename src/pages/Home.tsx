import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const HeroSection = styled.section`
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #666666;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const ValueSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f8f8;
`;

const ValueContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ValueTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const ValueText = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #666666;
`;

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection>
        <Title>{t('home.title')}</Title>
        <Subtitle>{t('home.subtitle')}</Subtitle>
        <ButtonContainer>
          <Button as={Link} to="/work">
            {t('home.viewExperience')}
          </Button>
          <Button as={Link} to="/contact" variant="outline">
            {t('home.getInTouch')}
          </Button>
        </ButtonContainer>
      </HeroSection>
      <ValueSection>
        <ValueContainer>
          <ValueTitle>{t('home.approach.title')}</ValueTitle>
          <ValueText>{t('home.approach.description')}</ValueText>
        </ValueContainer>
      </ValueSection>
    </>
  );
};

export default Home; 