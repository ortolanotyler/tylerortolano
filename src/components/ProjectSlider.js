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
    title: 'JackieWyers.beauty',
    description:
      "For my very first project, I developed JackieWyers.beauty using ReactJS, ensuring the site could grow with the client's evolving needs, including the incorporation of various mini-applications. I used PostgreSQL for secure data management and Styled Components for scalable design. To optimize SEO, I integrated React-Helmet. This project provided valuable experience in translating client requirements into technical implementations and iterating based on user feedback.",
    image: `${process.env.PUBLIC_URL}/Images/jackiewyersbeauty.png`,
    href: 'https://jackiewyers.beauty/',
  },

  // Add more projects as needed
];

const ProjectSlider = () => {
  return (
    <ThemeProvider theme={theme.muiTheme}>
      <SliderContainer>
        {projects.map((project, index) => (
          <StyledCard key={index}>
            <CardContentWrapper>
              <Title>{project.title}</Title>
              <HeadshotContainer>
                <Headshot src={project.image} alt={project.title} />
              </HeadshotContainer>
              <Description>{project.description}</Description>
              <StyledButton

                variant="contained"
                color="primary"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </StyledButton>
            </CardContentWrapper>
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
  
}));

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: 'none',
  border: 'none',
}));

const CardContentWrapper = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'normal',
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

const HeadshotContainer = styled('div')`
  margin: 1.5rem;
`;

const Headshot = styled('img')(({ theme }) => ({
  width: '275px',
  height: '275px',
  objectFit: 'cover',
  border: '4px solid black',
  boxShadow: '0.1rem 0.2rem 0.4rem rgba(0, 0, 0, 0.5)',
  marginBottom: '1rem',
  '@media (max-width: 768px)': {
    width: '200px',
    height: '200px',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  marginTop: '1rem',
  border: '2.5px solid black',
  boxShadow: '0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.5)',
}));

export default ProjectSlider;
