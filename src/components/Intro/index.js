import React from 'react';
import Particles from 'react-particles-js';
import { IntroHero, TextBanner, TitleBanner, TextInfo, Button } from './styled';

const Intro = () => {

    return (
        <IntroHero className="parallax-section">
           
           
            <div className="container">
				<div className="d-md-flex">
					<TextBanner>
						<TitleBanner>
                            Seja<br/><span>Bemvindo</span>
                            </TitleBanner>
						<TextInfo>Somos uma empresa Angolana com o foco na área tecnológica.Tendo como objectivo primordial solucionar problemas diversos de T.I...</TextInfo>
						<Button href="#about">Ler Mais</Button>
                    </TextBanner>
					<div className="banner-img">
						<img src="/assets/images/b1.png" alt="" className="img-fluid" />
					</div>
					{/* <Particles /> */}
				</div>
			</div>

            
        </IntroHero>
    );
}

export default Intro;