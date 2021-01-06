import styled from 'styled-components';

const Nav = styled.div`
    
`;

const NavMenu = styled.nav`
    
    margin: 0;
    padding: 0;

    &:after {
        content: "";
        display: table;
        clear: both;
    }

    a {
        color: #202428;
        font-size: 15px;
        letter-spacing: .5px;
        margin: 0 14px;
        font-weight: 700;

        &:hover {
            color: #0078FF;
        }
    }


`;

const UL = styled.ul`
    float: right;
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
`;

const LI = styled.li`
    margin: 0px;
    display: inline-block;
    float: left;

    &:hover>ul {
        display: inherit;
    }
`;







export { Nav, NavMenu, UL, LI };