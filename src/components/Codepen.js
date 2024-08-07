import React, { useState } from 'react';
import styled from 'styled-components';

// Import images from the public/Images directory
const image1 = `${process.env.PUBLIC_URL}/Images/image1.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/image2.png`;
const image3 = `${process.env.PUBLIC_URL}/Images/image3.png`;
const image4 = `${process.env.PUBLIC_URL}/Images/image4.png`;
const image5 = `${process.env.PUBLIC_URL}/Images/image5.png`;
const logo = `${process.env.PUBLIC_URL}/Images/codepen.png`;

// URLs and Titles for each image
const imageLinks = [
  'https://codepen.io/Tyler-Ortolano-the-solid/pen/oNrWPYw',
  'https://codepen.io/Tyler-Ortolano-the-solid/pen/bGPgxxE',
  'https://codepen.io/Tyler-Ortolano-the-solid/pen/xxodaGO',
  'https://codepen.io/Tyler-Ortolano-the-solid/pen/mdZwzJz',
  'https://codepen.io/Tyler-Ortolano-the-solid/pen/jOjmvNd'
];

const imageTitles = [
  'Data Visualization',
  'Connect Four',
  'Stock Market Tracker',
  'CS Quiz',
  'Tic-Tac-Toe'
];

const images = [image1, image2, image3, image4, image5];

const Codepen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <SliderSection>
      <Logo src={logo} alt="CodePen Logo" />
      <SliderContainer>
        <ArrowButton onClick={prevImage}>❮</ArrowButton>
        <ImageWrapper>
          <a href={imageLinks[currentIndex]} target="_blank" rel="noopener noreferrer">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
          </a>
        </ImageWrapper>
        <ArrowButton onClick={nextImage}>❯</ArrowButton>
      </SliderContainer>
      <ImageTitle>{imageTitles[currentIndex]}</ImageTitle>
    </SliderSection>
  );
};

const SliderSection = styled.div`
  text-align: center;
  margin: 50px auto;
`;

const Logo = styled.img`
  width: 50px; /* Set the width and height to make the logo small, like the size of a penny */
  height: 50px;
  margin-bottom: 10px;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.02);
  }

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 10px;
  margin: 0 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ImageTitle = styled.p`
  font-size: 1.5rem;
  margin-top: 15px;
  color: #555;
`;

export default Codepen;
