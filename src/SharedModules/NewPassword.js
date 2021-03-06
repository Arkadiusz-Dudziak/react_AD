import React, {Component} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

library.add(faEye);
library.add(faEyeSlash);
class NewPassword extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {   
            password: "",
            password_confirm: "",
            minChar: null,
            number: null,
            visible: true,
            specialChar: null,
            letter: null,
            password_correct: false,
            password_visible: false,
            passRepeat_visible: false
        };
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.togglePassVisible = this.togglePassVisible.bind(this);
        this.toggleFocus = this.toggleFocus.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleFocusPassRepeat = this.toggleFocusPassRepeat.bind(this);
        this.compare_passwords = this.compare_passwords.bind(this);
    }

    compare_passwords()
    {
        //action (takie same hasła, poprawność, hasło)
        {this.state.password !== this.state.password_confirm? 
            !this.state.password_correct? this.props.action(false, false, this.state.password): this.props.action(false, true, this.state.password)
            :!this.state.password_correct? this.props.action(true, false, this.state.password): this.props.action(true, true, this.state.password)
        }
    }

    handleChange(event)
    {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]:checked}) :this.setState({[name]:value}, () => this.compare_passwords())
        
    }

    handlePasswordChange(event)
    {
        const isNumberRegx = /\d/;
        const isLetterRegx = /[a-zA-Z]/;
        const specialCharacterRegx = /[  !@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]/;
        const {value, name} = event.target;
        this.setState({[name]: value})
        this.setState({
            minChar: value.length >= 8 ? true : false,
            number: isNumberRegx.test(value)? true : false,
            letter: isLetterRegx.test(value)? true : false,
            specialChar: specialCharacterRegx.test(value)? true : false,
        }, () =>
        {
            if(this.state.minChar && this.state.number && this.state.specialChar)
            {
                this.setState({password_correct: true})
            }
            else
            {
                this.setState({password_correct: false})
            }
            this.compare_passwords();
        }
        );
    }

    toggleFocus(event)
    {
        this.setState({visible: false})
    }
    toggleFocusPassRepeat(event)
    {
        this.setState({passRepeat_visible: true})
    }

    togglePassVisible(event)
    {
        this.setState(prevState =>
            {
                return{password_visible: !prevState.password_visible}
            }
        )
    }

    render()
    {
        return(
            <div>

                <h4>Hasło</h4> 
                <div className="input-group mb-3">
                    <input type={this.state.password_visible? "text" : "password"}
                        className="form-control" 
                        name="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        onFocus={this.toggleFocus}
                        onBlur={this.toggleFocus}
                        maxLength="128"
                        required
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={this.togglePassVisible}>
                            <FontAwesomeIcon 
                                icon={this.state.password_visible? "eye" : "eye-slash"}
                                className="fa-lg"
                            />
                        </button>
                    </div>
                </div>

                <label style={this.state.visible? {display: "none"}:{display:"block"}}>
                        Hasło musi posiadać: <br/>
                    <span style={this.state.minChar? {color: "#00b041"}: {color:"#e62929"}}><b>co najmniej 8 znaków</b></span><br/>
                    <span style={this.state.number? {color: "#00b041"}: {color:"#e62929"}}><b>co najmniej 1 cyfrę</b></span><br/>
                    <span style={this.state.letter? {color: "#00b041"}: {color:"#e62929"}}><b>co najmniej 1 literę </b></span><br/>
                    <span style={this.state.specialChar? {color: "#00b041"}: {color:"#e62929"}}><b>co najmniej 1 znak specjalny</b></span><br/>
                </label>
                <h4>Powtórz hasło</h4> 
                <div className="input-group mb-3">
                    <input type={this.state.password_visible? "text" : "password"}
                        className="form-control" 
                        placeholder=""
                        name="password_confirm"
                        value={this.state.password_confirm}
                        onChange={this.handleChange}
                        onFocus={this.toggleFocusPassRepeat}
                        maxLength="128"
                        required
                    />
                    
                </div>

                <label style={this.state.passRepeat_visible? {display:"block"}:{display: "none"}}>
                    {this.state.password !== this.state.password_confirm? 
                        <span style={{color:"#e62929"}}>Hasła nie są identyczne!</span>
                        :
                        null
                    }
                </label>

            </div>
        )
    }
}
export default NewPassword;