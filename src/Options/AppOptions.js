import React, {Component} from "react"
import "./indexOptions.css"
import NewPasswordandRepeat from "../SharedModules/NewPassword"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap";
import {FormGroup} from 'react-bootstrap'
import { getAccountDescription, setNewAccountDescription, setNewPassword } from "../FetchData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import AppLoginRegister from "../LoginRegister/AppLoginRegister"
import '../LoginRegister/index_LR.css'
import Cookies from 'universal-cookie'

library.add(faEye);
library.add(faEyeSlash);
class App_Options extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            userId: 12,
            passwords_are_equal: false,
            password_correct: false,
            new_password: "",
            current_password: "",
            prev_textAreaValue: "przykładowy opis.",
            textAreaValue: "przykładowy opis.",
            password_visible: false,
            permissions: ""
        };
        this.set_passwords_equality = this.set_passwords_equality.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.togglePassVisible = this.togglePassVisible.bind(this);
        this.setNewPassword_ = this.setNewPassword_.bind(this);
        this.setNewDescription = this.setNewDescription.bind(this);
    }
    
    set_passwords_equality(bool, bool2, pass)
    {
        this.setState({passwords_are_equal: bool, password_correct: bool2, new_password: pass})
    }

    handlePasswordChange(event)
    {
        const {value, name} = event.target;
        this.setState({current_password: value})
    }

    togglePassVisible(event)
    {
        this.setState(prevState =>
            {
                return{password_visible: !prevState.password_visible}
            }
        )
    }

    componentDidMount()
    {//TODO - wczytać opis konta
        //var obj = JSON.parse(getAccountDescription(this.state.userId));
        //console.log(getAccountDescription(this.state.userId))
        //this.setState(obj.opis_konta);
        // zabezpieczenie front / nie próbuje wyświetlać widoków osobom nieuprawnionym
        // przy zapytaniach, po stronie serwera należy sprawdzić uprawnienia
        if (document.cookie.indexOf('user_data') !== -1 ) 
        {
            var jwt = require("jsonwebtoken");
            const cookies = new Cookies();
            var token = cookies.get('user_data');
            if(token!=="")
            {
                var decode = jwt.decode(token);
                if(decode.uprawnienia!=="")
                {
                    this.setState({permissions: decode.uprawnienia})
                }
            }   
        }
    }

    handleChange(event) 
    {
        this.setState({ textAreaValue: event.target.value });
    }

    setNewDescription(event)
    {
        this.setState({prev_textAreaValue: this.state.textAreaValue});
        setNewAccountDescription(this.state.userId, this.state.textAreaValue)
    }

    setNewPassword_()
    {
        console.log(this.state.new_password," ", this.state.current_password)
        setNewPassword(this.state.userId, this.state.new_password, this.state.current_password)
    }

    render()
    {
        return(
            <d>
            <AppLoginRegister/>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 pt-4">
                        <h3>Uprawnienia: {this.state.permissions}</h3>
                        <h3>Wypełnij poniższy formularz by zmienić hasło</h3>
                        <FormGroup>
                            <label>
                                <h4>Aktualne hasło</h4> 
                                <input type={this.state.password_visible? "text" : "password"}
                                    className="pass form-control"
                                    name="password"
                                    value={this.state.current_password}
                                    onChange={this.handlePasswordChange}
                                    onFocus={this.toggleFocus}
                                    onBlur={this.toggleFocus}
                                    maxLength="128"
                    
                                    required
                                />
                            </label>
                            <span className="eyeIcon">
                                <FontAwesomeIcon 
                                icon={this.state.password_visible? "eye" : "eye-slash"}
                                onClick={this.togglePassVisible}
                                className="fa-lg"
                                cursor="pointer"
                                />
                            </span>
                            
                        </FormGroup>
                        
                        <NewPasswordandRepeat action={this.set_passwords_equality}/>
                        {this.state.passwords_are_equal && this.state.password_correct? <Button onClick={this.setNewPassword_}>ZAPISZ</Button>:null}
                        <h3>Opis konta</h3>
                        <textarea className="form-control"
                            value={this.state.textAreaValue}
                            onChange={this.handleChange}
                            maxLength={250}
                            rows={4}
                        />
                        {this.state.prev_textAreaValue !== this.state.textAreaValue?
                            <Button onClick={this.setNewDescription}>ZAPISZ</Button>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
            </d>
        )
    }
}
export default App_Options;

// TODO przy zmianie hasła 1 i powrotu do poprzedniego - hasła nie są takie same