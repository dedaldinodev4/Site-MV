import React from 'react';
import {faMapMarkedAlt, faPhoneSquare, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SecFooter, Widget, LinkContact} from './styled';

const Footer = () => {

    return(
        <SecFooter>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <Widget>
                            <h4>Sobre Nós</h4>
                            <p>Somos uma empresa Angolana com o foco na área tecnológica.Tendo como objectivo primordial solucionar problemas diversos de T.I, desenvolvemos soluções inovadoras.
                            Somos uma empresa Angolana com o foco na área tecnológica.Tendo como objectivo primordial solucionar problemas diversos de tecnológica da informação.</p> 
													
                        </Widget>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <LinkContact>
                            <h4>Contactos</h4>
                            <ul>
                                <li>
                                    <p><span><FontAwesomeIcon icon={faMapMarkedAlt} /></span>   Angola / Luanda / Rangel </p>
                                </li>
                                <li>
                                    <p><span><FontAwesomeIcon icon={faPhoneSquare} /></span> <a href="tel:+244-900 000 000">(+244) 922-167-714</a></p>
                                </li>
                                <li>
                                    <p><span><FontAwesomeIcon icon={faEnvelope} /></span> <a href="mailto:mindvisionmv@gmail.com">mindvisionmv@gmail.com</a></p>
                                </li>
                            </ul>
                        </LinkContact>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <Widget>
                            <h4>Redes Sociais</h4>
                            <ul>
                                <li><a href="#facebook">Facebook</a></li>
                                <li><a href="#twitter">Twitter</a></li>
                                <li><a href="#Instagram">Instagram</a></li>
                                <li><a href="#linkedin">Linkedin</a></li>
                            </ul> 
													
                        </Widget>
                    </div>
                    
                    
                </div>
            </div>
        </SecFooter>
    );
}

export default Footer;