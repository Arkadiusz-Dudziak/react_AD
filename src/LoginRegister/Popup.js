import React, {Component} from "react"
import FormLogin from "./FormLogin"
import FormRegister from "./FormRegister"
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

class Popup extends React.Component 
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            register: this.props.register

        }
        this.handleRegisterChange = this.handleRegisterChange.bind(this)
    }

    handleRegisterChange()
    {
        this.setState(prevState => 
        {
              return{register: !prevState.register}    
        })
    }

    render() 
    {
      return (
        <div className='popup'>
          <div className='popup_inner'>
              <div style={{float: "right", fontSize: "30px", marginRight: "15px"}}>
                  <FontAwesomeIcon 
                    icon="times" 
                    onClick={this.props.closePopup}
                    cursor="pointer"
                  />
              </div>
                
              {this.state.register ? <FormRegister action={this.handleRegisterChange}/> : <FormLogin action={this.handleRegisterChange}/>}
              
          </div>
        </div>
      );
    }
}

export default Popup 