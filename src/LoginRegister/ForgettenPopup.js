import React, {Component} from "react"
import Recaptcha from 'react-recaptcha';

import {Button, Form, FormGroup} from 'react-bootstrap'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

import {resetPassword} from "../FetchData"

library.add(faUndo);
class ForgottenPopup extends Component 
{
    constructor()
    {
        super();
        this.state = 
        {
            isVerified: false, //Recaptcha
            email: "",
            info: "",
            color: ""
        }
        //Recaptcha
       this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
       this.verifyCallback = this.verifyCallback.bind(this);
       this.submit = this.submit.bind(this);
       this.handleChange = this.handleChange.bind(this);
    }
    recaptchaLoaded() {
        console.log('capcha successfully loaded');
      }

    verifyCallback(response) { //TODO weryfikacja po stronie serwera!!
        console.log("weryfikacja captchy");
        if (response) {
            this.setState({
            isVerified: true
            })
        }
    }

    handleChange(event)
    {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]:checked}) :this.setState({[name]:value})
    }

    submit(event)
    {
        if(this.state.isVerified)
        {
            resetPassword(this.state.email);
            this.setState({
                email:"", 
                info: "Wiadomość z instrukcją dotyczącą zmiany hasła została wysłana na podany adres email.", 
                color: "green", 
                isVerified: false});
            this.captcha.reset(); 
        }
        else
        {
            this.setState({info: "Prosimy o weryfikację pola reCAPTCHA", color: "red"});
        }
        event.preventDefault();
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
                            value={this.state.email}
                            onChange={this.handleChange}
                            name="email"
                            required
                        />
                    </label>
                </FormGroup>
                <FormGroup>
                    <label style={{marginTop:"10px"}}>
                    <Recaptcha
                        sitekey="6LfCKx4aAAAAAI3E7-kchlw_iZB_RsDxy9nb_ujM"
                        render="explicit"
                        ref={e => (this.captcha = e)}
                        onloadCallback={this.recaptchaLoaded}
                        verifyCallback={this.verifyCallback}
                        hl={"pl"}
                    />
                    </label>
                </FormGroup>
                <p style={{color: this.state.color, marginBottom:0, fontWeight: "bold"}}>{this.state.info}</p>
                <Button className="btn-success mt-3 ButtonLoginAndRegister" type="submit" onClick={this.submit}>Resetuj hasło</Button>
            </Form>           
        </div>
        );
    }
}
export default ForgottenPopup