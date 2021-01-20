import React, {Component} from "react"
import TabelaObiektow from "./TabelaObiektow"
import AppLoginRegister from "../LoginRegister/AppLoginRegister"
import "./indexOP.css"
import '../LoginRegister/index_LR.css'
import Cookies from 'universal-cookie'
class App_ObiektyPanel extends Component
{
    constructor() 
    {
        super();
        this.state = 
        {
            permissions_ok: null
        };
    }
    componentDidMount()
    {// zabezpieczenie front / nie próbuje wyświetlać widoków osobom nieuprawnionym
        // przy zapytaniach, po stronie serwera należy sprawdzić uprawnienia
        var jwt = require("jsonwebtoken");
        const cookies = new Cookies();
        var token = cookies.get('user_data');
        if(token!=="")
        {
            var decode = jwt.decode(token);
            console.log(decode);
            if(decode.uprawnienia!=="administrator")
            {
                this.setState({permissions_ok: false})
                alert("Brak uprawnień!")
            }
            else
            {
                this.setState({permissions_ok: true})
            }
        }   
    }
    render()
    {
        return(
            <>
                {this.state.permissions_ok===true?
                <div>
                    <AppLoginRegister/>
                    <h1>Panel Administratora - zarządzanie administracją obiektów</h1>
                    <TabelaObiektow/>
                </div>
                :
                <AppLoginRegister/>
                
                }
            </> 
        )
    }
        
}
export default App_ObiektyPanel