import React from 'react';
import ConnectFour from '../components/ConnectFour';
import styled from 'styled-components';
import WeatherForecast from './WeatherWidget';
import NewsAggregator from '../components/NewsAggregator';

const Widgets = () => {
  return (
    <StyledGames>
  
      <GameContainer>
        <WeatherForecast />
      </GameContainer>
      <NewsAggregator  />
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
  max-width: 800px;
  margin-top: 2rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background};
  
`;

export default Widgets;
