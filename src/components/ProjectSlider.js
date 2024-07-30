// src/components/ProjectSlider.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import theme from '../styles/theme';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.bitcoinOrange,
    },
    secondary: {
      main: theme.colors.secondary,
    },
    text: {
      primary: theme.colors.text,
      secondary: theme.colors.secondary,
    },
    background: {
      paper: theme.colors.background,
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
});

const projects = [
  {
    title: 'JackieWyers.Beauty',
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
    <ThemeProvider theme={muiTheme}>
      <SliderContainer>
        {projects.map((project, index) => (
          <StyledCard key={index}>
            <CardContent>
              <Title>{project.title}</Title>
              <HeadshotContainer>
                <Headshot src={project.image} alt={project.title} />
              </HeadshotContainer>
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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  padding: '20px',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '600px',
  width: '100%', // Ensure cards take full width of the container
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: 'none',
  border: 'none',
  textAlign: 'center', // Center contents within the card
  padding: '20px',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  marginBottom: '1rem',
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  marginBottom: '1.5rem',
}));

const HeadshotContainer = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
`;

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
