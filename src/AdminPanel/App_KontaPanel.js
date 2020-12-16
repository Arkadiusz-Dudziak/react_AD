import React, {Component} from "react"
import UsersTable from "./TabelaKonta"
//import {DatePicker} from "react-bootstrap-date-picker"

import "./indexAP.css"
class App_2 extends Component
{
    constructor() 
    {
        super();
        this.state = 
        {
            
        };
    }
    render()
    {
        return(
            <div>
                <h1>Panel Administratora (Konta)</h1>
                <UsersTable/>
                
            </div>
        )
    }
        
}
export default App_2