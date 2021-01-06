import styled from 'styled-components';


const AboutSection = styled.section`
    padding: 60px 0 30px 0;

    .about-image {
        overflow: hidden;
    }

    img {
        margin-left: -15px;
        max-width: 100%; 
    }

    h2 {
        color: #006098;
        font-weight: 700;
        font-size: 36px;
        font-family: "Raleway", sans-serif; 
    }

    h3 {
        color: #555;
        font-weight: 300;
        font-size: 18px;
        line-height: 26px;
        font-style: italic;
    }

    p {
        line-height: 26px;

        &:last-child {
            margin-bottom: 0;
        }

    }

    i {
        font-size: 20px;
        padding-right: 4px;
        color: #1282C4;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    ul li {
        padding-bottom: 10px;
    }
`;

export default AboutSection;