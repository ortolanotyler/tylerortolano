import React from 'react';
import styled, { keyframes } from 'styled-components';
import useIntersectionObserver from '../hooks/IntersectionObserver';
import Skyline from './Skyline';

const About = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <StyledAbout id="about">
      <div className="container">
        <FadeInSection ref={ref} isIntersecting={isIntersecting}>
          <h1>About Me</h1>
          <p>
            I am a recent graduate of Springboard's Software Engineering course with a strong foundation in frontend and full stack development. Having relocated to Canada in early 2023 and obtained permanent residency, I am eager to begin a long-term career in the tech industry. I am proficient in React, JavaScript, HTML, and CSS, with hands-on experience in developing responsive web applications.
          </p>
          <SkylineContainer>
            <Skyline />
          </SkylineContainer>
        </FadeInSection>
      </div>
    </StyledAbout>
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

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px; /* Add padding to account for the fixed navbar */
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;

  .container {
    max-width: 500px;
    width: 100%;
    text-align: center;

    h1 {
    font-size: 2rem;
      margin-bottom: 1rem; /* Reduced space between h1 and p */
    }

    p {
      margin-bottom: 1rem;
      line-height: 1.6;
    }
  }
`;

const SkylineContainer = styled.div`
  width: 100%;
  margin-top: 1rem; /* Adjust the margin to control spacing between the text and the skyline */
`;

export default About;
