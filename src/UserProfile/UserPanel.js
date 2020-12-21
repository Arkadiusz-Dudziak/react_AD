import React, {Component} from "react"
import "./indexUP.scss"
import LoremIpsum from "../LoremIpsum"

class UserPanel extends Component
{
    constructor(props) 
    {
        super(props)
        this.myRef = [];
    }

    render() 
    {
        return(
            <div>
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
                <div>
                    <li onClick={this.scrolldoRezerwacje}>Rezerwacje</li>
                    <li onClick={this.scrolldoUlubione}>Ulubione obiekty</li>
                    <li onClick={this.scrolldoKomentarze}>Komentarze</li>
                </div>
            </div>
        )
    }  

    scrolldoRezerwacje = () => this.myRef[0].scrollIntoView()
    scrolldoUlubione = () => this.myRef[1].scrollIntoView()
    scrolldoKomentarze = () => this.myRef[2].scrollIntoView()

}
export default UserPanel