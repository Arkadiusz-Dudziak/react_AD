import React, {Component} from "react"
import FormLogin from "./FormLogin"
import FormRegister from "./FormRegister"

class Popup extends React.Component 
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            register: false
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
                <button onClick={this.props.closePopup}>Zamknij</button>
          </div>
        </div>
      );
    }
}

export default Popup 