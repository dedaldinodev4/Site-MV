import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavMenu, UL, LI } from './styled';

const Navbar = () => {
    return (
        <Nav className="">
            
            <NavMenu className="nav-d">
                <label for="drop" className="toggle">Menu</label>
			    <input type="checkbox" id="drop"/>
                <UL className="menu">
                    <LI>
                        <a href="#home" className="active">
                            <Link to="/">Home</Link></a>
                    </LI>
                    <LI>
                        <a href="#about" className="active"><Link to="/about/">Sobre</Link></a>
                    </LI>
                    <LI>
                        <a href="#service" className="active"><Link to="/services/">Serviços</Link></a>
                    </LI>

                    <LI>
                        <a href="#contact" className="active"><Link to="/contacts/">Contactos</Link></a>
                    </LI>
                </UL>

                
            </NavMenu>
        </Nav>

    );
}

export default Navbar;