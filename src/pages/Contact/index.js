import React from 'react';
import Header from '../../components/Header';
import {Section, SectionContact} from './styled';
import Form from '../../components/Form';
import Footer from '../../components/Footer';
import Content from '../../components/Footer/content';

const Contact = () => {
    return(
        <>
            <Header />
            <Section>
                <div>
                    <h2>Contactos</h2>
                    <h3>Fala Connosco</h3>
                    <hr/>
                </div>
            </Section>
            <SectionContact>
                <Form />
            </SectionContact>
            <Footer />
            <Content />
        </>
    );
}

export default Contact;