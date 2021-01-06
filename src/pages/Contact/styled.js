import styled from 'styled-components';


const Section = styled.div`
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

const SectionContact = styled.div`
    padding: 16rem 0;
`;

export { Section, SectionContact};