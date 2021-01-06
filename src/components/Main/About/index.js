import React from 'react';
import AboutSection from './styled';

const About = () => {
    
    return(
       
        <AboutSection id="about" className="wow fadeInUp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 about-img">
                        <img src="/assets/images/Stressfree.png" alt="" />
                    </div>

                    <div className="col-lg-6 content">
                        <h2>Quem Somos ?</h2>
                        <h3>Mind Vision, somos uma empresa Angolana focada no área tecnológica.Tendo como objectivo primordial solucionar problemas diversos de T.I ...</h3>

                        <ul>
                            <li><i className="ion-android-checkmark-circle"></i> Desenvolvimento de Softwares.</li>
                            <li><i className="ion-android-checkmark-circle"></i> Criação de Websites profissionais.</li>
                            <li><i className="ion-android-checkmark-circle"></i>Criação de Aplicativo Mobile.</li>
                            <li><i className="ion-android-checkmark-circle"></i> Manutenção de Equipamentos Hospitalares.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </AboutSection>
    );
};


export default About;