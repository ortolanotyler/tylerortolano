import React from 'react';
import styled from 'styled-components';
import Gallery from '../components/Gallery';

const About = () => (
  <StyledAbout id="about">
    <div className="container">
      <h1>About Me</h1>
     

      <h2>Skills</h2>
 <Gallery/>
    </div>
  </StyledAbout>
);

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top: 100px; /* Add padding to account for the fixed navbar */
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;

  .container {
    max-width: 800px;
    width: 100%;
    text-align: center;

    h1, h2 {
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    ul {
      list-style: none;
      padding: 0;
      margin-bottom: 2rem;

      li {
        background: ${({ theme }) => theme.colors.primary};
        color: white;
        padding: 0.5rem 1rem;
        margin: 0.5rem 0;
        border-radius: 5px;
      }
    }
  }
`;

export default About;
