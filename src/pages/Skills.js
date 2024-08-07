import React from 'react';
import styled from 'styled-components';
import Gallery from '../components/Gallery';
import useIntersectionObserver from '../hooks/IntersectionObserver';

const Skills = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });

  return (
    <StyledSkills id="skills">
      <div className="container">
        <FadeInSection ref={ref} isIntersecting={isIntersecting}>
          <h2>Toolkit</h2>
        </FadeInSection>
        <Gallery />
      </div>
    </StyledSkills>
  );
};

const FadeInSection = styled.div`
  opacity: 1; /* Set opacity to 1 by default */
`;

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  padding-top: 10px; /* Add padding to account for the fixed navbar */
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;

  .container {
    max-width: 400px;
    width: 100%;
    text-align: center;

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

export default Skills;
