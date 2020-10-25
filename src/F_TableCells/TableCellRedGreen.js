import React, {Component} from "react"

class TableCellRedGreen extends Component
{
    render()
    {
        
        return(
            <td style={{backgroundColor:this.props.color}}></td>
        )
    }
}
export default TableCellRedGreen
