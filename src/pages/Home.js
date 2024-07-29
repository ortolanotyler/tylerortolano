import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headshot = `${process.env.PUBLIC_URL}/Images/linkedin.jpeg`;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <StyledHome id="home" isVisible={isVisible}>
      <div className="content">
        <div className="text">
          <h1>Hello! My name is</h1>
          <h1 className="accent">Tyler.</h1>
          <h2>I'm a web developer.</h2>
        </div>
        <div className="image-container">
          <img src={headshot} alt="Headshot" />
        </div>
      </div>
    </StyledHome>
  );
};

const slideUp = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 100px;
  text-align: center;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .text {
    flex: 1;
    text-align: left;

    h1, h2 {
      opacity: 0;
      transform: translateY(50px);
      animation: ${({ isVisible }) => isVisible && slideUp} 1s forwards;
    }

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .image-container {
    flex: 0 0 auto;

    img {
      height: 200px;
      width: 200px;
      border-radius: 50%;
      object-fit: cover;
      opacity: 0;
      transform: translateY(50px);
      animation: ${({ isVisible }) => isVisible && slideUp} 1s forwards 0.3s;
    }
  }

  h1 {
    font-size: 4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;

    &.accent {
      font-size: 5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: 768px) {
      font-size: 3rem;

      &.accent {
        font-size: 3.5rem;
      }
    }
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.secondary};

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.secondary};

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

export default Home;
