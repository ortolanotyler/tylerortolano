import React from 'react';
import styled from 'styled-components';

const ProjectCard = ({ title, description, link }) => (
  <StyledCard>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
  </StyledCard>
);

const StyledCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: bold;
  }
`;

export default ProjectCard;
