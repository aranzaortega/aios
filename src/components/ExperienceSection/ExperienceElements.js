import styled from 'styled-components';

export const ExperienceContainer = styled.div`
    text-align: center;
    background-color: #010606;
    height : 100%;
    color: white;
    padding: 6%;
    display: grid;
    place-items: center center;
`;

export const ExperienceCardsWrap = styled.div`
    display: grid;
    grid-template-columns: 500px 500px; 
    padding: 20px;
    grid-gap: 40px;

    @media screen and (max-width: 768px){
        grid-template-columns: 100%; 
    }
`;

export const ExperienceCard = styled.div`
    display: flex;
    background-color: white;
    color: black;
    border-radius: 20px;
    box-shadow: 0 0 30px rgba(0,0,0,0.18);
    margin: 1rem;

    @media screen and (max-width: 768px){
        display: grid;
        grid-template-columns: 100%;
    }
`;

export const ExperienceImage = styled.div`
    width: 50%;
    background-size: cover;
    background-position: center;
`;

export const ExperienceInfo = styled.div`
    padding: 5%;
`;
