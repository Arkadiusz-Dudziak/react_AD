import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faCheck, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import SelectList from "./SelectList"
import RadioButtons from "./RadioButtons";
import Calendar from "./Calendar"
import {Form} from 'react-bootstrap'

library.add(faEdit);
library.add(faCheck);
library.add(faCalendarAlt);

class UsersRow extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            id: this.props.userDetails.id,
            email: this.props.userDetails.email,
            login: this.props.userDetails.login,
            zweryfikowany: this.props.userDetails.zweryfikowany,
            uprawnienia: this.props.userDetails.uprawnienia,
            ban: this.props.userDetails.ban,
            change: false,
            confirm: false
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.confimrHandler = this.confimrHandler.bind(this);
        this.handler = this.handler.bind(this);
        this.handler2 = this.handler2.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.setBanDate = this.setBanDate.bind(this);
    }
    changeHandler()
    {
      this.setState({change:true, confirm:true});
    }
    confimrHandler(e)
    {
        this.setState({change:false, confirm:false}, 
            ()=>{this.props.action(this.state.id, this.state.email, this.state.login, 
                this.state.zweryfikowany, this.state.uprawnienia, this.state.ban)})
        //this.setState({value: e.target.value}, ()=>{this.props.action(this.state.value)})
    }
    handler(v)
    {
        this.setState({uprawnienia: v});
    }
    handler2(v)
    {
        this.setState({zweryfikowany: v});
    }

    handleInput(event)
    {
        const  {name, value, type, checked} = event.target
        /*type === "checkbox" ? this.setState({[name]: checked}) 
        :*/
        //console.log(name+" "+value);
        this.setState({
            [name] : value
        })
    }
    
    setBanDate(value)
    {
        this.setState({ban: value})
    }

    

    render()
    {
        return(
            <tr key={this.props.index} data-item={this.props.userDetails}>
                <td>{this.props.userDetails.id}</td>
                <td>{!this.state.change?this.state.email:
                    <input type="text" 
                        name="email"
                        value={this.state.email} 
                        onChange={this.handleInput}
                    />}
                </td>
                <td>{!this.state.change?this.state.login:
                    <input type="text" 
                        name="login"
                        value={this.state.login} 
                        onChange={this.handleInput}
                    />}
                </td>
                <td>{!this.state.change?this.state.zweryfikowany:
                    <RadioButtons value={this.props.userDetails.zweryfikowany} action={this.handler2}/>}
                </td>
                <td>{!this.state.change?this.state.uprawnienia:
                    <SelectList defaultValue={this.props.userDetails.uprawnienia} action={this.handler}/>}
                </td>
                <td>{!this.state.change?this.state.ban:
                        <Calendar date={this.state.ban} action={this.setBanDate}/>
                    }
                </td>
                {this.state.confirm?
                    <td className="ok">
                        <FontAwesomeIcon 
                          icon="check"
                          cursor="pointer"
                          onClick={this.confimrHandler}
                        />
                    </td>
                    :
                    <td>
                        <FontAwesomeIcon 
                          icon="edit"
                          cursor="pointer"
                          onClick={this.changeHandler}
                      />
                    </td>
                      
                }
                
                      
            </tr>
        )
    }
}
export default UsersRow;

/*
<input type="text" 
    name="zweryfikowany"
    value={this.state.zweryfikowany}
    onChange={this.handleInput}
/>
*/