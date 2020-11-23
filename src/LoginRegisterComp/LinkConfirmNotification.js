import React, {Component} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LinkConfirmPopup extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div className='RegisterEndPopup'>
                <div className='RegisterEndPopup_inner'>
                    <div style={{float: "right", fontSize: "30px", paddingRight: "15px"}}>
                        <FontAwesomeIcon 
                            icon="times" 
                            onClick={this.props.closePopup}
                            cursor="pointer"
                        />
                    </div>
                    Dziękujemy za rejestrację. Na email podany w formularzu zostało wysłane email z linkiem potwierdzającym.
                    Proszę kliknąć w link potwierdzający, by móc się zalogować. 
                </div>
            </div>
        )
    }
}
//alert("Wysłaliśmy email z linkiem do potwierdzenia rejestracji. Potwierdź go proszę, by się zalogować. ")
//<div style={{color: "red"}}>Wysłaliśmy email z linkiem do potwierdzenia rejestracji. Potwierdź go proszę, by się zalogować.</div>
export default LinkConfirmPopup