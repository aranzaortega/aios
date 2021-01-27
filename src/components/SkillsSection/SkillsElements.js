import styled, { css } from 'styled-components';

export const gradient1 = degs => css`
    background:
    linear-gradient(
        ${degs || 130}deg,
        #E72580 0%,
        blue 100%
    );
`;
export const SkillsContainer = styled.div`
    background: #010606;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    justify-content: center;
    padding: 4%;
`;

export const Card = styled.div`
    position: relative;
    overflow: hidden;
    width: 15rem;
    height: fit-content;
    margin: 2% auto;
    padding: 2%;
    border-radius: 0.5rem;
    color: white;
    ${gradient1()};
    box-shadow: 0 24px 30px 3px rgba(0, 0, 0, 0.25),
    0 9px 46px 8px rgba(0, 0, 0, 0.25),
    0 11px 15px -7px rgba(0, 0, 0, 0.25);
    transition: transform .5s;

    &:hover{
        transform: scale(1.2);
    }
`;

export const Content = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    flex: 0 0 auto;
    margin-bottom: 2rem;
    border-radius: 50%;
    font-size: 40px;
    color: white;
    ${gradient1()};
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0,025);
`;

export const Title = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? 'black' : 'white')};
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Subtitle = styled.h2`
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? 'black' : 'white')};

    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`;

export const FeaturesListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.32rem;
`;