import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Gallery = () => {
  const logoPairs = [
    [`${process.env.PUBLIC_URL}/images/react1.png`, `${process.env.PUBLIC_URL}/images/redux.png`],
    [`${process.env.PUBLIC_URL}/images/nodejs.png`, `${process.env.PUBLIC_URL}/images/express.png`],
    [`${process.env.PUBLIC_URL}/images/postgresql.png`, `${process.env.PUBLIC_URL}/images/sql2.png`],
    [`${process.env.PUBLIC_URL}/images/html.png`, `${process.env.PUBLIC_URL}/images/jasmine.png`],
    [`${process.env.PUBLIC_URL}/images/javascript.png`], // No partner, stays the same
    [`${process.env.PUBLIC_URL}/images/css.png`, `${process.env.PUBLIC_URL}/images/bootstrap.png`],
    [`${process.env.PUBLIC_URL}/images/jquery.png`, `${process.env.PUBLIC_URL}/images/docker.png`],
    [`${process.env.PUBLIC_URL}/images/git.png`, `${process.env.PUBLIC_URL}/images/githublogo.png`],
    [`${process.env.PUBLIC_URL}/images/api.jpg`, `${process.env.PUBLIC_URL}/images/sdlc.webp`],
  ];

  const [currentLogos, setCurrentLogos] = useState(logoPairs.map((pair) => pair[0]));

  useEffect(() => {
    const intervals = logoPairs.map((_, index) => {
      return setInterval(() => {
        setCurrentLogos((prevLogos) => {
          const newLogos = [...prevLogos];
          if (logoPairs[index].length > 1) {
            const currentLogoIndex = logoPairs[index].indexOf(newLogos[index]);
            const nextLogoIndex = (currentLogoIndex + 1) % logoPairs[index].length;
            newLogos[index] = logoPairs[index][nextLogoIndex];
          }
          return newLogos;
        });
      }, 2000 * (index + 1));
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <StyledGallery>
      {currentLogos.map((logo, index) => (
        <div key={index} className="item">
          <img src={logo} alt={`Logo ${index}`} />
        </div>
      ))}
    </StyledGallery>
  );
};

const StyledGallery = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: transform 0.3s;
    aspect-ratio: 1 / 1; /* Maintain square aspect ratio */
    box-shadow: 0.03rem 0.03rem 0.5rem rgba(0, 0, 0, 0.3);
    
    &:hover {
      transform: scale(1.05);
    }

    img {
      max-width: 80%; /* Adjust the logos to fit within the square */
      max-height: 80%;
      object-fit: contain; /* Ensure logos maintain their aspect ratios */
    }
  }
`;

export default Gallery;

