import React from 'react';
import {SecHeader} from '../styled';
import { SecClients } from './styled';

const Clients = () => {

    return (
        <SecClients className="wow fadeInUp">
            <div className="container">
                <SecHeader>
                    <h2>Clientes</h2>
                    <p>Conheça alguns dos nossos clientes, para notares quão satisfeito eles estão com nossos produtos.</p>
                </SecHeader>

                <div class="owl-carousel clients-carousel">
                    <img src="/assets/images/client-1.png" alt="client-1"/>
                    <img src="/assets/images/client-2.png" alt="client-2"/>
                    <img src="/assets/images/clients/client-3.png" alt="client-3"/>
                </div>
            </div>
        </SecClients>
    );
}

export default Clients;