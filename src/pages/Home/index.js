import React from 'react';
import Header from '../../components/Header';
import Intro from '../../components/Intro';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import Content from '../../components/Footer/content';

const Home = () => {

    return(
        <div>
            <Header />
            <Intro />
            <Main />
            <Footer />
            <Content />
        </div>
    );
}

export default Home;