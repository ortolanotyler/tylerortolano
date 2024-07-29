import React from 'react';
import styled from 'styled-components';

const Gallery2 = () => {
  const links = [
    { url: `${process.env.PUBLIC_URL}/images/codepen.png`, link: 'https://codepen.io/Tyler-Ortolano-the-solid' },
    { url: `${process.env.PUBLIC_URL}/images/github.png`, link: 'https://github.com/ortolanotyler' },
    { url: `${process.env.PUBLIC_URL}/images/linkedin.png`, link: 'https://www.linkedin.com/in/tylerortolano/' },
  ];

  return (
    <StyledGallery>
      {links.map((logo, index) => (
        <div key={index} className="item">
          <a href={logo.link} target="_blank" rel="noopener noreferrer">
            <img src={logo.url} alt={`Logo ${index}`} />
          </a>
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

export default Gallery2;
