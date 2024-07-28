import React from 'react';
import styled from 'styled-components';

const Home = () => {
  const headshot = `${process.env.PUBLIC_URL}/Images/linkedin.jpeg`;

  return (
    <StyledHome id="home">
      <div className="content">
        <div className="text">
          
          <p>I'm Tyler Ortolano, a full - stack developer.</p>
        </div>
        <div className="image-container">
          <img src={headshot} alt="Headshot" />
        </div>
      </div>
    </StyledHome>
  );
};

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
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 768px) {
      font-size: 2rem;
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

export default Home;
