import React from 'react'
import Video from '../../videos/video.mp4';
import Image from '../../images/aranza.jpg';
import {Button} from '../Button/ButtonElements';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowDown
} from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hey! I'm Aranza</HeroH1>
                <HeroP>Junior UX/UI Designer and Developer</HeroP>
                <HeroBtnWrapper>
                    <Button to="about">
                        Know more <ArrowDown/>
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
