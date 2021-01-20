import React, {Component} from "react"
import Popup from "./Popup"
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index_LR.css';
import HelpPopup from "./HelpPopup";
import Cookies from 'universal-cookie'
/* https://codepen.io/bastianalbers/pen/PWBYvz */
class App_1 extends React.Component 
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
        this.togglePopup = this.togglePopup.bind(this)
        this.toggleHelp = this.toggleHelp.bind(this)
        this.logOut = this.logOut.bind(this)
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

    componentDidMount()
    {
        var jwt = require("jsonwebtoken");
        const cookies = new Cookies();
        var token = cookies.get('user_data');
        if(token!=="")
        {
            var decode = jwt.decode(token);
            console.log(decode);
            this.setState({userName:decode.login})
        }   
    }

    setUser()
    {
        
    }


    logOut()
    {
        const cookies = new Cookies();
        cookies.set('user_data', "", { path: '/' });
        this.setState({userName: ""})
        window.location.reload(false);
    }

    render() 
    {
        let register = false;
        return (
        <>
            {this.state.userName!==""?
                <>
                    {this.state.userName}
                    <Button onClick={()=>this.logOut()}>WYLOGUJ</Button>
                </>
                :
                <>
                <Button onClick={()=>this.togglePopup(false)}>ZALOGUJ SIĘ</Button>
                <Button onClick={()=>this.togglePopup(true)}>ZAREJESTRUJ SIĘ</Button>
                <Button onClick={()=>this.toggleHelp()}>POMOC</Button>
                </>
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