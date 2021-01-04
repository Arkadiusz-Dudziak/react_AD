import React, {Component} from "react"
import {render} from "react-dom"
import RegulationsPopup from "./RegulationsPopup"
import {Button, Form, FormGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Recaptcha from 'react-recaptcha';

import LinkConfirmPopup from "./LinkConfirmPopup"
import NewPasswordandRepeat from "../SharedModules/NewPassword"

//RECAPTCHA v2

class FormRegister extends Component
{
    constructor()
    {
        super()
        this.state = 
        {
            email: "emailo@emai.com",
            login: "login1234",
            error_message: "",
            regulations_ok: false,
            showRegulations: false,
            showRegistrationEnd: false,
            passwords_are_equal: false,
            isVerified: false //Recaptcha
        }
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleRegulationPopup = this.handleRegulationPopup.bind(this);
       this.handleRegistrationEnd = this.handleRegistrationEnd.bind(this);
       this.toggleFocus = this.toggleFocus.bind(this);
       this.set_passwords_equality = this.set_passwords_equality.bind(this);
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

    handleChange(event)
    {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]:checked}) :this.setState({[name]:value})
    }


    handleSubmit(event)
    {   
        event.preventDefault();
        if(this.state.password  && this.state.password_correct && this.state.regulations_ok && this.state.isVerified)
        {
            this.setState({showRegistrationEnd: true});
        } //TODO bez captchy tez przechodzi dalej
        else
        {
            console.log("sprawdź ponownie formularz rejestracji!");
            //console.log(this.state.password, this.state.password_correct, this.state.regulations_ok);
        }
            
    }

    handleRegulationPopup(event)
    {
        this.setState(
        {
            showRegulations: !this.state.showRegulations,
        });
    }

    handleRegistrationEnd(event)
    {
        this.setState(
        {
            showRegistrationEnd: !this.state.showRegistrationEnd,
        });
    }

    toggleFocus(event)
    {
        this.setState({visible: false})
    }

    set_passwords_equality(bool, bool2, pass)
    {
        this.setState({passwords_are_equal: bool, password_correct: bool2, password: pass})
    }




    render()
    {
        return(
            <div style={{display:"flex"}}>
                <div style={{marginTop: "auto", marginBottom: "auto", marginRight:"auto", marginLeft:"auto"}}>
                <h2>REJESTRACJA</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                    <h4>Email</h4>
                    <input type="email" 
                        name="email"
                        value={this.state.email} 
                        onChange={this.handleChange}
                        required
                    />
                    </FormGroup>
                    
                    <FormGroup>
                    <h4>Login</h4> 
                    <input type="text" 
                        name="login"
                        value={this.state.login} 
                        onChange={this.handleChange}
                        required
                    />
                    </FormGroup>
                    
                    <NewPasswordandRepeat action={this.set_passwords_equality}/>
                    
                    <label>
                        <input type="checkbox"
                            name="regulations_ok"
                            checked={this.state.regulations_ok}
                            onChange={this.handleChange}
                            required
                        />
                        Akceptuję&nbsp;
                    </label>
                    <span className="regulations_link"
                        onClick={this.handleRegulationPopup}>
                        regulamin
                    </span>
                    {this.state.showRegulations ? 
                        <RegulationsPopup
                            register = {this.state.register}
                            closePopup={this.handleRegulationPopup}
                        />
                        : null
                    }
                    {this.state.showRegistrationEnd ?
                        <LinkConfirmPopup
                            register={this.state.register}
                            closePopup={this.handleRegistrationEnd}
                        />
                        :null
                    }
                    <br/>
                    <FormGroup>
                        <Recaptcha
                            sitekey="6LfCKx4aAAAAAI3E7-kchlw_iZB_RsDxy9nb_ujM"
                            render="explicit"
                            onloadCallback={this.recaptchaLoaded}
                            verifyCallback={this.verifyCallback}
                            hl={"pl"}
                        />
                    </FormGroup>
                        
                    <label>
                        <Button type="submit">ZAREJESTRUJ SIĘ</Button>
                    </label>
                    
                    <br/>
                        Jednak mam konto, chce się zalogować
                    <br/>
                        <Button onClick={()=>this.props.action()}>LOGOWANIE</Button>
                    <br/>
                    
                </Form> 
                    
                </div>
            </div>
            
            

        )
        // {this.state.password}&nbsp;
        // {this.state.password_confirm}&nbsp;
        // {this.state.regulations_ok? "ok": "nie ok"} &nbsp;   
        // {this.state.password_correct? "pass correct":"pass_incorrect"} &nbsp;
        // {this.state.password} &nbsp;
        // {this.state.minChar? ">=8" : "za malo"} &nbsp;   
        // {this.state.number? "jest liczba" : "brak liczby"} &nbsp;
        // {this.state.specialChar? "jest specjalny" : "brak specjalnego"} &nbsp;
        //  onKeyDown={ (evt) => evt.key === '\'' && evt.preventDefault()}
    }
}

export default FormRegister