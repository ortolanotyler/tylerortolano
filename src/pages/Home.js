import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet';

const Home = () => {
  const headshot = `${process.env.PUBLIC_URL}/Images/linkedin.jpeg`;

  return (
    <HomeContainer id="home">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <TextContainer>
        <br />
        <br />
        <br />
        <h1>Hello! My name is</h1>

        <h1 className="accent">Tyler</h1>

        <HeadshotContainer>
          <Headshot src={headshot} alt="Headshot" />
        </HeadshotContainer>
  
        <h2>I'm a web developer.</h2>
     
      </TextContainer>
    </HomeContainer>
  );
};

const bounce = keyframes`
  0% {
    transform: translateY(0%);
  }
  20% {
    transform: translateY(-180%) rotate(20deg);
  }
  30% {
    transform: translateY(0%);
  }
  40% {
    transform: translateY(-25%);
  }
  50% {
    transform: translateY(0%);
  }
  60% {
    transform: translateY(-12%);
  }
  70% {
    transform: translateY(0%);
  }
  80% {
    transform: translateY(-3%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 150px; /* Add enough padding to ensure the content starts below the header */
  text-align: center;
`;

const TextContainer = styled.div`
  margin-top: 30px;

  h1 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;

    &.accent {
      font-size: 5rem; /* Twice as big as the previous 4.5rem */
      font-weight: 700;
      color: #f7931a; /* Bitcoin orange */
      font-family: 'Playfair Display', serif; /* New font */
    }

    @media (max-width: 768px) {
      font-size: 2rem;

      &.accent {
        font-size: 5rem; /* Adjusted for smaller screens */
      }
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary};

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const HeadshotContainer = styled.div`
  margin: 1.5rem;
`;

const Headshot = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid black; /* Black border */
    box-shadow: 0.03rem 0.03rem 0.5rem rgba(0, 0, 0, 0.3);
  animation: ${bounce} 2.9s ease;
  animation-delay: 0.01s;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;



export default Home;
