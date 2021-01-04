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
        <div className='popup'>
            <div className='popup_inner'>
                <span style={{float: "right", fontSize: "30px", paddingRight: "15px"}}>
                    <FontAwesomeIcon 
                    icon="undo" 
                    onClick={this.props.closePopup}
                    cursor="pointer"
                    />
                </span>

                <h1>Zapomniałeś hasła?</h1>
                <p>
                    Nikt nie ma dstępu do Twojego hasła, więc nie możemy go przesłać. W celu odzyskania konta
                    wyślemy email z linikiem resetującym hasło na adres email podany podczas rejestracji.
                </p>

                <Form>
                    <FormGroup>
                        <label>
                            <h2>Email</h2> 
                            <input type="email"
                                required
                            />
                        </label>
                    </FormGroup>
                    <FormGroup>
                        <label>
                        <Recaptcha
                            sitekey="6LfCKx4aAAAAAI3E7-kchlw_iZB_RsDxy9nb_ujM"
                            render="explicit"
                            onloadCallback={this.recaptchaLoaded}
                            verifyCallback={this.verifyCallback}
                            hl={"pl"}
                        />
                        </label>
                        
                    </FormGroup>
                    <Button>Resetuj hasło</Button>
                </Form>           
            </div> 
        </div>
        );
    }
}
export default ForgottenPopup