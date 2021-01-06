import React from 'react';
import {Section, SectionBody} from './styled';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Content from '../../components/Footer/content';
const About = () => {

    return(
        <>
            <Header />
            <SectionBody>
                <div>
                    <h2>Sobre Nós</h2>
                    <h3>Quem Somos?</h3>
                    <hr/>
                   
                </div>
            </SectionBody>
            <Section>
                <h2>A MIND VISION</h2>
                <div className="section-about">
                    <div>
                    <h5>História</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div>
                        <h5>Visão e Valores</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                

                
            </Section>
            <Footer />
            <Content />
        </>
    );
}

export default About;