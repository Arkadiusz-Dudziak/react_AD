import React, {Component} from "react"
import Recaptcha from 'react-recaptcha';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button, Form, FormGroup} from 'react-bootstrap'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

library.add(faUndo);
class ForgottenPopup extends React.Component 
{
    constructor()
    {
        super();
        this.state = 
        {
            isVerified: false //Recaptcha
        }
        //Recaptcha
       this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
       this.verifyCallback = this.verifyCallback.bind(this);
    }
    recaptchaLoaded() {
        console.log('capcha successfully loaded');
      }

    verifyCallback(response) { //TODO weryfikacja po stronie serwera!!
        console.log("weryfikacja captchy")
        if (response) {
            this.setState({
            isVerified: true
            })
        }
    }
    render() 
    {
        return (
        <div>
                

                <h1>Zapomniałeś hasła?</h1>
                <p id="forgotten_pass_info">
                    Nikt nie ma dostępu do Twojego hasła, więc nie możemy go przesłać. <br/>W celu odzyskania konta
                    wyślemy email z linikiem resetującym hasło na adres email podany podczas rejestracji.
                </p>

                <Form>
                    <h2>Email</h2> 
                    <FormGroup>
                        <label>
                            <input type="email"
                                className="form-control"
                                required
                            />
                        </label>
                    </FormGroup>
                    <FormGroup>
                        <label style={{marginTop:"10px"}}>
                        <Recaptcha
                            sitekey="6LfCKx4aAAAAAI3E7-kchlw_iZB_RsDxy9nb_ujM"
                            render="explicit"
                            onloadCallback={this.recaptchaLoaded}
                            verifyCallback={this.verifyCallback}
                            hl={"pl"}
                        />
                        </label>
                        
                    </FormGroup>
                    <Button className="btn-success mt-3 ButtonLoginAndRegister" type="submit">Resetuj hasło</Button>
                </Form>           
        </div>
        );
    }
}
export default ForgottenPopup