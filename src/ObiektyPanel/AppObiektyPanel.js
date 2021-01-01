import React, {Component} from "react"
import TabelaObiektow from "./TabelaObiektow"
import "./indexOP.css"
class App_ObiektyPanel extends Component
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
                <h1>Panel Administratora (Obiekty)</h1>
                <TabelaObiektow/>
            </div>
        )
    }
        
}
export default App_ObiektyPanel