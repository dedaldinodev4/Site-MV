import styled from 'styled-components';


const SecTeam = styled.section`
    padding: 30px 0 0 0;
    background-color: #F8F9FA;
`;

const TeamPerson = styled.div`
    overflow: hidden;
    text-align: center;
    padding: 60px;

`;

const Person = styled.div`
    margin-bottom: 40px;


    a {
        display: inline-block;
        margin: 0 30px;
        width: 160px;
        height: 160px;
        overflow: hidden;
        border-radius: 50%;
        

        img {
            width: 100%;
            transition: 0.4s all;

            &:hover {
                cursor: pointer;
            }
        }
        

        
    }

    span {
        font-style: italic;
        display: block;
        font-size: 13px;
    }
`;

const Section = styled.div`
    width: 300px;
    margin: auto;
    font-size: 14px;
    color: #262425;
    text-align: center;
    height: auto;
    background: #fff;

    span:first-child {
        display: block;
        margin-top: 15px;
        margin-bottom: 5px;
        text-align: center;
        text-transform: uppercase;
        font-size: 18px;
        color: #006098;
    }


`;


export { SecTeam, TeamPerson, Person, Section };
