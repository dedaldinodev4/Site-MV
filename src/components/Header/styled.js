import styled from 'styled-components';


const Hero = styled.header`
    -webkit-box-shadow: 0.33333rem 0 1.33333rem rgba(87, 87, 87, .1);
    -moz-box-shadow: 0.33333rem 0 1.33333rem rgba(87, 87, 87, .1);
    box-shadow: 0.33333rem 0 1.33333rem rgba(87, 87, 87, .1);
    background: #fff;
`;

const Logo = styled.div`
    a {
        float: left;
        display: initial;
        font-size: 32px;
        color: #705ecf;
        text-shadow: 2px 5px 3px rgba(0, 0, 0, 0.06);
        padding: 0;
        font-weight: 600;
    }
`; 


const LogoItem = styled.img`
    padding: 0;
    margin: 0;
`;


const Search = styled.div`
    
    input[type="search"] {
        outline: none;
        padding: 12px 15px;
        color: #000;
        font-size: 13px;
        border: none;
        letter-spacing: 1px;
        background: #f7f7f7;
    }

    button {
        background: #05b993;
        color: #fff;
        border: none;
        font-size: 14px;
        padding: 10px 15px;
        -webkit-border-radius: 0px;
        -o-border-radius: 0px;
        -moz-border-radius: 0px;
        -ms-border-radius: 0px;
        border-radius: 0;
    }
`;


export { Hero, Logo,LogoItem,Search};

