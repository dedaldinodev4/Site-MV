import styled from 'styled-components';


const Section = styled.section`
    padding: 60px 0 30px 0;
    text-align: center;

    div.section-about {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(2, 1fr);
        text-align: left;
    }

    
    @media screen and (max-width: 580px) {

        div.section-about {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(1, 1fr);
            text-align: left;
        }
    }   

    h2 {
        font-size: 30px;
        color: #0078FF;
        font-weight: 600;
        margin-bottom: 40px;
    }
    h5 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
        text-transform: uppercase;
        color: #0078FF;
        text-align: center;
        margin: 0 20px;
    }

    p {
        margin: 20px;
        line-height: 24px;
        text-align: justify;
    }


`;
const SectionBody = styled.section`
    padding: 8rem 0;
    background: #F8F9FA;
    div {
        max-width: 1200px;
        text-align: center;
        margin: 0 auto;
        padding: 0 3rem;

        h3 {
            font-weight: 300;
            margin-top: 0px;
            margin-bottom: 0px;
            color: #0078FF;
        }

        h2 {
            text-transform: uppercase;
            font-weight: 800;
            font-size: 14px;
            letter-spacing: 12px;
            margin-bottom: 2em;
            color: #0078FF;
        }

        hr {
            background: #0078FF;
            width: 50%;
        }
    }
`;


export { Section, SectionBody };