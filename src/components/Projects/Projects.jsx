import React from 'react';
import styled from 'styled-components';
import { images } from '../../constants';
import GlobalStyles from '../../constants/globalstyle';

const ProjectsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const ProjectCardLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ProjectCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
`;

const ProjectImage = styled.img`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  border-radius: 8px;
`;

const Projects = () => {
  const redirectToGitHub = () => {
    window.location.href = 'https://github.com'; // Redirect to GitHub
  };

  return (
    <ProjectsContainer>
      <GlobalStyles />
      <h2>Projects</h2>
      <ProjectGrid>
        <ProjectCardLink onClick={redirectToGitHub}>
          <ProjectCard>
            <ProjectImage src={images.hero} alt="Text to Image Generator" />
            <ProjectTitle>Text to Image Generator</ProjectTitle>
            <ProjectDescription>
              A project that converts text input into an image output.
            </ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
        <ProjectCardLink onClick={redirectToGitHub}>
          <ProjectCard>
            <ProjectImage src={images.hero} alt="School Management System" />
            <ProjectTitle>School Management System</ProjectTitle>
            <ProjectDescription>
              A comprehensive system for managing school operations.
            </ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
        <ProjectCardLink onClick={redirectToGitHub}>
          <ProjectCard>
            <ProjectImage src={images.hero} alt="CodeHeal Flutter Mobile App" />
            <ProjectTitle>CodeHeal Flutter Mobile App</ProjectTitle>
            <ProjectDescription>
              Mobile application connecting doctors with patients, built with Flutter.
            </ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
        <ProjectCardLink onClick={redirectToGitHub}>
          <ProjectCard>
            <ProjectImage src={images.hero} alt="Hospital Management System" />
            <ProjectTitle>Hospital Management System</ProjectTitle>
            <ProjectDescription>
              An advanced system for managing hospital operations and patient records.
            </ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
