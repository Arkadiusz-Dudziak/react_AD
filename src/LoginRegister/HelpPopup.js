import React, {Component} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RegulationsPopup from "./RegulationsPopup"

class HelpPopup extends Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            showRegulations: false
        }
        this.handleRegulationPopup = this.handleRegulationPopup.bind(this);
    }
    handleRegulationPopup(event)
    {
        this.setState(
        {
            showRegulations: !this.state.showRegulations,
        });
    }
    render()
    {
        return(
            <>
            <div className='Help_popup'>
                <div className='Help_popup_inner'>
                    <div style={{float: "right", fontSize: "30px", paddingRight: "15px"}}>
                        <FontAwesomeIcon 
                            icon="times"
                            onClick={this.props.closePopup}
                            cursor="pointer"
                        />
                    </div>
                    <h2>Pomoc</h2><br/>
                    <h4>Informacje o autorach: </h4>
                    Arkadiusz Dudziak, Mikołaj Frohmberg, Arkadiusz Tomczak, Łukasz Wełnic <br/>
                    Regulamin serwisu jest dostępny po kliknęciu w poniższy odnośnik. <br/>
                    <span className="regulations_link"
                        onClick={this.handleRegulationPopup}>
                        regulamin
                    </span>
                </div>
            </div>
            {this.state.showRegulations ? 
                <RegulationsPopup
                    register = {this.state.register}
                    closePopup={this.handleRegulationPopup}
                />
                : null
            }
            </>
        )
    }
}

export default HelpPopup