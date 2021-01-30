import React, {Component} from "react"
import TabelaObiektow from "./TabelaObiektow"
import AppLoginRegister from "../LoginRegister/AppLoginRegister"
import "./indexOP.scss"
import '../LoginRegister/index_LR.scss'

class App_ObiektyPanel extends Component
{
    render()
    {
        return(
                <div>
                    <AppLoginRegister/>
                    <h2 style={{padding:"10px"}}>Panel Administratora - zarządzanie administracją obiektów</h2>
                    <TabelaObiektow/>
                </div> 
        )
    }
        
}
export default App_ObiektyPanel