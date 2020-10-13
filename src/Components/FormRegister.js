import React, {Component} from "react"
import RegulationsPopup from "./RegulationsPopup"

class FormRegister extends Component
{
    constructor()
    {
        super()
        this.state = 
        {
            email: "",
            login: "",
            password: "",
            password_confirm: "",
            error_message: "",
            regulations_ok: false,
            showRegulations: false
        }
       this.handleChange = this.handleChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
       this.handleRegulationPopup = this.handleRegulationPopup.bind(this)
    }

    handleChange(event)
    {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]:checked}) :this.setState({[name]:value})
    }

    handleSubmit(event)
    {   
        event.preventDefault();
        if(this.state.password == this.state.password_confirm)
            console.log("Dobrze!")
        else
            console.log("Źle")
    }

    handleRegulationPopup(event)
    {
        this.setState(
        {
            showRegulations: !this.state.showRegulations,
        });
    }

    render()
    {
        return(
            <div>
                <h1>REJESTRACJA</h1>
                <form onSubmit={this.handleSubmit}>
                    <h2>Email</h2> 
                    <input type="email" 
                        name="email"
                        value={this.state.email} 
                        onChange={this.handleChange}
                        required
                    />
                    <h2>Login</h2> 
                    <input type="text" 
                        name="login"
                        value={this.state.login} 
                        onChange={this.handleChange}
                        required
                    />
                        
                    <label>
                        <h2>Hasło</h2> 
                        <input type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                    </label>

                    <label>
                    <br/>
                        <h2>Powtórz hasło</h2> 
                        <input type="password"
                            name="password_confirm"
                            value={this.state.password_confirm}
                            onChange={this.handleChange}
                            required
                        />
                    </label>

                    <br/>
                    <label>
                        <input type="checkbox"
                            name="regulations_ok"
                            checked={this.state.regulations_ok}
                            onChange={this.handleChange}
                            required
                        />
                        Akceptuję&nbsp;
                    </label>
                    <span class="regulations_link"
                        onClick={this.handleRegulationPopup}>
                        regulamin
                    </span>
                    {this.state.showRegulations ? 
                        <RegulationsPopup
                            register = {this.state.register}
                            closePopup={this.handleRegulationPopup}
                        />
                        : null
                    }
                    

                    <br/>
                    <label>
                        <button type="submit">ZAREJESTRUJ SIĘ</button>
                    </label>
                    <br/>
                    Jednak mam konto, chce się zalogować
                    <br/>
                    <button onClick={()=>this.props.action()}>LOGOWANIE</button>
                    <br/>
                </form>  
                 
            </div>
        )
        //<button onClick={()=>this.props.action()}>REJESTRACJA</button>
        // <p>{this.state.email} </p>
        // <p>{this.state.login} </p>
        // <p>{this.state.password} </p>
        // <p>{this.state.password_confirm}</p>
        //<p>{this.state.regulations_ok? "ok": "nie ok"}</p>    
    }
}

export default FormRegister