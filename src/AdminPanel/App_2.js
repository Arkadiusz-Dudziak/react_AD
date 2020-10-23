import React, {Component} from "react"
import Json_Reader from "./Json_Reader"
import UsersTable from "./UsersTable"

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
                <UsersTable/>
            </div>
        )
    }
        
}
export default App_2