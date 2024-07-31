import React from 'react';
import styled, { keyframes } from 'styled-components';
import useIntersectionObserver from '../hooks/IntersectionObserver';

import ProjectSlider2 from '../components/ProjectsSlider';

const Projects = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <StyledProjects id="projects">
     
      {/* Additional project content can be added here */}
      <ProjectSlider2/>
  
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


`;

export default Projects;
