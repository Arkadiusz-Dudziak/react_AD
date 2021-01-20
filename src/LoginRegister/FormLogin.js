import React, {Component} from "react"
import {Button, Form, FormGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
//import HelpPopup from "./HelpPopup";
import ForgottenPopup from "./ForgettenPopup";
import Cookies from 'universal-cookie'

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
        //uzytkownik
        var token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InNwb3J0b3dpZWMzNSIsInVwcmF3bmllbmlhIjoidXp5dGtvd25payIsImVtYWlsIjoiYWRyZXMxQGFkcmVzLmNvbSJ9.vNI3-PNIxt5XxPP6tarsvDU-RISNYhlNDAyzoO7noC0";
        //administrator
        var token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluMzQiLCJ1cHJhd25pZW5pYSI6ImFkbWluaXN0cmF0b3IifQ.qahY4iORvKoM24QQwwdpbQHF6scboV6SdKBQVDiU7gY"
        const cookies = new Cookies();
        cookies.set('user_data', token1, { path: '/' });

        window.location.reload(false);
        //console.log(cookies.get('user_data')); // Pacman
        //console.log(decode1);
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
                            //required TODO odkomentować
                        />
                    </label>
                    </FormGroup>
                    
                    <FormGroup>
                    <label>
                        <h2>Hasło</h2> 
                        <input type={this.state.password_visible? "text" : "password"}
                            // required TODO odkomentować
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
                        <Button onClick={this.logIn}>ZALOGUJ</Button>
                    </label>
                        <br/>
                        Nie masz konta? Możesz się zarejestrować
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