import React from 'react';
import styled from 'styled-components';
import { images } from '../../constants';
import GlobalStyles from '../../constants/globalstyle';

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Ensure the image doesn't overflow */
  padding-bottom: 700px ;
  padding-top: 300px;
`;

const HeroContent = styled.div`
  z-index: 1;
  color: #fff;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Adjusted width to cover the entire hero section */
  height: 100%; /* Adjusted height to cover the entire hero section */
  object-fit: cover; /* Ensure the image covers the container */
  filter: brightness(70%);
`;

const Hero = () => {
  return (
    <HeroContainer>
      <GlobalStyles />
      <HeroContent>
        <HeroTitle>Hello, there I'm</HeroTitle>
        <SubTitle>Yatunyi Brian</SubTitle>
        <HeroText>
          This is my developer portfolio. Thank you for opening it. I appreciate your time 
           and consideration. I value you.
        </HeroText>
        <Button>Find Out More</Button>
      </HeroContent>
      <HeroImage src={images.hero} alt="Hero Image" />
    </HeroContainer>
  );
}

export default Hero;
