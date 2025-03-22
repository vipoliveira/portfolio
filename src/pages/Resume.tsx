import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const ResumeContainer = styled.div`
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 3rem;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const ExperienceCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ExperienceInfo = styled.div`
  flex: 1;
`;

const CompanyLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-left: 2rem;
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  ${ExperienceCard}:hover & {
    filter: grayscale(0%);
  }
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Role = styled.p`
  color: #666666;
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  color: #666666;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #666666;
  margin-bottom: 1rem;
  line-height: 1.6;
  max-width: 600px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background-color: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #666666;
`;

const SkillsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SkillCard = styled.div`
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SkillTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const SkillDescription = styled.p`
  color: #666666;
  line-height: 1.6;
`;

const Resume = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const categories = [
    'All',
    'Cloud',
    'Data Engineering',
    'Infrastructure',
    'Machine Learning',
    'BI',
    'ETL',
    'CI/CD'
  ];

  const experiences = [
    {
      id: 1,
      company: 'PayPal',
      role: 'Data Engineer',
      period: 'April 2024 - Present',
      description: 'Implementing a Python framework to be used by multiple data pipeline integrations across the company and helping the business to send critical data to external auditors.',
      tech: ['PYTHON', 'DATA PIPELINES', 'DATA QUALITY', 'AUDIT', 'CLOUD'],
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/PayPal_Logo2014.png',
    },
    {
      id: 2,
      company: 'Ebury',
      role: 'Data Engineer',
      period: 'April 2023 - April 2024',
      description: 'Built a new data platform using Airflow, dbt, Google Cloud Storage, Amazon S3, Cloud Functions, Kafka, and BigQuery. Responsible for supporting and maintaining existing infrastructure on GCP, including critical services and pipelines.',
      tech: ['AIRFLOW', 'DBT', 'GCP', 'AWS', 'KAFKA', 'BIGQUERY', 'KUBERNETES', 'JENKINS', 'GRAFANA', 'KIBANA'],
      logo: 'https://cu-2.com/wp-content/uploads/2022/09/ebury-fintech-logo.png',
    },
    {
      id: 3,
      company: 'XP Inc',
      role: 'Data Engineer',
      period: 'April 2020 - January 2023',
      description: 'Implemented data mesh architecture and built a data streaming platform to enable faster pipeline development. Created a product forked from Amundsen data catalog for data governance and table access management.',
      tech: ['AZURE', 'DATA MESH', 'STREAMING', 'DATA CATALOG', 'KUBERNETES', 'CI/CD'],
      logo: 'https://logospng.org/download/xp-investimentos/logo-xp-investimentos-icon-4096.png',
    },
    {
      id: 4,
      company: 'Scientificloud',
      role: 'Data Engineer',
      period: 'April 2019 - April 2020',
      description: 'Designed and implemented solutions for stakeholders, providing data platforms and deploying machine learning models using Google Cloud Platform and open source tools.',
      tech: ['GCP', 'MACHINE LEARNING', 'DATA PLATFORMS', 'OPEN SOURCE'],
      logo: 'https://s-c.ai/img/scientific_logao_redux.png',
    },
    {
      id: 5,
      company: 'Engineering do Brasil',
      role: 'Data and Operation Analyst',
      period: 'February 2017 - April 2019',
      description: 'Built a BI solution using Google Cloud Platform to implement automations and visualizations. Created ETLs for multiple data sources and supported infrastructure/operations.',
      tech: ['GCP', 'BI', 'ETL', 'INFRASTRUCTURE', 'OPERATIONS', 'LOGGING'],
      logo: 'https://www.engdb.com.br/wp-content/themes/theme_engineering/img/eng-new-logo-2024.svg',
    }
  ];

  const filteredExperiences = activeFilter === 'All' || !activeFilter
    ? experiences
    : experiences.filter(experience => 
        experience.tech.some(tech => 
          categories.includes(tech) && tech === activeFilter
        )
      );

  return (
    <ResumeContainer>
      <PageTitle>{t('resume.title')}</PageTitle>
      
      <Section>
        <SectionTitle>Experience</SectionTitle>
        <ExperienceGrid>
          {filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id}>
              <ExperienceInfo>
                <CompanyName>{experience.company}</CompanyName>
                <Role>{experience.role}</Role>
                <Period>{experience.period}</Period>
                <Description>{experience.description}</Description>
                <TechStack>
                  {experience.tech.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ExperienceInfo>
              <CompanyLogo src={experience.logo} alt={`${experience.company} logo`} />
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </Section>

      <SkillsSection>
        <SkillCard>
          <SkillTitle>Technical Skills</SkillTitle>
          <SkillDescription>
            Data Engineering, Cloud Platforms (GCP, AWS, Azure), Data Pipelines, ETL, 
            Data Quality, Data Governance, Machine Learning, BI, Infrastructure, 
            CI/CD, Kubernetes, Monitoring, Logging
          </SkillDescription>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Tools & Technologies</SkillTitle>
          <SkillDescription>
            Python, Airflow, dbt, BigQuery, Kafka, Jenkins, Grafana, Kibana, 
            Git, Docker, Terraform, SQL, NoSQL, Data Mesh, Data Catalog
          </SkillDescription>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Soft Skills</SkillTitle>
          <SkillDescription>
            Problem Solving, Team Leadership, Project Management, Stakeholder Management, 
            Technical Documentation, Agile Methodologies, Cross-functional Collaboration
          </SkillDescription>
        </SkillCard>
      </SkillsSection>
    </ResumeContainer>
  );
};

export default Resume;