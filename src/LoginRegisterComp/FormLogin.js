import React, {Component} from "react"
import {Button, Form, FormGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
//import HelpPopup from "./HelpPopup";
import ForgottenPopup from "./ForgettenPopup";
library.add(faEye);
library.add(faEyeSlash);
class FormLogin extends Component
{
    constructor()
    {
        super()
        this.state = 
        {
            password_visible: false,
            forgotten_password: false
        }
        this.togglePassVisible = this.togglePassVisible.bind(this);
        this.toggleForgotten = this.toggleForgotten.bind(this);
        this.logIn = this.logIn.bind(this);
    }
    togglePassVisible(event)
    {
        this.setState(prevState =>
            {
                return{password_visible: !prevState.password_visible}
            }
        )
    }
    toggleForgotten()
    {
        this.setState(
            {
                forgotten_password: !this.state.forgotten_password
            });
    }
    logIn()
    {
        console.log("proces logowania");
    }
    render()
    {
        return(
            <div>
                <h1>LOGOWANIE</h1>
                <Form onSubmit={this.logIn}>
                    <FormGroup>
                    <label>
                        <h2>Email lub login</h2> 
                        <input type="text"
                            required
                        />
                    </label>
                    </FormGroup>
                    
                    <FormGroup>
                    <label>
                        <h2>Hasło</h2> 
                        <input type={this.state.password_visible? "text" : "password"}
                            required
                        />
                    </label>
                    <FontAwesomeIcon 
                            icon={this.state.password_visible? "eye" : "eye-slash"}
                            onClick={this.togglePassVisible}
                            cursor="pointer"
                        />
                    </FormGroup>

                    <label className="forgot_password" onClick={this.toggleForgotten}>Nie pamiętam hasła</label><br/>
                    
                    <label>
                        <Button type="submit">ZALOGUJ</Button>
                    </label>
                        <br/>
                        Nie masz konta? Śmiało, możesz się zarejestrować
                        <br/>
                    <label>
                        <Button onClick={()=>this.props.action()}>REJESTRACJA</Button>
                    </label>
                    <br/>
                </Form>


                
                {this.state.forgotten_password ? 
                    <ForgottenPopup
                        closePopup={this.toggleForgotten}
                    />
                    : null
                }
                
            </div>
        )
    }
    
    //
    //
}

export default FormLogin