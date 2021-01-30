import React, {Component} from "react"
//import {DatePicker} from "react-bootstrap-date-picker"
import UsersTable from "./TabelaKonta"
import AppLoginRegister from "../LoginRegister/AppLoginRegister"
import '../LoginRegister/index_LR.css'
import "./indexAP.css"
class AppKontaPanel extends Component
{
    render()
    {
        return(
                <div>
                    <AppLoginRegister/>
                    <h1 style={{color:"white"}}>Panel Administratora (Konta)</h1>
                    <UsersTable/>
                </div>
        )
    }
        
}
export default AppKontaPanel