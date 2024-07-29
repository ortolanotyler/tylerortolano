import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SkylineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  animation: ${fadeIn} 3s ease-in-out;
`;

const SkylineImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  
`;

const Skyline = () => {
  const skyline = `${process.env.PUBLIC_URL}/Images/skyline.jpg`; // Update the path to the AVIF file

  return (
    <SkylineContainer>
      <SkylineImage src={skyline} alt="Skyline" />
    </SkylineContainer>
  );
};

export default Skyline;
