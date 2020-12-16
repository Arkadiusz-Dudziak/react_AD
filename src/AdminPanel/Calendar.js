import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {Form} from 'react-bootstrap'

library.add(faCalendarAlt);

class Calendar extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            ban_ustaw_date: false,
            date: props.data
        }
        this.setBannedDate = this.setBannedDate.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event)
    {
        const  {name, value} = event.target
        /*type === "checkbox" ? this.setState({[name]: checked}) 
        :*/
        this.setState({date: event.target.value}, ()=>{this.props.action(this.state.date)})
    }

    setBannedDate()
    {
        this.setState({ban_ustaw_date: true}, 
            ()=>console.log("ban_ustaw_date: ",this.state.ban_ustaw_date))
        
    }
    render()
    {
        return(
                <>
                    anuluj
                    <Form.Control 
                        type="date"
                        value={this.state.date}
                        name="data"
                        onChange={this.handleInput}
                    />
                </>
            )
    }
       
    
}
export default Calendar