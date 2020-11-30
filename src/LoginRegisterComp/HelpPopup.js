import React, {Component} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class HelpPopup extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div className='Help_popup'>
                <div className='Help_popup_inner'>
                    <div style={{float: "right", fontSize: "30px", paddingRight: "15px"}}>
                        <FontAwesomeIcon 
                            icon="times"
                            onClick={this.props.closePopup}
                            cursor="pointer"
                        />
                    </div>
                    <h2>Informacje o autorach serwisu:</h2><br/>
                    Arkadiusz Dudziak, Mikołaj Frohmberg, Arkadiusz Tomczak, Łukasz Wełnic
                </div>
            </div>
        )
    }
}

export default HelpPopup