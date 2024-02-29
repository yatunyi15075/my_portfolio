import React from 'react';
import styled from 'styled-components';
import { images } from '../../constants';

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const AboutText = styled.div`
  flex: 1;
  margin-left: 1rem;
`;
const AboutTitle = styled.h2`
  margin-bottom: 2rem;
  color: #333;
  font-size: 2rem;
`;


const AboutImage = styled.img`
  flex: 1;
  max-width: 50%;
  border-radius: 50%; /* Makes the image circular */
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




const About = () => {
  return (
    <AboutContainer>
    {/* <AboutTitle>About Me</AboutTitle> */}
      <AboutText>
        <h3>Hi, I'm Brian</h3>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum   massa
          in eros porttitor, sit amet ultricies neque consectetur. Vivamus non tellus eget ex maximus lobortis.
        </p>
       
        <p>
          Sed in neque eu enim fermentum posuere. Donec euismod orci vitae felis {' '} euismod laoreet. Nulla facilisi. Nulla facilisi.
        </p>
        <Button>Download CV</Button>
      </AboutText>
      <img src={images.about} alt="about img" />
    </AboutContainer>
  );
};

export default About;
