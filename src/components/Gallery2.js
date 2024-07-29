import React from 'react';
import styled from 'styled-components';

const Gallery2 = () => {
  const logoLinks = [
    { src: `${process.env.PUBLIC_URL}/images/codepen.png`, href: "https://codepen.io/Tyler-Ortolano-the-solid" },
    { src: `${process.env.PUBLIC_URL}/images/github.png`, href: "https://github.com/ortolanotyler" },
    { src: `${process.env.PUBLIC_URL}/images/linkedin.png`, href: "https://www.linkedin.com/in/tylerortolano/" },
    { src: `${process.env.PUBLIC_URL}/images/fiverr.jpg`, href: "https://www.fiverr.com" },
  ];

  return (
    <StyledGallery>
      {logoLinks.map((logo, index) => (
        <a key={index} href={logo.href} target="_blank" rel="noopener noreferrer" className="item">
          <img src={logo.src} alt={`Logo ${index}`} />
        </a>
      ))}
    </StyledGallery>
  );
};

const StyledGallery = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 100%; /* This creates a square by setting the height relative to the width */
    position: relative;
    border: 1px solid white;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }

    img {
      position: absolute;
      max-block-size: 200px;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain; /* Ensures the logo is contained within the square */
    }
  }
`;

export default Gallery2;
