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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const ProjectCardLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ProjectCard = styled.div`
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
            <ProjectImage src={images.text_image} alt="Text to Image Generator" />
            <ProjectTitle>Text to Image Generator</ProjectTitle>
            <ProjectDescription>
              Convert text input into visually appealing images effortlessly.
            </ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
        <ProjectCardLink onClick={redirectToGitHub}>
          <ProjectCard>
            <ProjectImage src={images.sms} alt="School Management System" />
            <ProjectTitle>School Management System</ProjectTitle>
            <ProjectDescription>
              Streamline school operations with this comprehensive management system.
            </ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
        <ProjectCardLink onClick={redirectToGitHub}>
          <ProjectCard>
            <ProjectImage src={images.appointment} alt="Doctor Appointment Flutter Mobile App" />
            <ProjectTitle>Doctor Appointment Flutter Mobile App</ProjectTitle>
            <ProjectDescription>
              Connect doctors with patients seamlessly using this Flutter-based mobile app.
            </ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
        <ProjectCardLink onClick={redirectToGitHub}>
          <ProjectCard>
            <ProjectImage src={images.hms} alt="Hospital Management System" />
            <ProjectTitle>Hospital Management System</ProjectTitle>
            <ProjectDescription>
              Manage hospital operations and patient records efficiently with this advanced system.
            </ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
        <ProjectCardLink onClick={redirectToGitHub}>
          <ProjectCard>
            <ProjectImage src={images.chat} alt="Chat Application" />
            <ProjectTitle>Chat Application</ProjectTitle>
            <ProjectDescription>
              Get easy and seamless chat services, with our modern reactjs chat application. Which has a great User Interface.
            </ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
        <ProjectCardLink onClick={redirectToGitHub}>
          <ProjectCard>
            <ProjectImage src={images.lms} alt="Learning Management System" />
            <ProjectTitle>Learning Management System</ProjectTitle>
            <ProjectDescription>
              Manage Your Online School/Learning operations and records of your school efficiently with this advanced system.
            </ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
