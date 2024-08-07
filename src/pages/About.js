import React from 'react';
import styled from 'styled-components';
import useIntersectionObserver from '../hooks/IntersectionObserver';
import Skyline from './Skyline';

const About = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <StyledAbout id="about">
      <div className="container">
       
       
        <p>
        I am a versatile professional with a passion for solving complex problems, whether in software development or sales engineering. As a recent graduate of Springboard's Software Engineering course, I have developed a strong foundation in both frontend and full stack development. My expertise includes React, JavaScript, HTML, and CSS, and I have hands-on experience in building responsive web applications.
</p>
<SkylineContainer>
          <Skyline />
        </SkylineContainer>

      </div>
    </StyledAbout>
  );
};

const FadeInSection = styled.div`
  opacity: 1; /* Set opacity to 1 by default */
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
    max-width: 400px;
    width: 100%;
    text-align: center;

    h1 {
      font-size: 2rem;
    }

    p {
      line-height: 1.6;
    }
  }
`;

const SkylineContainer = styled.div`
  width: 100%;
`;

export default About;
