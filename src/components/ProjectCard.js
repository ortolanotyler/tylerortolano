// src/components/ProjectSlider.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import theme from '../styles/theme';

const projects = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
    image: `${process.env.PUBLIC_URL}/Images/jackiewyersbeauty.png`,
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: `${process.env.PUBLIC_URL}/Images/project2.png`,
  },
  // Add more projects as needed
];

const ProjectSlider = () => {
  return (
    <ThemeProvider theme={theme.muiTheme}>
      <SliderContainer>
        {projects.map((project, index) => (
          <StyledCard key={index}>
            <CardContent>
              <Title>{project.title}</Title>
              <Headshot src={project.image} alt={project.title} />
              <Description>{project.description}</Description>
              <StyledButton variant="contained" color="primary">
                Learn More
              </StyledButton>
            </CardContent>
          </StyledCard>
        ))}
      </SliderContainer>
    </ThemeProvider>
  );
};

const SliderContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
  gap: '20px',
  padding: '20px',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '600px',
  margin: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: 'none',
  border: 'none',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  marginBottom: '1rem',
  textAlign: 'center',
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  marginBottom: '1.5rem',
  textAlign: 'center',
}));

const Headshot = styled('img')(({ theme }) => ({
  width: '250px',
  height: '250px',
  borderRadius: '50%',
  objectFit: 'cover',
  boxShadow: '0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.5)',
  marginBottom: '1rem',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
}));

export default ProjectSlider;


