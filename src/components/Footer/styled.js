import styled from 'styled-components';


const SecFooter = styled.section`
    padding: 60px 0 30px 0;
    background-color: #F8F9FA;
`;

const Widget = styled.div`

    margin-top: 15px;

    h4 {
        font-size: 16px;
        text-transform: uppercase;
        margin-bottom: 20px;
        position: relative;
        font-weight: 700;

        &::before {
            border-bottom: 3px solid #0078FF;
            content: "";
            height: 3px;
            width: 50%;
            position: absolute;
            bottom: 0px;
            left: 0px;
            
        }
    }

    p {
        font-weight: 400;
        font-size: 14px;
        padding-bottom: 20px;
    }

    ul {
        list-style: none;


        li {
            float: left;
            margin: 5px;
            border: 1px solid #0078FF;;
            border-radius: 4px;
            padding: 10px;
            font-size: 16px;
            font-weight: 500;
            text-transform: uppercase;
            color: #FFF;
            cursor: pointer;

            &:hover {
                background-color: #0078FF;
            }

            &:hover a {
                color: #fff;
            }
        }

    }



`;

const LinkContact = styled.div`
    margin-top: 15px;

    h4 {
        font-size: 16px;
        text-transform: uppercase;
        margin-bottom: 20px;
        position: relative;
        font-weight: 700;

        &::before {
            border-bottom: 3px solid #0078FF;
            content: "";
            height: 3px;
            width: 50%;
            position: absolute;
            bottom: 0px;
            left: 0px;
        }
    }

    ul {
        list-style: none;
        li {
            // margin-bottom: 12px;
            

            span {
                position: absolute;
                left: 0;
                top: 1px;
                padding-right: 6px;
            }

            p {
                padding-left: 25px;
                position: relative;
                font-size: 16px;
                font-weight: 300;
                padding-right: 10px;
                line-height: 24px;

                a {
                    
                    &:hover{
                        color: #0078FF;
                    }
                }
            }
        }
        
    }
`;

const FooterContent = styled.footer`
    background-color: #F8F9FA;
    width: 100%;
    div {
        strong {
            text-align: center;
        }
    }

`;








export { SecFooter, Widget, LinkContact, FooterContent};