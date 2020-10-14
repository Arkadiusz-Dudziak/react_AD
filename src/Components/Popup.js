import React, {Component} from "react"
import FormLogin from "./FormLogin"
import FormRegister from "./FormRegister"
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

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
                {this.state.register ? <FormRegister action={this.handleRegisterChange}/> : <FormLogin action={this.handleRegisterChange}/>}
                <Button onClick={this.props.closePopup}>Zamknij</Button>
          </div>
        </div>
      );
    }
}

export default Popup 