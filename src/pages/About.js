import React from 'react';
import styled from 'styled-components';
import useIntersectionObserver from '../hooks/IntersectionObserver';
import Skyline from './Skyline';

const About = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <StyledAbout id="about">
      <div className="container">
        <FadeInSection ref={ref} isIntersecting={isIntersecting}>
          <h1>About Me</h1>
        </FadeInSection>
        <SkylineContainer>
          <Skyline />
        </SkylineContainer>
        <p>
        I am a versatile professional with a passion for solving complex problems, whether in software development or sales engineering. As a recent graduate of Springboard's Software Engineering course, I have developed a strong foundation in both frontend and full stack development. My expertise includes React, JavaScript, HTML, and CSS, and I have hands-on experience in building responsive web applications.
</p>
<br/>
<p>
Having relocated to Canada mid-2023 and obtained permanent residency, I am excited to embark on a long-term career that leverages my technical skills and my background in sales. My experience as a top-performing Business Development Representative has honed my ability to identify market opportunities, develop strategic solutions, and deliver results. I am eager to contribute to a dynamic team where I can apply my skills in both technology and client-focused problem-solving.
        </p>
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
