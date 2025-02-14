// src/components/Gallery.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Gallery = () => {
  const logoPairs = [
    [`${process.env.PUBLIC_URL}/Images/react1.png`, `${process.env.PUBLIC_URL}/Images/redux.png`],
    [`${process.env.PUBLIC_URL}/Images/nodejs.png`, `${process.env.PUBLIC_URL}/Images/express.png`],
    [`${process.env.PUBLIC_URL}/Images/postgresql.png`, `${process.env.PUBLIC_URL}/Images/sql2.png`],
    [`${process.env.PUBLIC_URL}/Images/html.png`, `${process.env.PUBLIC_URL}/Images/jasmine.png`],
    [`${process.env.PUBLIC_URL}/Images/javascript.png`], // No partner, stays the same
    [`${process.env.PUBLIC_URL}/Images/css.png`, `${process.env.PUBLIC_URL}/Images/bootstrap.png`],
    [`${process.env.PUBLIC_URL}/Images/jquery.png`, `${process.env.PUBLIC_URL}/Images/docker.png`],
    [`${process.env.PUBLIC_URL}/Images/git.png`, `${process.env.PUBLIC_URL}/Images/githublogo.png`],
    [`${process.env.PUBLIC_URL}/Images/api.jpg`, `${process.env.PUBLIC_URL}/Images/sdlc.webp`],
  ];

  const [currentLogos, setCurrentLogos] = useState(logoPairs.map((pair) => pair[0]));
  const [isTransitioning, setIsTransitioning] = useState(new Array(logoPairs.length).fill(false));

  useEffect(() => {
    const interval = setInterval(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * logoPairs.length);
      } while (randomIndex === 4); // Ensure the center JavaScript logo is not selected

      setIsTransitioning((prev) => {
        const newTransitions = [...prev];
        newTransitions[randomIndex] = true;
        return newTransitions;
      });

      setTimeout(() => {
        setCurrentLogos((prevLogos) => {
          const newLogos = [...prevLogos];
          if (logoPairs[randomIndex].length > 1) {
            const currentLogoIndex = logoPairs[randomIndex].indexOf(newLogos[randomIndex]);
            const nextLogoIndex = (currentLogoIndex + 1) % logoPairs[randomIndex].length;
            newLogos[randomIndex] = logoPairs[randomIndex][nextLogoIndex];
          }
          return newLogos;
        });

        setIsTransitioning((prev) => {
          const newTransitions = [...prev];
          newTransitions[randomIndex] = false;
          return newTransitions;
        });
      }, 500); // Match this with the transition duration
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <StyledGallery>
      {currentLogos.map((logo, index) => (
        <div key={index} className="item">
          <img src={logo} alt={`Logo ${index}`} className={isTransitioning[index] ? 'transition' : ''} />
        </div>
      ))}
    </StyledGallery>
  );
};

const StyledGallery = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Single column layout for all screen sizes */
  gap: 1rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr); /* Two columns for wider screens */
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr); /* Three columns for wider screens */
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    aspect-ratio: 1 / 1; /* Maintain square aspect ratio */
    box-shadow: 0.03rem 0.03rem 0.5rem rgba(0, 0, 0, 0.3);
    
    &:hover {
      transform: scale(1.05);
    }

    img {
      max-width: 80%; /* Adjust the logos to fit within the square */
      max-height: 80%;
      object-fit: contain; /* Ensure logos maintain their aspect ratios */
      transition: opacity 0.5s ease-in-out; /* Only the logo fades in and out */
      
      &.transition {
        opacity: 0;
      }
    }
  }
`;

export default Gallery;
