import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import SelectList from "./SelectList"
library.add(faEdit);
library.add(faCheck);
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
            typ: this.props.objectsDetails.typ,
            szerokosc_geograficzna: this.props.objectsDetails.szerokosc_geograficzna,
            wysokosc_geograficzna: this.props.objectsDetails.wysokosc_geograficzna,
            change: false,
            confirm: false
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.confimrHandler = this.confimrHandler.bind(this);
        this.handler = this.handler.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    changeHandler()
    {
      this.setState({change:true, confirm:true});
    }
    confimrHandler(e)
    {
        this.setState({change:false, confirm:false}, 
            ()=>{this.props.action(this.state.id, this.state.nazwa, this.state.administrator, 
                this.state.typ, this.state.szerokosc_geograficzna, this.state.wysokosc_geograficzna)})
        //this.setState({value: e.target.value}, ()=>{this.props.action(this.state.value)})
    }
    handler(v)
    {
        this.setState({typ: v});
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

    render()
    {
        return(
            <tr key={this.props.index} data-item={this.props.objectsDetails}>
                <td>{this.props.objectsDetails.id}</td>
                <td>{!this.state.change?this.state.nazwa:
                    <input type="text" 
                        name="nazwa"
                        value={this.state.nazwa} 
                        onChange={this.handleInput}
                    />}
                </td>
                <td>{!this.state.change?this.state.administrator:
                    <input type="text" 
                        name="administrator"
                        value={this.state.administrator} 
                        onChange={this.handleInput}
                    />}
                </td>
                <td>{!this.state.change?this.state.typ:
                    <SelectList defaultValue={this.props.objectsDetails.typ} action={this.handler}/>}
                </td>
                <td>{!this.state.change?this.state.szerokosc_geograficzna:
                    <input type="text" 
                        name="szerokosc_geograficzna"
                        value={this.state.szerokosc_geograficzna}
                        onChange={this.handleInput}
                    />}
                </td>
                <td>{!this.state.change?this.state.wysokosc_geograficzna:
                    <input type="text" 
                        name="wysokosc_geograficzna"
                        value={this.state.wysokosc_geograficzna}
                        onChange={this.handleInput}
                    />}
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
export default ObjectsRow;