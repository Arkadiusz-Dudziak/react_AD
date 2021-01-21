import React, {Component} from "react"
import TabelaObiektow from "./TabelaObiektow"
import AppLoginRegister from "../LoginRegister/AppLoginRegister"
import "./indexOP.css"
import '../LoginRegister/index_LR.css'

class App_ObiektyPanel extends Component
{
    render()
    {
        return(
                <div>
                    <AppLoginRegister/>
                    <h1>Panel Administratora - zarządzanie administracją obiektów</h1>
                    <TabelaObiektow/>
                </div> 
        )
    }
        
}
export default App_ObiektyPanel