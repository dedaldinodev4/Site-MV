import styled from 'styled-components';

const SecServices = styled.section`
    padding: 30px 0 0 0;
    background-color: #F8F9FA;
`;

const Box = styled.div`
    padding: 40px;
    margin-bottom: 40px;
    box-shadow: 10px 10px 15px  rgba(73, 78, 92, 0.1);
    background: #FFF;
    transition: 0.4s;

    &:hover {
        box-shadow: 0px 0px 30px rgba(73, 78, 92, 0.15);
        transform: translateY(-10px);
        -webkit-transform: translateY(-10px);
        -moz-transform: translateY(-10px); 
    }

    h4 {
        margin-left: 100px;
        font-weight: 700;
        margin-bottom: 15px;
        font-size: 22px; 
    }

    h4 a {
        color: #0078FF; 
    }

    p {
        font-size: 14px;
        margin-left: 100px;
        margin-bottom: 0;
        line-height: 24px;
    }
`;

const Icon = styled.div`
    float: left;

    img {
        width: 70px;
        height: 70px;
    }

`;

export { SecServices, Box, Icon };