import React from 'react';
import { Link } from 'react-router-dom';
import {faDesktop,faMobile,faCogs,faLaptopCode} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


//** Components UI **//
import {Section, ServiceSection, ItemService, ButtonStyle} from './styled';


const ServicePage = () => {

    return(
        <>
            <Section>
                <div>
                    <h2>Nossos Serviços</h2>
                    <h3>Serviços disponíveis</h3>
                    <hr/>
                </div>
            </Section>
            <ServiceSection>
                <div className="service-column">
                    <ItemService>
                        <h3><FontAwesomeIcon icon={faLaptopCode} /> Criação de Websites Profissionais</h3>
                        <p>
                            Criação de website com as funcionalidades que precisas, desde envio de Email, assistência técnica e pagamento por referência.Criação de website com as funcionalidades que precisas, desde envio de Email, assistência técnica e pagamento por referência.
                        </p><br/>
                        <Link to="/pricing/1">
                            <ButtonStyle>Tabela de Preço</ButtonStyle>
                        </Link>
                    </ItemService>

                    <ItemService>
                        <h3><FontAwesomeIcon icon={faDesktop} /> Ednicare - Sistema de Gestão Hospitar</h3>
                        <p>
                            Sistema para gestão do sua entidade hospitar, incluindo, Hospitais Gerais, Clínicas, Centro Médico Ou Posto Médico, Consultório, Farmácia e Laboratório...Sistema para gestão do sua entidade hospitar, incluindo, Hospitais Gerais, Clínicas, Centro Médico Ou Posto Médico, Consultório, Farmácia e Laboratório...  
                        </p>
                        <br/>
                        <Link to="/pricing/2">
                            <ButtonStyle>Tabela de Preço</ButtonStyle>
                        </Link>
                    </ItemService>
                </div><br/>
                <div className="service-column">
                    <ItemService>
                        <h3><FontAwesomeIcon icon={faMobile} /> Criação de Aplicativos mobile(Android, IOS)</h3>
                        <p>
                            Criação de aplicativos móveis para seu negócio, integrando todas as funcionalidades e requisitos que visão os objectivos da sua empresa.Criação de aplicativos móveis para seu negócio, integrando todas as funcionalidades e requisitos que visão os objectivos da sua empresa.  
                        </p>
                        <br/>
                        <Link to="/pricing/3">
                            <ButtonStyle>Tabela de Preço</ButtonStyle>
                        </Link>
                    </ItemService>

                    <ItemService>
                        <h3><FontAwesomeIcon icon={faCogs} /> Manutenção de Equipamentos</h3>
                        <p>
                            Damos Soluções aos seus equipamentos hospitalares ou T.I, desde máquinas hospitares até os computadores da sua empresa.Damos Soluções aos seus equipamentos hospitalares ou T.I, desde máquinas hospitares até os computadores da sua empresa.  
                        </p>
                        <br/>
                        <Link to="/pricing/4">
                            <ButtonStyle>Tabela de Preço</ButtonStyle>
                        </Link>
                    </ItemService>
                </div>
            </ServiceSection>
        </>
    );
}

export default ServicePage;