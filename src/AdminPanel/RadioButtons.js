import React,{Component} from "react"

class RadioButtons extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            value: props.value,
        }
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }
    handleOptionChange(e) 
    {
        this.setState({value: e.target.value}, ()=>{this.props.action(this.state.value)});
    }
    render()
    {
        return(
            <div>
                {this.props.value==="TAK"?
                <form>
                    <label>
                        <input type="radio" value="TAK" 
                                    checked={this.state.value === "TAK"} 
                                    onChange={this.handleOptionChange} 
                        />
                        TAK
                    </label>
                
                    <label>
                        <input type="radio" value="NIE"
                                    checked={this.state.value === "NIE"} 
                                    onChange={this.handleOptionChange} />
                        NIE
                    </label>
                </form>
                :
                <form>
                    <label>
                        <input type="radio" value="TAK"
                                    checked={this.state.value === "TAK"} 
                                    onChange={this.handleOptionChange} 
                        />
                        TAK
                    </label>
                
                    <label>
                        <input type="radio" value="NIE" 
                                    checked={this.state.value === "NIE"} 
                                    onChange={this.handleOptionChange}
                        />
                        NIE
                    </label>
                </form>
                }
            </div>
        )
    }
}
export default RadioButtons;

/*
<select defaultValue={this.props.defaultValue} value={this.state.value} onChange={this.handleChange}>
    <option value="basen">basen</option>
    <option value="boisko piłkarskie">boisko piłkarskie</option>
    <option value="lodowisko">lodowisko</option>
</select>
*/