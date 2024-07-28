import React from 'react';
import styled from 'styled-components';

const Home = () => {
  const headshot = `${process.env.PUBLIC_URL}/Images/linkedin.jpeg`; // Path to the headshot image

  return (
    <StyledHome id="home">
      <div className="content">
        <div className="text">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm Jackie Wyers, a React developer.</p>
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
  padding-top: 100px; /* Add padding to account for the fixed navbar */
  text-align: center;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem; /* Add some space between text and image */
  }

  .text {
    flex: 1;
    text-align: left; /* Align text to the left */
  }

  .image-container {
    flex: 0 0 auto;
    img {
      height: 150px; /* Adjust the size as needed */
      width: 150px; /* Make the image a circle */
      border-radius: 50%;
      object-fit: cover;
    }
  }

  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default Home;

