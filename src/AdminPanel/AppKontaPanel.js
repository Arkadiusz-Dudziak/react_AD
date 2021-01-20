import React, {Component} from "react"
import Cookies from 'universal-cookie'
//import {DatePicker} from "react-bootstrap-date-picker"
import UsersTable from "./TabelaKonta"
import AppLoginRegister from "../LoginRegister/AppLoginRegister"
import '../LoginRegister/index_LR.css'
import "./indexAP.css"
class AppKontaPanel extends Component
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
    {
        // zabezpieczenie front / nie próbuje wyświetlać widoków osobom nieuprawnionym
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
                    <h1>Panel Administratora (Konta)</h1>
                    <UsersTable/>
                </div>
                :
                <AppLoginRegister/>
                }
            </> 
        )
    }
        
}
export default AppKontaPanel