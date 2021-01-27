import React, {useState} from 'react';
import {Container, Card, Content, Icon, Title, Subtitle, FeaturesListItem, SkillsContainer } from './SkillsElements';
import { FaPaintBrush, FaLaptop, FaCode, FaTools } from 'react-icons/fa';

export const skillsObj = {
    id: 'skills'
}

const SkillsSection = ({id}) => {
    const [ featuresTools ] = useState([
        "Git",
        "Trello",
        "Wordpress",
        "Odoo"
    ])
    const [ featuresUX ] = useState([
        "Figma",
        "Photoshop",
        "Illustrator",
        "Elementor"
    ])
    const [ featuresFront ] = useState([
        "HTML",
        "CSS",
        "Javascript",
        "React"
    ])
    const [ featuresBack ] = useState([
        "Android",
        "Unity",
        ".NET",
        "SQL"
    ])
    return (
    <div id={id}>
    <SkillsContainer>
        <Title>SKILLS</Title>
        <Container>
            <Card>
                <Content>
                    <Icon>
                        <FaTools/>
                    </Icon>
                    <Subtitle>Tools</Subtitle>
                    {
                        featuresTools.map(item => (
                            <FeaturesListItem>
                                <span>{item}</span>
                            </FeaturesListItem>
                        ))
                    }
                </Content>
            </Card>
            <Card>
                <Content>
                    <Icon>
                        <FaPaintBrush/>
                    </Icon>
                    <Subtitle>UX/UI</Subtitle>
                    {
                        featuresUX.map(item => (
                            <FeaturesListItem>
                                <span>{item}</span>
                            </FeaturesListItem>
                        ))
                    }
                </Content>
            </Card>
            <Card>
                <Content>
                    <Icon>
                        <FaCode/>
                    </Icon>
                    <Subtitle>Web</Subtitle>
                    {
                        featuresFront.map(item => (
                            <FeaturesListItem>
                                <span>{item}</span>
                            </FeaturesListItem>
                        ))
                    }
                </Content>
            </Card>
            <Card>
                <Content>
                    <Icon>
                        <FaLaptop/>
                    </Icon>
                    <Subtitle>Programming</Subtitle>
                    {
                        featuresBack.map(item => (
                            <FeaturesListItem>
                                <span>{item}</span>
                            </FeaturesListItem>
                        ))
                    }
                </Content>
            </Card>
        </Container>
    </SkillsContainer>
    </div>
    )
}

export default SkillsSection;
