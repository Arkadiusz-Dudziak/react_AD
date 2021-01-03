import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import DataAdminObject from "../DataAdminObject.json"
import Select from 'react-select'
//import Filter from "./Filter"
import SelectList from "./SelectList"
library.add(faEdit);
library.add(faCheck);
library.add(faTimes);
class ObjectsRow extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            id: this.props.objectsDetails.id,
            nazwa: this.props.objectsDetails.nazwa,
            administrator: this.props.objectsDetails.administrator,
            prev_administrator: this.props.objectsDetails.administrator,
            change: false,
            confirm: false
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.confimrHandler = this.confimrHandler.bind(this);
        this.handler = this.handler.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleAdminChange = this.handleAdminChange.bind(this);
        this.cancelHandler = this.cancelHandler.bind(this);
    }
    changeHandler()
    {
      this.setState({change:true, confirm:true});
    }
    confimrHandler(e)
    {
        this.setState({change:false, confirm:false}, 
            ()=>{this.props.action(this.state.id, this.state.nazwa, this.state.administrator)})
    }
    handler(v)
    {
        this.setState({typ: v});
    }

    handleInput(event)
    {
        const  {name, value, type, checked} = event.target
        this.setState({
            [name] : value
        })
    }

    handleAdminChange = selectedOption => {
        this.setState({ administrator: selectedOption.value });
        //console.log(`Option selected:`, selectedOption);
      };

    cancelHandler(e)
    {
        this.setState({administrator: this.state.prev_administrator, change:false, confirm:false}, 
            ()=>{this.props.action(this.state.id, this.state.nazwa, this.state.prev_administrator)})
        console.log("cancel");
    }

    render()
    {
        var no_administrator = {"value": "", "label": "brak", "color": "red"}
        const administrators = DataAdminObject.map(d => ({
            "value": d.login,
            "label": d.login
        }))
        administrators.unshift(no_administrator)

        const customStyles = {
            option: (provided, state) => ({
              ...provided,
              color: state.value ? 'green' : 'black',
              color: state.value==="" ? 'red':null
            }),
            singleValue: (provided, state) => {          
              return { ...provided };
            }
          }

        return(
            <tr key={this.props.index} data-item={this.props.objectsDetails}>
                <td>{this.props.objectsDetails.id}</td>
                <td>{this.state.nazwa}</td>
                <td>{!this.state.change?this.state.administrator:
                        <Select 
                            name="administrator" 
                            placeholder="szukaj" 
                            options={administrators} 
                            onChange={this.handleAdminChange}
                            styles={customStyles}
                        />
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
                            onClick={this.confimrHandler}
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
export default ObjectsRow;