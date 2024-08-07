import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Header = () => {
  const [jiggleCount, setJiggleCount] = useState(0);

  const handleLogoClick = () => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/click.wav`);
    audio.play();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setJiggleCount(1); // Reset the jiggle after click
  };

  useEffect(() => {
    const jiggleInterval = setInterval(() => {
      setJiggleCount((prev) => prev + 1);
    }, 5000);

    return () => {
      clearInterval(jiggleInterval);
    };
  }, []);

  const logo = `${process.env.PUBLIC_URL}/Images/logo.png`; // Adjust the path as needed
  const codepenLogo = `${process.env.PUBLIC_URL}/Images/codepen.png`;
  const githubLogo = `${process.env.PUBLIC_URL}/Images/github.png`;
  const linkedinLogo = `${process.env.PUBLIC_URL}/Images/linkedin.png`;

  return (
    <StyledHeader jiggle={jiggleCount > 0}>
      <div className="logo-container" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" />
      </div>

      <div className="logos">
        <a href="https://codepen.io/Tyler-Ortolano-the-solid" target="_blank" rel="noopener noreferrer">
          <img src={codepenLogo} alt="CodePen" />
        </a>
        <a href="https://github.com/ortolanotyler" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/tylerortolano/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
    </StyledHeader>
  );
};

const jiggle = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(3deg); }
  50% { transform: rotate(-3deg); }
  75% { transform: rotate(3deg); }
`;

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-container {
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.1s;
    animation: ${({ jiggle }) => jiggle && jiggle} 0.3s ease-in-out;
    animation-iteration-count: 1;

    img {
      height: 100px;
      width: 100px;
    }

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: translateY(4px);
    }
  }

  .logos {
    display: flex;
    gap: 1rem;
    margin-right: 10%;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 30px;
      height: 30px;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: 480px) {
    .logos {
      margin-right: 1rem;
    }
    nav {
      display: none; // Ensure nav items never show on mobile
    }
  }
`;

export default Header;

