import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faCheck, faTimes, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import {getObjectsAdmins} from '../FetchData'
import Select from 'react-select'
library.add(faEdit);
library.add(faCheck);
library.add(faTimes);
library.add(faUserEdit);
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
        this.goToObjectEdit = this.goToObjectEdit.bind(this);
    }
    changeHandler()
    {
      this.setState({change:true, confirm:true});
    }
    confimrHandler(e)
    {
        this.setState({change:false, confirm:false}, 
            ()=>{this.props.action(this.state.id, this.state.nazwa, this.state.administrator, true)})
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
        this.setState({prev_administrator: this.state.administrator});
        this.setState({ administrator: selectedOption.value });
        //console.log(`Option selected:`, selectedOption);
      };

    cancelHandler(e)
    {
        this.setState(({administrator:this.state.prev_administrator, change:false, confirm:false}), 
            ()=>{this.props.action(this.state.id, this.state.nazwa, this.state.prev_administrator, false)})
        console.log("cancel + ",this.state.prev_administrator);
        console.log("cancel + ",this.state.administrator);
    }

    goToObjectEdit()
    {
        console.log("Do modułu edytowania/zarządzania obiektem ", this.state.id)
    }


    render()
    {
        var no_administrator = {"value": "", "label": "brak", "color": "red"}
        const administrators = getObjectsAdmins().map(d => ({
            "value": d.login,
            "label": d.login
        }))
        administrators.unshift(no_administrator)

        const customStyles = {
            option: (provided, state) => ({
              ...provided,
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
                            value={{value: this.state.administrator, label: this.state.administrator}}
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
                        
                         <span style={{marginRight:"15px"}}>
                            <FontAwesomeIcon 
                                icon="times"
                                cursor="pointer"
                                color="red"
                                title="cofnij zmiany"
                                onClick={this.cancelHandler}
                            />
                         </span>
                        
                        <FontAwesomeIcon
                            icon="edit"
                            cursor="pointer"
                            title="Edytuj obiekt sportowy"
                            onClick={this.goToObjectEdit}
                        />

                    </td>
                    :
                    <td>
                        <span style={{marginRight:"15px"}}>
                            <FontAwesomeIcon 
                                icon="user-edit"
                                cursor="pointer"
                                title="Zmień administratora obiektu sportowego"
                                onClick={this.changeHandler}
                            />
                        </span>
                        

                        <FontAwesomeIcon
                            icon="edit"
                            cursor="pointer"
                            title="Edytuj obiekt sportowy"
                            onClick={this.goToObjectEdit}
                        />

                    </td>
                }    
            </tr>
        )
    }
}
export default ObjectsRow;