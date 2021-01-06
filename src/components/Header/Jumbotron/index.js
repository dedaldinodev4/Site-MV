import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Jumbo, JumboText, JumboHeader} from './styled';

export default () =>{
    return (
        <Jumbotron fluid className="border rounded">
            <Jumbo>
                <div className="row">
                    <div className="float-right text-center col-md-5 offset-md-6">
                        <JumboText>
                            <JumboHeader>Mind Vision</JumboHeader>
                            <div className="row">
                                <div className="col-md-8 offset-md-2">
                                    Copany <b>mission</b>
                                     and <b>vision</b> goes here.
                                </div>
                            </div>
                        </JumboText>
                    </div>
                </div>
            </Jumbo>
            
        </Jumbotron>
    );
}