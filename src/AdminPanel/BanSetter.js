import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarAlt, faInfinity, faMinusCircle, faBan, faRedo } from "@fortawesome/free-solid-svg-icons";
import {Form} from 'react-bootstrap'

library.add(faCalendarAlt);
library.add(faInfinity);
library.add(faMinusCircle);
library.add(faBan);
library.add(faRedo);

class BanSetter extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            ban_ustaw_date: false,
            date: props.date,
            cancel_ban: false,
            pernament_ban: false
        }
        this.setBannedDate = this.setBannedDate.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.cancelBan = this.cancelBan.bind(this);
        this.pernamentBan = this.pernamentBan.bind(this);
    }

    handleInput(event)
    {
        const  {name, value} = event.target
        this.setState({date: event.target.value}, ()=>{this.props.action(this.state.date)});
    }

    cancelBan()
    {
        {this.props.action("")};
        this.setState({cancel_ban: true});
    }

    pernamentBan()
    {
        {this.props.action("permanetny")};
        this.setState({pernament_ban: true});
    }

    setBannedDate()
    {
        this.setState({ban_ustaw_date: true}, 
            ()=>console.log("ban_ustaw_date: ",this.state.ban_ustaw_date))
    }
    render()
    {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        return(
                <>
                    {this.state.date==="permanentny"?
                    <div>
                        <FontAwesomeIcon 
                            icon="redo"
                            cursor="pointer"
                            title="anuluj bana"
                            onClick={this.cancelBan}
                        />
                        permanentny
                        <Form.Control 
                            type="date"
                            value={this.state.date}
                            min={today} //TODO   czas z serwera
                            name="data"
                            title="wybierz datę, do której użytkownik ma być zbanowany"
                            onKeyDown={(e) => e.preventDefault()}
                            onChange={this.handleInput}
                        />
                    </div>:
                    this.state.cancel_ban?
                    ''
                    :
                    this.state.pernament_ban?
                    <div>
                        permanentny 
                    </div>
                    :
                    <div>
                        <label>
                            <FontAwesomeIcon 
                                icon="redo"
                                cursor="pointer"
                                title="anuluj bana"
                                onClick={this.cancelBan}
                            />
                        </label>
                        
                        <label>
                            <Form.Control 
                                type="date"
                                value={this.state.date}
                                min={today} //TODO   czas z serwera
                                name="data"
                                title="wybierz datę, do której użytkownik ma być zbanowany"
                                onKeyDown={(e) => e.preventDefault()}
                                onChange={this.handleInput}
                            />
                        </label>

                        <label>
                            <FontAwesomeIcon 
                                icon="ban"
                                cursor="pointer"
                                title="permanentny ban"
                                color="red"
                                onClick={this.pernamentBan}
                            />
                        </label>
                        
                    </div>
                    }
                    
                </>
            )
    }
       
    
}
export default BanSetter