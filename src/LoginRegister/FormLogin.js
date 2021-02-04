import React, {Component} from "react"
import {Form, FormGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
//import HelpPopup from "./HelpPopup";
import ForgottenPopup from "./ForgettenPopup";
import Cookies from 'universal-cookie'
import { sha256 } from "js-sha256";
import { authorizateUser, loginSelf } from "../FetchData";
// import { isCompositeComponent } from "react-dom/test-utils";

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
            forgotten_password: false,
            login:"",
            password: ""
        }
        this.togglePassVisible = this.togglePassVisible.bind(this);
        this.toggleForgotten = this.toggleForgotten.bind(this);
        this.logIn = this.logIn.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event)
    {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]:checked}) :this.setState({[name]:value})
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
    hash_password()
    {
        //console.log(sha256(this.state.password))
        return sha256.hmac('example_key', this.state.password)
    }
    logIn()
    {
        console.log("proces logowania");
        var password_hash = this.hash_password();
        loginSelf(this.state.login, password_hash);
        //authorizateUser(this.state.login, password_hash)
        
        //uzytkownik
        // var token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InNwb3J0b3dpZWMzNSIsInVwcmF3bmllbmlhIjoidXp5dGtvd25payIsImVtYWlsIjoiYWRyZXMxQGFkcmVzLmNvbSJ9.vNI3-PNIxt5XxPP6tarsvDU-RISNYhlNDAyzoO7noC0";
        // //administrator
        // var token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluX3N5c3RlbXUiLCJ1cHJhd25pZW5pYSI6ImFkbWluaXN0cmF0b3Igc3lzdGVtdSJ9.jq9Sx-vQ3amGNoLj-XGel-RFgwj5vhB9jBpxJZPhcxk"
        // const cookies = new Cookies();
        // cookies.set('token', token1, { path: '/' });
       // window.location.reload(false);
    }
    render()
    {
        return(
            <div className="verticalCenter" style={{display:"flex"}}>
                <div style={{marginRight:"auto", marginLeft:"auto"}}>
                    {this.state.forgotten_password ? 
                        <>
                                {/* <span style={{float: "right", fontSize: "30px", paddingRight: "15px"}}>
                                    <FontAwesomeIcon 
                                    icon="undo" 
                                    onClick={this.toggleForgotten}
                                    cursor="pointer"
                                    />
                                </span> */}
                                <ForgottenPopup
                                    closePopup={this.toggleForgotten}
                                />
                        </>
                            : 
                            <div>
                        
                        <Form>
                            <h2>LOGOWANIE</h2>
                            <div style={{ borderTop: "1px solid #000 ", paddingBottom: "5px"}}></div>
                            <FormGroup>
                                <label>
                                <h4>Email lub login</h4> 
                                    <div className="input-group mb-1">
                                        <input type="text"
                                        className="form-control"
                                        name="login"
                                        value={this.state.login}
                                        onChange={this.handleChange}
                                        required
                                        />
                                    </div>
                                </label>
                            </FormGroup>
                            
                            <FormGroup>
                            <h4>Hasło</h4> 
                                <label>
                                    <div className="input-group mb-1">
                                        <input type={this.state.password_visible? "text" : "password"}
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            className="form-control" 
                                            name="password"
                                            maxLength="128"
                                            required
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="button" onClick={this.togglePassVisible}>
                                                <FontAwesomeIcon 
                                                    icon={this.state.password_visible? "eye" : "eye-slash"}
                                                    className="fa-lg"
                                                />
                                            </button>
                                        </div>

                                        
                                    </div>
                                </label>
                                <br/>

                                <label className="forgot_password" onClick={this.toggleForgotten}>Nie pamiętam hasła</label><br/>
                                
                                <label>
                                    <button className="btn btn-success mb-3 ButtonLoginAndRegister" onClick={this.logIn}>ZALOGUJ SIĘ</button>
                                </label>
                                    <br/>
                                    Nie masz konta? Możesz się zarejestrować
                                    <br/>
                                <label>
                                    <button className="btn btn-primary ButtonLoginAndRegister" onClick={()=>this.props.action()}>REJESTRACJA</button>
                                </label>
                                <br/>
                            </FormGroup>
                            
                        </Form>
                        </div>
                        }
                </div>
            </div>  
        )
    }
    
    //
    //
}

export default FormLogin