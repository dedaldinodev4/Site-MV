import React from 'react';
import {faLaptopCode,faCheck,faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Section, PriceSection} from './styled';


const PricingPage = () => {

    return (
        <>
            <Section>
                <div>
                    <h2>Tabela de Preços</h2>
                    <h3>Preços</h3>
                    <hr/>
                   
                </div>
            </Section>
            <PriceSection>
                <section>
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                   <div className="card text-center">
                                        <div className="title">
                                            <FontAwesomeIcon icon={faLaptopCode} className="fa" />
                                            <h2>Básico</h2>
                                        </div>
                                        <div className="price">
                                            <h4><sup>Akz</sup>110.400.00</h4>
                                        </div>
                                        <div className="option">
                                            <ul>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Página Inicial
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Serviços 
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Sobre a empresa
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Contactos
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faTimes} /> Painel de Controle
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faTimes} /> Newsletter
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Links para as Redes Sociais
                                                </li>
                                                
                                            </ul>
                                        </div>
                                        <a href="#">Solicitar Agora!</a>
                                    </div> 
                                </div>
                                <div className="col-sm-4">
                                   <div className="card text-center">
                                        <div className="title">
                                            <FontAwesomeIcon icon={faLaptopCode} className="fa" />
                                            <h2>E-commerce</h2>
                                        </div>
                                        <div className="price">
                                            <h4><sup>Akz</sup>170.400.00</h4>
                                        </div>
                                        <div className="option">
                                            <ul>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Página Inicial
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Sobre a Empresa
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faTimes} /> Newsletter
                                                </li>

                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Pagamento online(por referência)
                                                </li>
                                                
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Gestão de Estoque
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Contactos e Mapa
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Links para as Redes Sociais
                                                </li>
                                               
                                            </ul>
                                        </div>
                                        <a href="#">Solicitar Agora!</a>
                                    </div> 
                                </div>
                                <div className="col-sm-4">
                                   <div className="card text-center">
                                        <div className="title">
                                            <FontAwesomeIcon icon={faLaptopCode}  className="fa"/>
                                            <h2>Pró Business</h2>
                                        </div>
                                        <div className="price">
                                            <h4><sup>Akz</sup>199.400.00</h4>
                                        </div>
                                        <div className="option">
                                            <ul>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Página Inicial
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Serviços
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Newsletter
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Contactos e Mapa
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Galeria de Imagens
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Painel de Controle
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCheck} /> Links para as Redes Sociais
                                                </li>

                                            </ul>
                                        </div>
                                        <a href="#">Solicitar Agora!</a>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </PriceSection>
            
        </>
    );
}

export default PricingPage;