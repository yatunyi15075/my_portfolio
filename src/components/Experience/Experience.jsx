import React from "react";
import styled from 'styled-components';
import { FaBuilding } from 'react-icons/fa';
import GlobalStyles from "../../constants/globalstyle";

const WorkExperienceContainer = styled.div`
    background-color: #121212;
    color: #ffffff; 
    font-family: 'Arial', sans-serif;
    padding: 2rem;
    text-align: left; 
`;

const WorkExperienceTitle = styled.h1`
    margin-bottom: 2rem;
    font-size: 2rem;
`;

const ExperienceList = styled.ul`
    list-style: none;
    padding: 0;
`;

const ExperienceItem = styled.li`
    margin-bottom: 2rem;
    border-left: 4px solid #ffffff; 
    padding-left: 1rem; 
`;

const CompanyName = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

const Position = styled.p`
    font-size: 1.2rem;
    font-style: italic;
    margin-bottom: 0.5rem;
`;

const Duration = styled.p`
    font-size: 1rem;
    margin-bottom: 0.5rem;
`;

const Description = styled.p`
    font-size: 1rem;
`;

const WorkExperience = () => {
    return (
        <WorkExperienceContainer>
            <GlobalStyles />
            <WorkExperienceTitle>Work Experience</WorkExperienceTitle>

            <ExperienceList>
                <ExperienceItem>
                    <CompanyName>ABC Company</CompanyName>
                    <Position>Software Engineer</Position>
                    <Duration>January 2020 - Present</Duration>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec quam eu erat
                        finibus consectetur at vitae urna. Donec pharetra auctor convallis.
                    </Description>
                </ExperienceItem>

                <ExperienceItem>
                    <CompanyName>XYZ Company</CompanyName>
                    <Position>Web Developer</Position>
                    <Duration>June 2018 - December 2019</Duration>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec quam eu erat
                        finibus consectetur at vitae urna. Donec pharetra auctor convallis.
                    </Description>
                </ExperienceItem>
            </ExperienceList>
        </WorkExperienceContainer>
    );
};

export default WorkExperience;
