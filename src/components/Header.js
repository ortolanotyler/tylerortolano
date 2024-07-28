import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const yOffset = -80; // Adjust this value to match the height of your navbar
    const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: 'smooth' });
  };

  const logo = `${process.env.PUBLIC_URL}/Images/logo.png`; // Adjust the path as needed
  const clickSound = new Audio(`${process.env.PUBLIC_URL}/click.wav`); // Adjust the path as needed

  const handleLogoClick = () => {
    clickSound.play();
  };

  return (
    <StyledHeader>
      <div className="logo-container" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.background};
  padding: 1.5rem; /* Increase padding */
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

    img {
      height: 80px; /* Increase logo size */
    }

    &:active {
      transform: translateY(2px); /* Simulate pressed effect */
    }
  }

  nav {
    display: flex;
    justify-content: center;
    gap: 2.5rem; /* Increase gap between nav items */

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.text};
      font-weight: bold;
      font-size: 1.2rem; /* Increase font size */
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export default Header;
