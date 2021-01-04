import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faCheck, faCalendarAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import SelectList from "./SelectList"
import RadioButtons from "./RadioButtons";
import Calendar from "./BanSetter"
import {Form} from 'react-bootstrap'

library.add(faEdit);
library.add(faCheck);
library.add(faCalendarAlt);
library.add(faTimes);

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
            poprzedni_zweryfikowany: this.props.userDetails.zweryfikowany,
            poprzednie_uprawnienia: this.props.userDetails.uprawnienia,
            poprzedni_ban: this.props.userDetails.ban,
            change: false,
            confirm: false
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.confirmHandler = this.confirmHandler.bind(this);
        this.cancelHandler = this.cancelHandler.bind(this);
        this.handler = this.handler.bind(this);
        this.handler2 = this.handler2.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.setBanDate = this.setBanDate.bind(this);
    }
    changeHandler()
    {
      this.setState({change:true, confirm:true});
    }
    confirmHandler(e)
    {
        this.state.uprawnienia==="użytkownik"?
        this.setState({change:false, confirm:false}, 
            ()=>{this.props.action(this.state.id, this.state.email, this.state.login, 
                this.state.zweryfikowany, this.state.uprawnienia, this.state.ban)})
            :
            this.setState({change:false, confirm:false, ban:""}, 
                ()=>{this.props.action(this.state.id, this.state.email, this.state.login, 
                    this.state.zweryfikowany, this.state.uprawnienia, this.state.ban)})
        //this.setState({value: e.target.value}, ()=>{this.props.action(this.state.value)})
        console.log("confirm");
    }
    cancelHandler(e)
    {//funkcja działa tak, że przywraca zmieniane dane na takie przed synchronizacją z bazą danych - czyli zmieniając jednego użytkownika dwa razy, za drugim razem cofnie zmiany 
        this.setState({zweryfikowany: this.state.poprzedni_zweryfikowany, uprawnienia: this.state.poprzednie_uprawnienia, ban: this.state.poprzedni_ban, change:false, confirm:false}, 
            ()=>{this.props.action(this.state.id, this.state.email, this.state.login, 
                this.state.poprzedni_zweryfikowany, this.state.poprzednie_uprawnienia, this.state.poprzedni_ban)})
        console.log("cancel + ", this.state.poprzednie_uprawnienia);
    }

    handler(v)
    {
        this.setState({poprzednie_uprawnienia: this.state.uprawnienia});
        this.setState({uprawnienia: v});
    }
    handler2(v)
    {
        this.setState({poprzedni_zweryfikowany: this.state.zweryfikowany});
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
        this.setState({poprzedni_ban: this.state.ban});
        this.setState({ban: value});
        console.log("setBanDate");
    }

    

    render()
    {
        return(
            <tr key={this.props.index} data-item={this.props.userDetails}>
                <td>{this.props.userDetails.id}</td>
                <td>{this.state.email}</td>
                <td>{this.state.login}</td>
                <td>{!this.state.change?this.state.zweryfikowany:
                    <RadioButtons value={this.state.zweryfikowany} action={this.handler2}/>}
                </td>
                <td>{!this.state.change?this.state.uprawnienia:
                    <SelectList defaultValue={this.state.uprawnienia} action={this.handler}/>}
                </td>
                <td>{!this.state.change?this.state.ban:
                        this.state.uprawnienia==="użytkownik"?
                            <Calendar date={this.state.ban} action={this.setBanDate}/>
                        :
                        <span style={{color:"red"}}>Operacja niemożliwa</span>
                    }
                </td>
                {this.state.confirm?
                    <td className="ok">
                        <span style={{marginRight:"15px"}}>
                        <FontAwesomeIcon 
                          icon="check"
                          cursor="pointer"
                          color="green"
                          title="zatwierdź zmiany"
                          onClick={this.confirmHandler}
                        />
                        </span>
                        
                        <FontAwesomeIcon 
                          icon="times"
                          cursor="pointer"
                          color="red"
                          title="cofnij zmiany"
                          onClick={this.cancelHandler}
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