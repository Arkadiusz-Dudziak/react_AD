import { render } from "@testing-library/react";
import React, {Component} from "react"
import TableCellRedGreen from "./TableCellRedGreen"

class TableRow extends Component
{
   
    render()
    {
        let color;
        return(
            <div>
                <tr>
                        <td>{this.props.userD.id}</td>
                        <td data-title="Email">{this.props.userD.email}</td>
                        <td data-title="Login">{this.props.userD.login}</td>
                        <td data-title="Zweryfikowany">{this.props.userD.verified==="1"? "TAK":"NIE"} </td>   
                        {this.props.userD.user==="1"? color="green":color="red"}    <TableCellRedGreen color={color}/> 
                        {this.props.userD.adminofacility==="1"? color="green":color="red"}    <TableCellRedGreen color={color}/>  
                        <td data-title="Moderator" style={this.props.userD.moderator==="1"?{backgroundColor:"green"}:{backgroundColor:"red"}}></td>  
                        <td data-title="Administrator" style={this.props.userD.admin==="1"?{backgroundColor:"green"}:{backgroundColor:"red"}}></td>  
                </tr>
            </div>
            
        )
    }
        
}
export default TableRow