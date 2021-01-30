import React, {Component} from "react"
import Popup from "./Popup"
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index_LR.scss';
import HelpPopup from "./HelpPopup";
import Cookies from 'universal-cookie'
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
        if (document.cookie.indexOf('user_data') !== -1 ) {
            var token = cookies.get('user_data');
            if(token!=="")
            {
                var decode = jwt.decode(token);
                console.log(decode);
                this.setState({userName:decode.login})
            }   
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
                <div className="LoginRegisterUpMenu">
                    {this.state.userName}
                    <Button className="UpMenuButton btn-secondary" onClick={()=>this.logOut()}>WYLOGUJ</Button>
                    <Button className="UpMenuButton btn-info" onClick={()=>this.toggleHelp()}>POMOC</Button>
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