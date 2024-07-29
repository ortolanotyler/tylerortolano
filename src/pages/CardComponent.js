import React from 'react';
import { Card, CardMedia } from '@mui/material';
import styled from 'styled-components';

const ProfileCard = () => {
  const skyline = `${process.env.PUBLIC_URL}/Images/skyline2.png`;

  return (
    <StyledCard>
      <StyledCardMedia image={skyline} title="Skyline" />
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: visible;
  box-shadow: none !important; /* Remove the shadow */
  border: none;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;

export default ProfileCard;
