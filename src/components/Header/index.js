import React from 'react';

import Navbar from './Navbar';
import {Hero, Logo, LogoItem} from './styled';

const Header = () => {
    return(
        <Hero>
            <div className="container-fluid">
				<div className="header d-lg-flex justify-content-between align-items-center py-3 px-sm-3">
                    <Logo id="logo">
                        <h1><a href="#index">
                        <LogoItem src="/assets/images/logoBlue.png"/>   
                            </a></h1>
                    </Logo>
                    <Navbar />
                    
                    
                </div>
                
                
            </div>
            
            
        </Hero>
    );
};

export default Header;


