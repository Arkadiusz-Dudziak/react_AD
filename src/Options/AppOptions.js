import React, {Component} from "react"
import "./indexOptions.css"
import NewPasswordandRepeat from "../SharedModules/NewPassword"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap";
import { getAccountDescription, setNewAccountDescription, setNewPassword } from "../FetchData";

class App_Options extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            userId: 12,
            passwords_are_equal: false,
            password_correct: false,
            password: "",
            prev_textAreaValue: "przykładowy opis.",
            textAreaValue: "przykładowy opis."
        };
        this.set_passwords_equality = this.set_passwords_equality.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setNewPassword = this.setNewPassword.bind(this);
    }
    
    set_passwords_equality(bool, bool2, pass)
    {
        this.setState({passwords_are_equal: bool, password_correct: bool2, password: pass})
    }

    componentDidMount()
    {//TODO - wczytać opis konta
        //var obj = JSON.parse(getAccountDescription(this.state.userId));
        //console.log(getAccountDescription(this.state.userId))
        //this.setState(obj.opis_konta);
    }

    handleChange(event) 
    {
        this.setState({ textAreaValue: event.target.value });
    }

    setNewDescription(event)
    {
        this.setState({prev_textAreaValue: this.state.textAreaValue});
        setNewAccountDescription(this.state.userId, this.state.textAreaValue)
    }

    setNewPassword()
    {
        setNewPassword(this.state.userId, this.state.password)
    }

    render()
    {
        document.body.style = 'background: #1a2057;';
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-9 pt-4">
                        <h3>Użytkownik</h3>
                        <h3>Wypełnij poniższy formularz by zmienić hasło</h3>
                        <NewPasswordandRepeat action={this.set_passwords_equality}/>
                        {this.state.passwords_are_equal && this.state.password_correct? <Button onClick={this.setNewPassword}>ZAPISZ</Button>:null}
                        <h3>Opis konta</h3>
                        <textarea className="form-control"
                            value={this.state.textAreaValue}
                            onChange={this.handleChange}
                            maxLength={250}
                            rows={4}
                        />
                        {this.state.prev_textAreaValue !== this.state.textAreaValue?
                            <Button onClick={this.sendChangeToAPI}>ZAPISZ</Button>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default App_Options;

// TODO przy zmianie hasła 1 i powrotu do poprzedniego - hasła nie są takie same