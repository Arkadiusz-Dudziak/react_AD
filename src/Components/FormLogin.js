import React, {Component} from "react"
import {Button, Form, FormGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class FormLogin extends Component
{
    render()
    {
        return(
            <div>
                <h1>LOGOWANIE</h1>
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
                    <input type="password"
                        required
                    />
                </label>
                </FormGroup>
                
                <label>
                    <Button>ZALOGUJ</Button>
                </label>
                    <br/>
                    Nie masz konta? Śmiało, możesz się zarejestrować
                    <br/>
                <label>
                    <Button onClick={()=>this.props.action()}>REJESTRACJA</Button>
                </label>
                <br/>
                
                
            </div>
        )
    }
    
    //
    //
}

export default FormLogin