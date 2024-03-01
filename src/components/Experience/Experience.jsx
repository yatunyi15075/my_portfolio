import React from "react";
import styled from 'styled-components';
import {FaBuilding} from 'react-icons/fa';
import GlobalStyles from "../../constants/globalstyle";

const WorkExperienceContainer = styled.div `
    background-color: #121212; /* background color*/
    color: #ffffff; /* color of texts */
    font-family: 'Ariel', sans-serif;
    padding: 2rem;
    text-align: center;
`;




const WorkExperienceTitle = styled.h2`
    margin-bottom: 2rem;
`

const ExperienceList = styled.ul`
    list-style: none;
    padding: 0;
`

const ExperienceItem = styled.li`
    margin-bottom: 2rem;
`

const CompanyName = styled.h3`
    font-size: 1.2rem;
    font-style: italic;
    margin-bottom: 0.5rem;
`

const Position = styled.p`
    font-size: 1.2rem;
    font-style: italic;
    margin-bottom: 0.5rem;
`
const Duration = styled.p`
    font-size: 1rem;
    margin-bottom: 0.5rem;
`

const Description = styled.p`
    font-size: 1rem;
`

const WorkExperience =() =>{
    return(
        <WorkExperienceContainer>
            <GlobalStyles />
            <WorkExperienceTitle>
                Work Experience
            </WorkExperienceTitle>

            <ExperienceList>
                <ExperienceItem>
                    <CompanyName>
                        ABC Company
                    </CompanyName>
                    <Position>
                        Software Engineer
                    </Position>
                    <Duration>
                        January 2020 - Present
                    </Duration>
                    <Description>
                        jhjkhfjdskjhd dkhdkjhf ndkhdhd kdkhhd dkjhdj,dlkssdhh nksdhkshf,sdjkjhd,djfshf
                    </Description>
                </ExperienceItem>

                <ExperienceItem>
                    <CompanyName>
                        XYZ Company
                    </CompanyName>
                    <Position>
                        Web Developer
                    </Position>
                    <Duration>
                        Jane 2018 - December 2019
                    </Duration>
                    <Description>
                        jhjkhfjdskjhd dkhdkjhf ndkhdhd kdkhhd dkjhdj,dlkssdhh nksdhkshf,sdjkjhd,djfshf
                    </Description>
                </ExperienceItem>


            </ExperienceList>
        </WorkExperienceContainer>
    );
};

export default WorkExperience;
