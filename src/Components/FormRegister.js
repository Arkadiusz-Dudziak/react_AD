import React, {Component} from "react"
import {render} from "react-dom"
import RegulationsPopup from "./RegulationsPopup"
import {Button, Form, FormGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import LinkConfirmPopup from "./LinkConfirmNotification"

library.add(faEye);
library.add(faEyeSlash);
class FormRegister extends Component
{
    constructor()
    {
        super()
        this.state = 
        {
            email: "",
            login: "",
            password: "",
            password_confirm: "",
            error_message: "",
            minChar: null,
            number: null,
            visible: true,
            specialChar: null,
            regulations_ok: false,
            showRegulations: false,
            showRegistrationEnd: false,
            password_correct: false,
            password_visible: false
        }
       this.handleChange = this.handleChange.bind(this)
       this.handlePasswordChange = this.handlePasswordChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
       this.handleRegulationPopup = this.handleRegulationPopup.bind(this)
       this.handleRegistrationEnd = this.handleRegistrationEnd.bind(this)
       this.toggleFocus = this.toggleFocus.bind(this)
       this.togglePassVisible = this.togglePassVisible.bind(this)
    }

    handleChange(event)
    {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]:checked}) :this.setState({[name]:value})
    }

    handlePasswordChange(event)
    {
        const isNumberRegx = /\d/;
        const specialCharacterRegx = /[  !@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]/;
        const {value, name} = event.target;
        this.setState({[name]: value})
        this.setState({
            minChar: value.length >= 7 ? true : false,
            number: isNumberRegx.test(value)? true : false,
            specialChar: specialCharacterRegx.test(value)? true : false,
        }, () =>
        {
            if(this.state.minChar && this.state.number && this.state.specialChar)
            {
                this.setState({password_correct: true})
            }
            else
            {
                this.setState({password_correct: false})
            }
        }
        

        );
    }

    handleSubmit(event)
    {   
        event.preventDefault();
        if(this.state.password == this.state.password_confirm && this.state.password_correct && this.state.regulations_ok)
        {
            this.setState({showRegistrationEnd: true})
        }
        else
            console.log("sprawdź ponownie formularz rejestracji!")
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
        this.setState(prevState =>
            {
                return{visible: !prevState.visible}
            }
        )
    }

    togglePassVisible(event)
    {
        this.setState(prevState =>
            {
                return{password_visible: !prevState.password_visible}
            }
        )
    }

    render()
    {
        return(
            <div>
                <h1>REJESTRACJA</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                    <h2>Email</h2>
                    <input type="email" 
                        name="email"
                        value={this.state.email} 
                        onChange={this.handleChange}
                        required
                    />
                    </FormGroup>
                    
                    <FormGroup>
                    <h2>Login</h2> 
                    <input type="text" 
                        name="login"
                        value={this.state.login} 
                        onChange={this.handleChange}
                        required
                    />
                    </FormGroup>
                    
                    <FormGroup>
                    <label>
                        <h2>Hasło</h2> 
                        <input type={this.state.password_visible? "text" : "password"}
                            name="password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            onFocus={this.toggleFocus}
                            onBlur={this.toggleFocus}
                            maxLength="128"
                            required
                        />
                    </label>
                    <FontAwesomeIcon 
                        icon={this.state.password_visible? "eye" : "eye-slash"}
                        onClick={this.togglePassVisible}
                        cursor="pointer"
                    />
                    </FormGroup>
                    

                    <label style={this.state.visible? {display: "none"}:{display:"block"}}>
                         Hasło musi posiadać: <br/>
                        <span style={this.state.minChar? {color: "#00b041"}: {color:"#e62929"}}><b>co najmniej 8 znaków</b></span><br/>
                        <span style={this.state.number? {color: "#00b041"}: {color:"#e62929"}}><b>co najmniej 1 cyfrę</b></span><br/>
                        <span style={this.state.specialChar? {color: "#00b041"}: {color:"#e62929"}}><b>co najmniej 1 znak specjalny</b></span><br/>
                        
                    </label>
                        
                    <FormGroup>
                    <label>
                        <h2>Powtórz hasło</h2> 
                        <input type={this.state.password_visible? "text" : "password"} 
                            name="password_confirm"
                            value={this.state.password_confirm}
                            onChange={this.handleChange}
                            maxLength="128"
                            required
                        />
                    </label>
                    </FormGroup>
                    
                    


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