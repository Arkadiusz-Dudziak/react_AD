import React, {Component} from "react"
import Popup from "./Popup"
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index_LR.css';
/* https://codepen.io/bastianalbers/pen/PWBYvz */
class App_1 extends React.Component 
{
    constructor() 
    {
        super();
        this.state = 
        {
            showPopup: false,
            register: false
        };
        this.togglePopup = this.togglePopup.bind(this)
    }

    togglePopup(props) 
    {
        this.setState(
        {
            showPopup: !this.state.showPopup,
            register: props
        });
    }
    render() 
    {
        let register = false;
        return (
        <div className='app'>
            <Button onClick={()=>this.togglePopup(false)}>ZALOGUJ SIĘ</Button>
            <Button onClick={()=>this.togglePopup(true)}>ZAREJESTRUJ SIĘ</Button>
            <p>Lista obiektów: </p>
            <ul>
                <li>Boisko bez murawy</li>
                <li>Boisko bez bramek</li>
                <li>Boisko do badmintona</li>
                <li>Kort tenisowy</li>
                <li>Kort do squasha</li>
            </ul>
            <p>Wyszukaj obiekt</p>
            <input type="text" placeholder="wpisz nazwę obiektu"/>
            {this.state.showPopup ? 
            <Popup
                register = {this.state.register}
                closePopup={this.togglePopup}
            />
            : null
            }
        </div>
        );
    }
};

export default App_1