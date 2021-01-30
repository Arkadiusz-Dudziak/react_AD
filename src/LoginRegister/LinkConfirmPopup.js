import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap"

class LinkConfirmPopup extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div className='popup'>
                <div className='popup_inner' style={{display:"flex"}}>
                    <div style={{marginTop: "auto", marginBottom: "auto", marginRight:"auto", marginLeft:"auto"}}>
                        <h1 style={{marginBottom: "10px"}}>
                            Dziękujemy za rejestrację!
                        </h1>
                        <p style={{fontSize: "20px"}}>
                            Na email podany w formularzu został wysłany email z linkiem potwierdzającym. <br/>
                            Proszę kliknąć w link potwierdzający, by móc się zalogować. 
                        </p>
                        <Button className="ButtonLoginAndRegister" onClick={this.props.closePopup}>OK</Button>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
/*
<div style={{align:"right", fontSize: "30px", paddingRight: "15px"}}>
    <FontAwesomeIcon 
        icon="times" 
        onClick={this.props.closePopup}
        cursor="pointer"
    />
</div>
*/
//alert("Wysłaliśmy email z linkiem do potwierdzenia rejestracji. Potwierdź go proszę, by się zalogować. ")
//<div style={{color: "red"}}>Wysłaliśmy email z linkiem do potwierdzenia rejestracji. Potwierdź go proszę, by się zalogować.</div>
export default LinkConfirmPopup