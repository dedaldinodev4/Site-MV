import React from 'react';
import { SecMain } from './styled';
import About from './About';
import Services from './Services';
import Team from './Team';
import Clients from './Clients';

const Main = () => {

    return(
        <SecMain id="main">
            <Services />
            <About/>
            <Team />
            <Clients />
        </SecMain>
        
    );
}


export default Main;