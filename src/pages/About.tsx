import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  font-weight: 500;
`;

const Section = styled.section`
  margin-bottom: 6rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 500;
`;

const Bio = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #666666;
  margin-bottom: 3rem;
  max-width: 600px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const SkillCard = styled(motion.div)`
  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 0.75rem;
  color: #666666;
  font-size: 1rem;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ExperienceItem = styled(motion.div)`
  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
`;

const ExperienceCompany = styled.p`
  color: #666666;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const ExperienceDate = styled.p`
  color: #999999;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ExperienceDescription = styled.p`
  color: #666666;
  line-height: 1.6;
  font-size: 1rem;
  max-width: 600px;
`;

const About = () => {
  const skills = {
    'Frontend Development': ['React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
    'Backend Development': ['Node.js', 'Python', 'Java', 'SQL'],
    'Tools & Technologies': ['Git', 'Docker', 'AWS', 'GraphQL'],
    'Soft Skills': ['Team Leadership', 'Problem Solving', 'Communication', 'Agile'],
  };

  const experience = [
    {
      title: 'Software Engineer',
      company: 'Meta',
      date: '2021 - Present',
      description: 'Leading development of innovative solutions, focusing on user experience and performance optimization. Working with cutting-edge technologies and collaborating with cross-functional teams.',
    },
  ];

  return (
    <AboutContainer>
      <PageTitle>About</PageTitle>

      <Section>
        <SectionTitle>Background</SectionTitle>
        <Bio>
          I am a software engineer with a strong background in building exceptional digital experiences.
          Currently working at Meta, I focus on creating innovative solutions that make a difference in people's lives.
          My journey in software development has been driven by a constant desire to learn and improve, always staying
          up-to-date with the latest technologies and best practices.
        </Bio>
      </Section>

      <Section>
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid>
          {Object.entries(skills).map(([category, items]) => (
            <SkillCard
              key={category}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3>{category}</h3>
              <SkillList>
                {items.map((skill, index) => (
                  <SkillItem key={index}>{skill}</SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Section>

      <Section>
        <SectionTitle>Experience</SectionTitle>
        <ExperienceList>
          {experience.map((exp, index) => (
            <ExperienceItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{exp.title}</h3>
              <ExperienceCompany>{exp.company}</ExperienceCompany>
              <ExperienceDate>{exp.date}</ExperienceDate>
              <ExperienceDescription>{exp.description}</ExperienceDescription>
            </ExperienceItem>
          ))}
        </ExperienceList>
      </Section>
    </AboutContainer>
  );
};

export default About; 