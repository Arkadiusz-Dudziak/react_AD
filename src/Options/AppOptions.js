import React, {Component} from "react"
import "./indexOptions.css"
import NewPasswordandRepeat from "../SharedModules/NewPassword"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap";



class App_Options extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            passwords_are_equal: false,
            password_correct: false,
            password: "",
            prev_textAreaValue: "Przykładowy opis konta.",
            textAreaValue: "Przykładowy opis konta."
        };
        this.set_passwords_equality = this.set_passwords_equality.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendChangeToAPI = this.sendChangeToAPI.bind(this);
    }
    set_passwords_equality(bool, bool2, pass)
    {
        this.setState({passwords_are_equal: bool, password_correct: bool2, password: pass})
    }
    handleChange(event) 
    {
        this.setState({ textAreaValue: event.target.value });
    }
    sendChangeToAPI(event)
    {
        this.setState({prev_textAreaValue: this.state.textAreaValue});
        console.log("Wyślij dane do API.");
    }
    render()
    {
        document.body.style = 'background: #1a2057;';
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-9 pt-4">
                        <h3>Administrator Obiektu Sportowego</h3>
                        <h3>Wypełnij poniższy formularz by zmienić hasło</h3>
                        <NewPasswordandRepeat action={this.set_passwords_equality}/>
                        {this.state.passwords_are_equal && this.state.password_correct? <Button>POTWIERDŹ</Button>:null}
                        <h3>Opis konta</h3>
                        <textarea className="form-control"
                            value={this.state.textAreaValue}
                            onChange={this.handleChange}
                            maxLength={250}
                            rows={4}
                        />
                        {this.state.prev_textAreaValue !== this.state.textAreaValue?
                            <Button onClick={this.sendChangeToAPI}>ZATWIERDŹ</Button>
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
/*
    <AvatarChange/>
    <DescriptionChange/>
    <SaveButton/>
*/
/*  Użytkownik, Administrator obiektu, Administrator systemu
1. Aktor klika w znajdującą się u góry strony ikonę użytkownika, a następnie w „Edytuj konto”
2. Aktor może zmieniać dane swojego konta, w tym hasło, awatar i opis konta
3. Aktor zapisuje zmiany klikając „Zapisz”
4. Zmiany wprowadzane są bezzwłocznie
*/
// TODO przy zmianie hasła 1 i powrotu do poprzedniego - hasła nie są takie same