import React, {Component} from "react"

class FormLogin extends Component
{
    render()
    {
        return(
            <div>
                <h1>LOGOWANIE</h1>
                <label>
                    <h2>Email lub login</h2> 
                    <input type="text"
                        required
                    />
                </label>
                <label>
                    <h2>Hasło</h2> 
                    <input type="password"
                        required
                    />
                </label>
                <br/>
                <label>
                    <button>ZALOGUJ</button>
                </label>
                <br/>
               
                    Nie masz konta? Śmiało, możesz się zarejestrować
                    <br/>
                <label>
                    <button onClick={()=>this.props.action()}>REJESTRACJA</button>
                </label>
                <br/>
                
                
            </div>
        )
    }
    
    //
    //
}

export default FormLogin