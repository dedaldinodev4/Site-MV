import styled from 'styled-components';


const Jumbo = styled.div`
    background: url("/assets/images/bg.jpg") no-repeat;
    background-size: 100% 100%;
    height: 400px;
    z-index: -2;
`;

const JumboText = styled.h3`
    padding: 10px;
    backgound-color: white;
    opacity: 0.8;
`;

const JumboHeader = styled.div`
    margin-top: 60px;
    padding:10px;
    font-size: 2.25rem;
    line-height: inherit;
    white-space: nowrap;
`;

export { Jumbo, JumboText, JumboHeader};