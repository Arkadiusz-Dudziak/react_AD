import React,{Component} from "react"

class V2_Select extends Component
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
                <option value="uzytkownik">uzytkownik</option>
                <option value="administrator obiektu">administrator obiektu</option>
                <option value="moderator">moderator</option>
                <option value="administrator">administrator</option>
            </select>
        )
    }
}
export default V2_Select