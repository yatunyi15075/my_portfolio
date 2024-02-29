import React from 'react';
import styled from 'styled-components';
import { images } from '../../constants';

const HeroContainer = styled.div`
  position: relative;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const HeroContent = styled.div`
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  padding-right: 10px;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkblue;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Hello, there I'm</HeroTitle>
        <SubTitle>Yatunyi Brian</SubTitle>
        <HeroText>
          This is my developer portfolio. Thank you for opening it. I appreciate your time 
           and consideration. I value you.
        </HeroText>
        <Button>Find Out More</Button>
      </HeroContent>
      <HeroImage src={images.hero} alt="Hero Image" width="300px" height="200px" />
    </HeroContainer>
  );
}

export default Hero;
