import React, {Component} from "react"
import "./indexUP.scss"
import NewPasswordandRepeat from "../SharedModules/NewPassword"
import 'bootstrap/dist/css/bootstrap.min.css'
class App_Options extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            passwords_are_equal: false
        };
        this.set_passwords_equality = this.set_passwords_equality.bind(this);
    }
    set_passwords_equality(bool)
    {
        this.setState({passwords_are_equal: bool})
    }
    render()
    {
        return(
            <div className="container">
                <div className="row">
                    <div className="md-3">
                        Awatar
                    </div>
                    <div className="md-9">
                        <h3>Wypełnij poniższy formularz by zmienić hasło</h3>
                        <NewPasswordandRepeat action={this.set_passwords_equality}/>
                        <h3>Opis konta</h3>
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