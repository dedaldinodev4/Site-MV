import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`

    text-align: center;
    font-size: 14px;

    div {
        div {
            strong {

               
            }
        }
    }

`;


const Content = () => {
    const year = new Date().getFullYear();

    return (

        <Footer>
            <div>
                <div>
                    <strong>
                    <p>{year}© Mind Vision. Todos os direitos reservados.</p>
                    </strong>
                </div>
            </div>
        </Footer>

    );
};


export default Content;