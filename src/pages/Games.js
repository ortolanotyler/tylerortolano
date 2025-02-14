import React from 'react';
import ConnectFour from '../components/ConnectFour';
import styled from 'styled-components';

const Games = () => {
  return (
    <StyledGames>
  
      <GameContainer>
        <ConnectFour />
      </GameContainer>
    </StyledGames>
  );
};

const StyledGames = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
`;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
 
  background: ${({ theme }) => theme.colors.background};
  
`;

export default Games;
