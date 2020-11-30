import React,{Component} from "react"

class SelectList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            value: props.value
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e)
    {
        this.setState({value: e.target.value}, ()=>{this.props.action(this.state.value)})
    }


    render()
    {
        return(
            <select defaultValue={this.props.defaultValue} value={this.state.value} onChange={this.handleChange}>
                <option value="basen">basen</option>
                <option value="boisko piłkarskie">boisko piłkarskie</option>
                <option value="lodowisko">lodowisko</option>
            </select>
        )
    }
}
export default SelectList