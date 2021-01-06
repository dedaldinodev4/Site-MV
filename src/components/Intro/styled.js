import styled from 'styled-components';

const IntroHero = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    
    background-size: cover;
`;

const TextBanner = styled.div`
    padding-top: 7vw;
`;

const TitleBanner = styled.h3`
    font-size: 4rem;
    font-weight: 600;
    color: #0078FF;

    span {
        color: #006098;
    }
`;

const TextInfo = styled.p`
    font-size: 16px;
    color: #51585f;
    max-width: 800px;
    margin: 20px 0;
`;

const Button = styled.a`
    padding: 14px 26px;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    -webkit-border-radius: 4px;
    -o-border-radius: 4px;
    -ms-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    background-color: #0078FF;

    &:hover{
        background-color: #FFF;
        color: #0078FF;
        border: 1px solid #0078FF;
    }
`;



export { IntroHero, TextBanner, TitleBanner, TextInfo, Button};