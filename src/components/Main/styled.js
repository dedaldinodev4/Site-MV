import styled from 'styled-components';

const SecHeader = styled.section`
    margin-bottom: 30px;

    h2 {
        font-size: 32px;
        color: #006098;
        text-transform: uppercase;
        font-weight: 700;
        text-align: center;
        position: relative;
        padding-bottom: 20px; 

        &::before {
            content: '';
            position: absolute;
            display: block;
            width: 50px;
            height: 3px;
            background: #1282c4;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    p {
        padding: 0;
        margin: 0; 
        text-align: center;
    }
`;

const SecMain = styled.main`

`;

export { SecHeader, SecMain };