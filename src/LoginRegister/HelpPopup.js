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
                    <span className="xButton" style={{float: "right", fontSize: "30px", paddingRight: "15px"}}>
                        <FontAwesomeIcon 
                            icon="times"
                            onClick={this.props.closePopup}
                            cursor="pointer"
                        />
                    </span>
                    <br/>
                    <h1 style={{marginBottom: "15px", marginLeft: "35px"}}>Pomoc</h1>
                    
                    <div style={{ borderTop: "1px solid #000 ", paddingBottom: "5px"}}></div>
                    <br/>
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