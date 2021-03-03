import React from 'react'
import GalleryBanali from '../GalleryButton/GalleryBanali'
import GalleryBookmeetings from '../GalleryButton/GalleryBookmeetings'
import { ExperienceContainer, ExperienceCardsWrap, ExperienceCard, ExperienceImage, ExperienceInfo } from './ExperienceElements'; 
import BanaliImage from '../../images/gallery/banali.jpg';
import BookmeetingsImage from '../../images/gallery/bookmeetings.jpg';
import ArcangelImage from '../../images/gallery/arcangel.jpg';
import AIOSImage from '../../images/gallery/aios.jpg';

export const experienceObj = {
    id: 'experience'
}

const ExperienceSection = ({id}) => {
    return (
        <div id={id}>
        <ExperienceContainer>
            <h1>EXPERIENCE</h1>
            <ExperienceCardsWrap>
                <ExperienceCard>
                    <ExperienceImage>
                    <div style={{
                            backgroundImage:`url(${BanaliImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '100%',
                            borderRadius: '20px 0 0 20px'
                            }}/>
                    </ExperienceImage>
                    <ExperienceInfo>
                        <h2>Banali Digital</h2>
                        <br/>
                        <span>Web Designer</span>
                        <br/>
                        <br/>
                        <GalleryBanali/>
                    </ExperienceInfo>
                </ExperienceCard> 
                <ExperienceCard>
                    <ExperienceImage>
                        <div style={{
                            backgroundImage:`url(${BookmeetingsImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '100%',
                            borderRadius: '20px 0 0 20px'
                            }}/>
                    </ExperienceImage>
                    <ExperienceInfo>
                        <h2>Bookmeetings</h2>
                        <br/>
                        <span>Web Designer</span>
                        <br/>
                        <br/>
                        <GalleryBanali/>
                    </ExperienceInfo>
                </ExperienceCard> 
                <ExperienceCard>
                    <ExperienceImage>
                    <div style={{
                            backgroundImage:`url(${ArcangelImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '100%',
                            borderRadius: '20px 0 0 20px'
                            }}/>
                    </ExperienceImage>
                    <ExperienceInfo>
                        <h2>Arcángel Soluciones</h2>
                        <br/>
                        <span>Web Developer</span>
                        <br/>
                        <br/>
                        <GalleryBanali/>
                    </ExperienceInfo>
                </ExperienceCard> 
                <ExperienceCard>
                    <ExperienceImage>
                    <div style={{
                            backgroundImage:`url(${AIOSImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '100%',
                            borderRadius: '20px 0 0 20px'
                            }}/>
                    </ExperienceImage>
                    <ExperienceInfo>
                        <h2>Personal Projects</h2>
                        <br/>
                        <span>Everything</span>
                        <br/>
                        <br/>
                        <GalleryBanali/>
                    </ExperienceInfo>
                </ExperienceCard> 
            </ExperienceCardsWrap>
        </ExperienceContainer>
        </div>
    )
}

export default ExperienceSection
