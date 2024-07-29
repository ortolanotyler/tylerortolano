import React from 'react';
import styled, { keyframes } from 'styled-components';
import useIntersectionObserver from '../hooks/IntersectionObserver';

const Projects = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <StyledProjects id="projects">
      <FadeInSection ref={ref} isIntersecting={isIntersecting}>
        <h2>My Projects</h2>
      </FadeInSection>
      {/* Additional project content can be added here */}
    </StyledProjects>
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

const StyledProjects = styled.section`
  padding: 3rem;
  padding-top: 100px; /* Add padding to account for the fixed navbar */
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;

  h2 {
    font-size: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
`;

export default Projects;
