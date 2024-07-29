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
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  z-index: 1;
  animation: ${fadeIn} 5s ease-in-out;
`;

const SkylineImage = styled.img`
  width: 100%;
  height: auto;
`;

const Skyline = () => {
  const skyline = `${process.env.PUBLIC_URL}/Images/skyline2.png`;

  return (
    <SkylineContainer>
      <SkylineImage src={skyline} alt="Skyline" />
    </SkylineContainer>
  );
};

export default Skyline;
