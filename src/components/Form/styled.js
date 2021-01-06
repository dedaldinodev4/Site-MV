import styled from 'styled-components';


const Header = styled.div`
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
        color: #fff;
        font-size: 46px;
    }

    p {
        color: #fff;
        font-size: 14px;
        margin-bottom: 20px; 
    }

`;

const FormSection = styled.div`
    margin-top: 100px 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
  

    input {
        width: 100%;
        margin: 20px 0;
        background: rgba(0,0,0,0);
        border: none;
        border-bottom: 1px solid #0078ff;
        color:  #0078ff; 

    }

    #msg {
        margin-top: 60px;
        background: rgba(0,0,0,0);
        border: none;
        border-bottom: 1px solid #0078ff;
        color:  #0078ff; 

        &::placeholder {
            color: #75758B;
        }
    }

    

   
`;

const Button = styled.button`
    padding: 15px 32px;
    font-size: 16px;
    background: #0078ff;
    border: none;
    border-radius: 4px;
    margin-top: 30px;
    color: #fff;
    text-transform: uppercase;
`;

export { Header, FormSection, Button}