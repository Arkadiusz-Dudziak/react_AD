import React, {Component} from "react"
import RegulationsPopup from "./RegulationsPopup"
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


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
            minChar: null,
            number: null,
            visible: true,
            specialChar: null,
            regulations_ok: false,
            showRegulations: false
        }
       this.handleChange = this.handleChange.bind(this)
       this.handlePasswordChange = this.handlePasswordChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
       this.handleRegulationPopup = this.handleRegulationPopup.bind(this)
       this.toggleFocus = this.toggleFocus.bind(this)
    }

    handleChange(event)
    {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]:checked}) :this.setState({[name]:value})
    }

    handlePasswordChange(event)
    {
        const isNumberRegx = /\d/;
        const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        const {value, name} = event.target;
        this.setState({[name]:value})
        this.setState({
            minChar: value.length >= 8 ? true : false,
            number: isNumberRegx.test(value)? true : false,
            specialChar: specialCharacterRegx.test(value)? true : false
        }
        )
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

    toggleFocus(event)
    {
        this.setState(prevState =>
            {
                return{visible: !prevState.visible}
                
            }
        )
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
                            onChange={this.handlePasswordChange}
                            onFocus={this.toggleFocus}
                            onBlur={this.toggleFocus}
                            required
                        />
                    </label>

                    <label style={this.state.visible? {display: "none"}:{display:"block"}}>
                        <br/>
                         Hasło musi posiadać: <br/>
                        <span style={this.state.minChar? {color: "#00b041"}: {color:"#e62929"}}><b>co najmniej 8 znaków</b></span><br/>
                        <span style={this.state.number? {color: "#00b041"}: {color:"#e62929"}}><b>co najmniej 1 cyfrę</b></span><br/>
                        <span style={this.state.specialChar? {color: "#00b041"}: {color:"#e62929"}}><b>co najmniej 1 znak specjalny</b></span><br/>
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
                        <Button type="submit">ZAREJESTRUJ SIĘ</Button>
                    </label>
                    <br/>
                    Jednak mam konto, chce się zalogować
                    <br/>
                    <Button onClick={()=>this.props.action()}>LOGOWANIE</Button>
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
        // <p>{this.state.password} </p>
        // <p>{this.state.minChar? ">=8" : "za malo"}</p>      
        // <p>{this.state.number? "jest liczba" : "brak liczby"}</p>
        // <p>{this.state.specialChar? "jest specjalny" : "brak specjalnego"}</p>
    }
}

export default FormRegister