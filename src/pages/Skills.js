import React from 'react';
import styled, { keyframes } from 'styled-components';
import Gallery from '../components/Gallery';
import useIntersectionObserver from '../hooks/IntersectionObserver';

const Skills = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <StyledSkills id="skills">
      <div className="container">
        <FadeInSection ref={ref} isIntersecting={isIntersecting}>
          <h2>Skills</h2>
        </FadeInSection>
        <Gallery />
      </div>
    </StyledSkills>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInSection = styled.div`
  opacity: ${({ isIntersecting }) => (isIntersecting ? 1 : 0)};
  animation: ${({ isIntersecting }) => isIntersecting && fadeIn} 1s forwards;
`;

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-top: 100px; /* Add padding to account for the fixed navbar */
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;

  .container {
    max-width: 600px;
    width: 100%;
    text-align: center;

    h2 {
        font-size: 2rem;

      margin-bottom: 2rem;
    }
  }
`;

export default Skills;
