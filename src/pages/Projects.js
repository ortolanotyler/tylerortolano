import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const Projects = () => (
  <StyledProjects id="projects">
    <h2>My Projects</h2>
    <div className="projects-grid">
      <ProjectCard title="Project 1" description="Description of project 1" link="#" />
      <ProjectCard title="Project 2" description="Description of project 2" link="#" />
      {/* Add more ProjectCards as needed */}
    </div>
  </StyledProjects>
);

const StyledProjects = styled.section`
  padding: 3rem;
  padding-top: 100px; /* Add padding to account for the fixed navbar */
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
`;

export default Projects;


