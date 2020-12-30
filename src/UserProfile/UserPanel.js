import React, {Component} from "react"
import LoremIpsum from "../LoremIpsum"
import 'bootstrap/dist/css/bootstrap.min.css'

class UserPanel extends Component
{
    constructor(props) 
    {
        super(props)
        this.myRef = [];
    }

    render() 
    {
        document.body.style = 'background: #1a2057;';
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 fixed-top one pt-4" id="side_menu">
                        <ul>
                            <li onClick={this.scrolldoRezerwacje}>Rezerwacje</li>
                            <li onClick={this.scrolldoUlubione}>Ulubione obiekty</li>
                            <li onClick={this.scrolldoKomentarze}>Komentarze</li>
                        </ul>
                    </div>
                    <div className="main col-md-10 offset-md-2 pt-4 two">
                        <div ref={(ref) => {this.myRef[0] = ref}}>
                            <h1>Rezerwacje</h1>
                            <LoremIpsum/>
                            <LoremIpsum/>
                            <LoremIpsum/>
                        </div> 
                        <div ref={(ref) => {this.myRef[1] = ref}}>
                            <h1>Ulubione</h1>
                            <LoremIpsum/>
                            <LoremIpsum/>
                            <LoremIpsum/>
                        </div>
                        <div ref={(ref) => {this.myRef[2] = ref}}>
                            <h1>Komentarze</h1>
                            <LoremIpsum/>
                            <LoremIpsum/>
                            <LoremIpsum/>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }  

    scrolldoRezerwacje = () => this.myRef[0].scrollIntoView()
    scrolldoUlubione = () => this.myRef[1].scrollIntoView()
    scrolldoKomentarze = () => this.myRef[2].scrollIntoView()

}
export default UserPanel