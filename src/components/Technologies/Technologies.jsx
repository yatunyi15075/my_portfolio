import React from 'react';
import styled from 'styled-components';
import { images } from '../../constants';

const TechnologiesContainer = styled.div`
  background-color: #f9f9f9; /* Change background color as needed */
  padding: 2rem;
  text-align: center;
`;

const TechnologiesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TechnologyItem = styled.li`
  margin: 1rem;
`;

const TechnologyIcon = styled.img`
  width: 64px;
  height: 64px;
`;

const TechnologyName = styled.p`
  margin-top: 0.5rem;
`;

const Technologies = () => {
  return (
    <TechnologiesContainer>
      <h2>Technologies</h2>
      <TechnologiesList>
        <TechnologyItem>
          <TechnologyIcon src= {images.javascript} />
          <TechnologyName>JavaScript</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.react} alt="React" />
          <TechnologyName>React</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.docker} alt="React" />
          <TechnologyName>Docker</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.figma} alt="React" />
          <TechnologyName>Figma</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.flutter} alt="React" />
          <TechnologyName>Flutter</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.git} alt="React" />
          <TechnologyName>Git</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.html} alt="React" />
          <TechnologyName>Html</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.material} alt="React" />
          <TechnologyName>Material</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.nodejs} alt="React" />
          <TechnologyName>NodeJs</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.python} alt="React" />
          <TechnologyName>Python</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.redux} alt="React" />
          <TechnologyName>Redux</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.sass} alt="React" />
          <TechnologyName>Sass</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.tailwind} alt="React" />
          <TechnologyName>Tailwind</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.typescript} alt="React" />
          <TechnologyName>Typescript</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.vitejs} alt="React" />
          <TechnologyName>ViteJs</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.github} alt="React" />
          <TechnologyName>Github</TechnologyName>
        </TechnologyItem>
      
      </TechnologiesList>
    </TechnologiesContainer>
  );
};

export default Technologies;
