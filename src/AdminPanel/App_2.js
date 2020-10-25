import React, {Component} from "react"
import UsersTable from "./UsersTable"
//import UsersTable2 from "../F_TableCells/UsersTablev2"
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
                <h1>Panel Administratora</h1>
                <UsersTable/>
            </div>
        )
    }
        
}
export default App_2