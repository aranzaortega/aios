import React from 'react'
import GalleryBanali from '../GalleryButton/GalleryBanali'
import GalleryBookmeetings from '../GalleryButton/GalleryBookmeetings'
import { ExperienceContainer, ExperienceCardsWrap, ExperienceCard, ExperienceImage, ExperienceInfo } from './ExperienceElements'; 
import BanaliImage from '../../images/gallery/banali.jpg';
import BookmeetingsImage from '../../images/gallery/bookmeetings.jpg';


const ExperienceSection = () => {
    return (
        <div>
        <ExperienceContainer>
            <h1>EXPERIENCE</h1>
            <ExperienceCardsWrap>
                <ExperienceCard>
                    <ExperienceImage>
                        <img src={BanaliImage} width='330'/>
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
                        <img src={BookmeetingsImage} width='330'/>
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
            </ExperienceCardsWrap>
        </ExperienceContainer>
        </div>
    )
}

export default ExperienceSection
