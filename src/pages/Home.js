import React from 'react';
import styled from 'styled-components';
import Skyline from './Skyline';

const HeadshotContainer = styled.div`
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
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .text {
    flex: 1;
    text-align: left;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .image-container {
    flex: 0 0 auto;

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  h1 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;

    &.accent {
      font-size: 3.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: 768px) {
      font-size: 2rem;

      &.accent {
        font-size: 2.5rem;
      }
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.secondary};

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.secondary};

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const Home = () => {
  const headshot = `${process.env.PUBLIC_URL}/Images/linkedin.jpeg`;

  return (
    <HeadshotContainer id="home">
      <div className="content">
        <div className="text">
          <h1>Hello! My name is</h1>
          <h1 className="accent">Tyler Ortolano.</h1>
          <h2>I'm a full-stack developer.</h2>
        </div>
        <div className="image-container">
          <img src={headshot} alt="Headshot" />
        </div>
      </div>
      <Skyline />
    </HeadshotContainer>
  );
};

export default Home;
