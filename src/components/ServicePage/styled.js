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

const ServiceSection = styled.div`
    padding: 8em 0; 
   

`;

const ItemService = styled.div`
    width: 80%;
    margin-left: 30px;
    margin-bottom: 30px;

    h3 {
        font-weight: 300;
        margin-top: 0px;
        margin-bottom: 0px; 
        color: #0078FF;

    }

    p {
        margin: 20px 0;
        line-height: 24px;
        text-align: justify;
    }

`;

const Button = styled.button`
    outline: none;
    border: none;
    margin: 18px 0;
    padding: 10px 10px;
    background: #0078FF;
    color: #fff;
    letter-spacing: 2px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

const ButtonStyle = styled.a`
    outline: none;
    margin: 20px 0;
    padding: 10px 10px;
    color: #fff;
    background: #0078FF;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 30px;
    box-shadow: 0 0 0 5px #fff, 0 0 0 10px #0078FF;
    transition: .5s cubic-bezier(.52,1.65,1,1.31);
    font-weight: bold;
    cursor: pointer;


    &:hover{
        background: #006098;
        color: #fff;
        letter-spacing: 6px;
        box-shadow: 0 0 0 3px #fff, 0 0 0 8px #006098;
        transform: scaleY(.9);
       
    }


`;


export {Section, ServiceSection,ItemService,Button, ButtonStyle};