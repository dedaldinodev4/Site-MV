import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';


const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component= {Home} />
            <Route path="/about/" component= {About} />
            <Route path="/services/" component= {Service} />
            <Route path="/contacts/" component= {Contact} />
            <Route path="/pricing/:id" component= {Pricing} />
        </Switch>
    </BrowserRouter>
);


export default Routes;