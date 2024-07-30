import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Header = () => {
  const [showNavItems, setShowNavItems] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [jiggleCount, setJiggleCount] = useState(0);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Adjust this value to match the height of your navbar
      const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
      setShowNavItems(false); // Hide nav items after navigation
    }
  };

  const logo = `${process.env.PUBLIC_URL}/Images/logo.png`; // Adjust the path as needed
  const clickSound = new Audio(`${process.env.PUBLIC_URL}/click.wav`); // Adjust the path as needed

  const handleLogoClick = () => {
    clickSound.play();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
    setShowNavItems(false); // Hide nav items after clicking the logo
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
      // Scrolling up
      setShowNavItems(true);
    } else {
      // Scrolling down
      setShowNavItems(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const jiggleInterval = setInterval(() => {
      if (jiggleCount < 10) {
        setJiggleCount(jiggleCount + 1);
      } else {
        clearInterval(jiggleInterval);
      }
    }, 5000);

    const jiggleTimeout = setTimeout(() => {
      setJiggleCount(1);
    }, 3000);

    return () => {
      clearInterval(jiggleInterval);
      clearTimeout(jiggleTimeout);
    };
  }, [jiggleCount]);

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

  nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    margin-left: 1rem;
    opacity: 0;
    transition: opacity 0.9s ease-in-out;
    flex-wrap: wrap;

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.text};
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      transition: font-size 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    &.show {
      opacity: 1;
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
    display: none; /* Hide the entire header on mobile */
  }
`;

export default Header;
