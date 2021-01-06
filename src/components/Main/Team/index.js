import React,{ Component } from 'react';
import {SecHeader} from '../styled';
import { SecTeam,TeamPerson ,Person, Section} from './styled';
import members from '../../../utils/';


class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: [],
            name: '',
            job: ''
        }

        this.handlerOnclick = this.handlerOnclick.bind(this);
    }

    componentDidMount() {
        this.setState({members});
    }
  

    handlerOnclick = (event) => {
        const ID = parseInt(event.target.id);
        let name ='',
            job= '';

        const {members} = this.state;

        members.forEach(function(m){
            if(m.id === ID){
                name = m.name;
                job = m.job;
            }
        });

        this.setState({name, job});

        console.log(this.state, members);

    }

    render(){

        const { name, job } = this.state;

        return(
            <SecTeam id ="team" classNames="wow fadeInUp">
                <div className="container">
                    <SecHeader>
                    <h2>Nossa Equipa</h2>
                    <p>Conheça os membros que constituem a nossa equipa.</p>
                    </SecHeader>
                    <div className="row">
                        <TeamPerson>
                            <Person>
                                <a href="#client1">
                                    <img src="/assets/images/t1.jpg"  id="0" onClick={this.handlerOnclick} alt="0"/>
                                </a>
                                <a href="#client2">
                                    <img src="/assets/images/t2.jpg" id="1" onClick={this.handlerOnclick} alt="1"/>
                                </a>
                                <a href="#client3">
                                    <img src="/assets/images/t3.jpg" id="2" onClick={this.handlerOnclick} alt="2"/>
                                </a>
                                <a href="#client4">
                                    <img src="/assets/images/t1.jpg" id="3" onClick={this.handlerOnclick} alt="3"/>
                                </a>
                            </Person>
                            
                                <Section id="sec-team">
                                <span classNames="name">{name}</span>
                                    <span classNames="border"></span>
                                    <p>
                                        {job}
                                    </p>
                                </Section>
                            
                            
                            
                            
                        </TeamPerson>
                    </div>
                </div>
            </SecTeam>
        );
    }
    
}

export default Team;