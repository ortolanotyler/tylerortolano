import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Header = () => {
  const [showNavItems, setShowNavItems] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [jiggleCount, setJiggleCount] = useState(0);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const yOffset = -80; // Adjust this value to match the height of your navbar
    const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: 'smooth' });
    setShowNavItems(false); // Hide nav items after navigation
  };

  const logo = `${process.env.PUBLIC_URL}/Images/logo.png`; // Adjust the path as needed
  const clickSound = new Audio(`${process.env.PUBLIC_URL}/click.wav`); // Adjust the path as needed

  const handleLogoClick = () => {
    clickSound.play();
    setShowNavItems(!showNavItems); // Toggle the nav items visibility on logo click
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

  return (
    <StyledHeader jiggle={jiggleCount > 0}>
      <div className="logo-container" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" />
      </div>
      <nav className={showNavItems ? 'show' : ''}>
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('about')}>Skills</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </nav>
      {showNavItems && (
        <DropdownMenu>
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('about')}>Skills</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </DropdownMenu>
      )}
    </StyledHeader>
  );
};

const jiggle = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(3deg); }
  50% { transform: rotate(-3deg); }
  75% { transform: rotate(3deg); }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;

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

    &:active {
      transform: translateY(4px);
    
    }
  }

  nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    gap: 2.5rem;
    margin-left: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.text};
      font-weight: bold;
      font-size: 1.2rem;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    &.show {
      opacity: 1;
    }

    @media (max-width: 768px) {
      display: none; /* Hide nav items on smaller screens */
    }
  }
`;

const DropdownMenu = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 1rem 0;
    text-align: left;
    width: 100%;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Header;
