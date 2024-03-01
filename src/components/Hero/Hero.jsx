import React from 'react';
import styled from 'styled-components';
import { images } from '../../constants';
import GlobalStyles from '../../constants/globalstyle';

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 2rem;
`;

const HeroContent = styled.div`
  z-index: 1;
  color: #fff;
  text-align: left;
  max-width: 50%;
  padding-bottom: 2rem; /* Added padding to the bottom */
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
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

const HelloEmoji = styled.span`
  font-size: 2rem;
`;

const HeroImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 4px solid #ffffff; /* Added border */
  border-radius: 20px; /* Added border-radius for curved corners */
`;

const Hero = () => {
  return (
    <HeroContainer>
      <GlobalStyles />
      <HeroContent>
        <HeroTitle>
          <HelloEmoji>👋</HelloEmoji> Hello, there I'm
        </HeroTitle>
        <SubTitle>Yatunyi Brian</SubTitle>
        <HeroText>
          This is my developer portfolio. Thank you for opening it. I appreciate your time and consideration. I value you.
        </HeroText>
        <Button>Find Out More</Button>
      </HeroContent>
      <HeroImageContainer>
        <HeroImage src={images.hero} alt="Hero Image" />
      </HeroImageContainer>
    </HeroContainer>
  );
}

export default Hero;
