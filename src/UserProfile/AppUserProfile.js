import React, {Component} from "react"
import "./indexUP.css"
import UserPanel from "./UserPanel"
class App_UserProfile extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            login: "login",
            email: "adres@email.com"
        };
    }
    render()
    {
        return(
            <div>
                <UserPanel/>
            </div>
        )
    }
}
export default App_UserProfile