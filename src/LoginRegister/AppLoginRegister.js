import React, {Component} from "react";
import Popup from "./Popup";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index_LR.css';
import HelpPopup from "./HelpPopup";
import Cookies from 'universal-cookie';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import AppOptions from "../Options/AppOptions"
// import Switch from "react-bootstrap/esm/Switch";

library.add(faCog);
/* https://codepen.io/bastianalbers/pen/PWBYvz */
class App_1 extends Component 
{
    constructor() 
    {
        super();
        this.state = 
        {
            showPopup: false,
            register: false,
            showHelp: false,
            userName: "",
            permissions: ""
        };
        this.togglePopup = this.togglePopup.bind(this);
        this.toggleHelp = this.toggleHelp.bind(this);
        this.logOut = this.logOut.bind(this);
        this.goToSettings = this.goToSettings.bind(this);
        this.goToObjects = this.goToObjects.bind(this);
        this.goToAccounts = this.goToAccounts.bind(this);
    }

    togglePopup(props) 
    {
        this.setState(
        {
            showPopup: !this.state.showPopup,
            register: props //false -> login true -> rejestracja
        });
    }
    toggleHelp(props) 
    {
        this.setState(
        {
            showHelp: !this.state.showHelp
        });
    }

    goToObjects()
    {
        console.log("goToObjects")
    }

    goToAccounts()
    {
        console.log("goToAccounts")
    }

    componentDidMount()
    {
        var jwt = require("jsonwebtoken");
        const cookies = new Cookies();
        if (document.cookie.indexOf('token') !== -1 ) {
            var token = cookies.get('token');
            if(token!=="")
            {
                var decode = jwt.decode(token);
                console.log(decode);
                this.setState({userName:decode.login})
                this.setState({permissions:decode.uprawnienia})
            }   
        }
        
        
    }

    goToSettings()
    {
        console.log("go to settings")
    }


    logOut()
    {
        const cookies = new Cookies();
        cookies.set('token', "", { path: '/' });
        this.setState({userName: ""})
        window.location.reload(false);
    }

    render() 
    {
        return (
            <>
            {this.state.userName!==""?
                <div className="LoginRegisterUpMenu">
                    <span>{this.state.userName} </span>
                        <button className="btn btn-outline-secondary" type="button" onClick={this.goToSettings} >
                            <FontAwesomeIcon 
                                icon={"cog"}
                                className="fa-lg"
                                />
                        </button>
                    
                    <Button className="UpMenuButton btn-info" onClick={()=>this.toggleHelp()}>POMOC</Button>
                    
                    {/* widoki dla administratora systemu tylko */}
                    {this.state.permissions=="administrator systemu"?
                        <>
                            <Button className="UpMenuButton btn-primary" onClick={()=>this.goToAccounts()}>Konta</Button>
                            <Button className="UpMenuButton btn-primary" onClick={()=>this.goToObjects()}>Obiekty</Button>
                        </>
                        :
                        null
                    }
                    <Button className="UpMenuButton btn-outline-secondary" onClick={()=>this.logOut()}>WYLOGUJ</Button>
                </div>
                :
                <div className="LoginRegisterUpMenu">
                    <Button className="UpMenuButton btn-success" onClick={()=>this.togglePopup(false)}>ZALOGUJ SIĘ</Button>
                    <Button className="UpMenuButton btn-primary" onClick={()=>this.togglePopup(true)}>ZAREJESTRUJ SIĘ</Button>
                    <Button className="UpMenuButton btn-info" onClick={()=>this.toggleHelp()}>POMOC</Button>
                </div>
            }
            
            {this.state.showPopup ? 
            <Popup
                register = {this.state.register}
                closePopup={this.togglePopup}
            />
            : null
            }

            {this.state.showHelp ? 
            <HelpPopup
                closePopup={this.toggleHelp}
            />
            : null
            }
            </>
        
        );
    }
};

export default App_1