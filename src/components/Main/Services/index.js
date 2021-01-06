import React from 'react';
import { SecServices, Box, Icon} from './styled';
import {SecHeader} from '../styled';
const Services = () => {

    return(
        <SecServices>
            <div className="container">
                <SecHeader>
                    <h2>Serviços</h2>
                    <p>Busque pelos nossos serviços ou encomende um novo que cumpra com as necessidades do seu negócio.</p>
         
                </SecHeader>

                <div className="row">
                    <div className="col-lg-6">
                        <Box className="wow fadeInLeft">
                            <Icon>
                               <img src="/assets/images/services/layers-1.png" alt="layers"/>
                            </Icon>
                            <h4 class="title"><a href="#website">WebSites Profissionais</a></h4>
                            <p class="description">Criação de website com as funcionalidades que precisas, desde envio de Email, assistência técnica e pagamento por referência.</p>
            
                        </Box>
                    </div>
                    <div className="col-lg-6">
                        <Box className="wow fadeInRight">
                            <Icon>
                               <img src="/assets/images/services/network.png" alt="newtwork" />
                            </Icon>
                            <h4 class="title"><a href="#ednicare">Ednicare Software de Gestão</a></h4>
                            <p class="description">Sistema para gestão do sua entidade hospitar, incluindo, Hospitais Gerais, Clínicas, Centro Médico Ou Posto Médico, Consultório, Farmácia e Laboratório...</p>
            
                        </Box>
                    </div>
                    <div className="col-lg-6">
                        <Box className="wow fadeInLeft" data-wow-delay="0.2s">
                            <Icon>
                               <img src="/assets/images/services/smartphone-2.png" alt="phone"/>
                            </Icon>
                            <h4 class="title"><a href="#mobile">Criação de Aplicativos Mobile</a></h4>
                            <p class="description">Criação de aplicativos móveis para seu negócio, integrando todas as funcionalidades e requisitos que visão os objectivos da sua empresa.</p>
            
                        </Box>
                    </div>
                    <div className="col-lg-6">
                        <Box className="wow fadeInRight" data-wow-delay="0.2s">
                            <Icon>
                               <img src="/assets/images/services/settings-3.png" alt="setting"/>
                            </Icon>
                            <h4 class="title"><a href="#setting">Manutenção</a></h4>
                            <p class="description">Damos Soluções aos seus equipamentos hospitalares ou T.I, desde máquinas hospitares até os computadores da sua empresa.</p>
            
                        </Box>
                    </div>
                    
                </div>
            </div>
        </SecServices>
    );
}

export default Services;