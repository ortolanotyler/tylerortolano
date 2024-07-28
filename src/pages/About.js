import React from 'react';
import styled from 'styled-components';

const About = () => (
  <StyledAbout id="about">
    <div className="container">
      <h1>About Me</h1>
      <p>
        Hi, I'm Jackie Wyers, a passionate React developer with a love for creating beautiful and functional web applications. With a background in software engineering and a keen eye for design, I strive to build projects that not only work well but also look great.
      </p>

      <h2>Skills</h2>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>HTML & CSS</li>
        <li>Styled-Components</li>
        <li>Git & GitHub</li>
        <li>Responsive Design</li>
      </ul>

      <h2>Personal Details</h2>
      <p>
        When I'm not coding, I love to travel and explore new places. I also enjoy creating makeup tutorials and sharing my passion for beauty with my followers on YouTube and Instagram. Whether I'm working on a new project or trying out the latest makeup trend, I always aim to bring creativity and enthusiasm to everything I do.
      </p>
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
