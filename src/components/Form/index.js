import React from 'react';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FormSection, Button} from './styled';

const Form = () => {


    return(
        <div className="row">

        <FormSection>

            <form method="GET" action="">
                <input type="text" name="item-name" placeholder="Nome"/>
                <input type="text" name="item-email" placeholder="Email"/>
                <input type="text" name="item-subject" placeholder="Assunto"/>
                <textarea rows="4" cols="80" id="msg" placeholder="Mensagem"></textarea>

                <Button type="submit" name="button">Enviar <FontAwesomeIcon icon={faPaperPlane} /></Button>
        </form>
        

        </FormSection>
        </div>
    );
}

export default Form;