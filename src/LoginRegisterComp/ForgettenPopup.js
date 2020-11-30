import React, {Component} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button, Form, FormGroup} from 'react-bootstrap'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faTimes);
class ForgottenPopup extends React.Component 
{
    render() 
    {
        return (
        <div className='popup'>
            <div className='popup_inner'>
                <div style={{float: "right", fontSize: "30px", paddingRight: "15px"}}>
                    <FontAwesomeIcon 
                    icon="times" 
                    onClick={this.props.closePopup}
                    cursor="pointer"
                    />
                </div>

                <h1>Zapomniałeś hasła?</h1>
                <p>
                    Nikt nie ma dstępu do Twojego hasła, więc nie możemy go przesłać. W celu odzyskania konta
                    wyślemy email z linikiem resetującym hasło na adres podany podczas rejestracji.
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
                    <Button>Resetuj hasło</Button>
                </Form>           
            </div> 
        </div>
        );
    }
}
export default ForgottenPopup