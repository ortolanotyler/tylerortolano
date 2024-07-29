import React, { useState } from 'react';
import styled from 'styled-components';

const Gallery = () => {
  const logos = [
    `${process.env.PUBLIC_URL}/images/react1.png`,
    `${process.env.PUBLIC_URL}/images/nodejs.png`,

    `${process.env.PUBLIC_URL}/images/postgresql.png`,

    `${process.env.PUBLIC_URL}/images/html.png`,
    `${process.env.PUBLIC_URL}/images/javascript.png`,

    `${process.env.PUBLIC_URL}/images/css.png`,
  
    `${process.env.PUBLIC_URL}/images/jquery.png`,
    `${process.env.PUBLIC_URL}/images/git.png`,
    `${process.env.PUBLIC_URL}/images/api.jpg`,


  ];

  return (
    <StyledGallery>
      {logos.map((logo, index) => (
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
  gap: 20px;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }

    img {
      max-width: 100%;
      max-height: 100px;
    }
  }
`;

export default Gallery;
