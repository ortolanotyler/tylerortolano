import React from 'react';
import styled, { keyframes } from 'styled-components';

const OfferSection = () => {
  const imagePath = `${process.env.PUBLIC_URL}/Images/jackiewyersbeauty.png`;

  return (
    <Section>
      <Grid>
        <Card>
          <Circle className="circle1" image={imagePath}></Circle>
          <CardContent className="right">
            <h2>JackieWyers.Beauty</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
          </CardContent>
        </Card>
        <Card>
          <Circle className="circle2" image={imagePath}></Circle>
          <CardContent className="left">
            <h2>Lister</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
          </CardContent>
        </Card>
        <Card>
          <Circle className="circle3" image={imagePath}></Circle>
          <CardContent className="right">
            <h2>BitMap</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
          </CardContent>
        </Card>
        <Card>
          <Circle className="circle4" image={imagePath}></Circle>
          <CardContent className="left">
            <h2>project 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
          </CardContent>
        </Card>
      </Grid>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
`;

const OfferText = styled.div`
  margin-bottom: 1rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.25rem;
    margin-bottom: 1rem;

    .icon {
      margin-left: 0.75rem;
      width: 1.5rem;
      height: 1.5rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.25;
    max-width: 40rem;
    margin: 0 auto;

    @media (min-width: 768px) {
      font-size: 3rem;
    }

    @media (min-width: 1024px) {
      font-size: 4rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: .5rem;
  max-width: 50rem;
  margin: 0 auto;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 2rem;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  transition: box-shadow 0.1s;
  border: 0.1px solid #ddd;

  &:hover {
    box-shadow: 0.03rem 0.03rem 0.5rem rgba(0, 0, 0, 0.3);
  }

  &:hover .circle {
    filter: brightness(75%);
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.6s;
    z-index: 0;
    background-color: ${({ theme }) => theme.colors.bitcoinOrange};
  }

  &:nth-child(1)::before {
    bottom: 0;
    right: 0;
    clip-path: circle(calc(6.25rem + 7.5vw) at 100% 100%);
  }

  &:nth-child(2)::before {
    bottom: 0;
    left: 0;
    clip-path: circle(calc(6.25rem + 7.5vw) at 0% 100%);
  }

  &:nth-child(3)::before {
    top: 0;
    right: 0;
    clip-path: circle(calc(6.25rem + 7.5vw) at 100% 0%);
  }

  &:nth-child(4)::before {
    top: 0;
    left: 0;
    clip-path: circle(calc(6.25rem + 7.5vw) at 0% 0%);
  }

  &:hover::before {
    clip-path: circle(110vw at 100% 100%);
  }

  &:hover h2, &:hover p {
    color: white;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25); /* Adding drop shadow to text */

  h2 {
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    
    font-size: 1.5rem;

    @media (min-width: 1024px) {
      font-size: 2rem;
    }
  }

  p {
    transition: color 0.5s;
    color: ${({ theme }) => theme.colors.secondary};
  }

  &.right {
    padding-right: 5rem;
  }

  &.left {
    padding-left: 5rem;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: ${({ image }) => `url(${image})`} no-repeat center/cover;
  transition: filter 0.6s; /* Adding transition for the filter effect */

  &.circle1 {
    bottom: 0;
    right: 0;
    clip-path: circle(calc(6.25rem + 7.5vw) at 100% 100%);
  }

  &.circle2 {
    bottom: 0;
    left: 0;
    clip-path: circle(calc(6.25rem + 7.5vw) at 0% 100%);
  }

  &.circle3 {
    top: 0;
    right: 0;
    clip-path: circle(calc(6.25rem + 7.5vw) at 100% 0%);
  }

  &.circle4 {
    top: 0;
    left: 0;
    clip-path: circle(calc(6.25rem + 7.5vw) at 0% 0%);
  }
`;

export default OfferSection;
