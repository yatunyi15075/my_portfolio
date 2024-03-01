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
            <ProjectImage src={images.hero} alt="Project 1" /*width="300px" height="200px"*/ />
            <ProjectTitle>Project 1</ProjectTitle>
            <ProjectDescription>Description of Project 1</ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
        <ProjectCardLink onClick={redirectToGitHub}>
          <ProjectCard>
            <ProjectImage src={images.hero} alt="Project 2" /*width="300px" height="200px"*/ />
            <ProjectTitle>Project 2</ProjectTitle>
            <ProjectDescription>Description of Project 2</ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
        <ProjectCardLink onClick={redirectToGitHub}>
          <ProjectCard>
            <ProjectImage src={images.hero} alt="Project 3" /*width="300px" height="200px"*/ />
            <ProjectTitle>Project 3</ProjectTitle>
            <ProjectDescription>Description of Project 3</ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
        <ProjectCardLink onClick={redirectToGitHub}>
          <ProjectCard>
            <ProjectImage src={images.hero} alt="Project 4" /*width="300px" height="200px"*/ />
            <ProjectTitle>Project 4</ProjectTitle>
            <ProjectDescription>Description of Project 4</ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
