import Data from '../Data.json'
import React, {Component} from "react"
import update from 'react-addons-update';
//npm i react-addons-update   ->  do clickList

class UsersTable extends Component 
{
    constructor(props) 
    {
      super(props);
      this.state = 
      {
         data: Data,
         clickList: [true,true,true,true,true,true,true]
      };
      this.onSort = this.onSort.bind(this);
    }
  
  
    onSort(event, sortKey,index)
    {
      const data = this.state.data;
  
      let corrected_clickList = this.state.clickList
      for(var i=0; i<7; i++)
      {
        if(index==i)
        {
          corrected_clickList[i] = !corrected_clickList[i];
        }
      }

      //zmiana sposobu sortowania
      if(corrected_clickList[index])
        data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
      else
        data.sort((b,a) => a[sortKey].localeCompare(b[sortKey]))

      this.setState({data,corrected_clickList})
    }

  
    render() {
      var newdata = this.state.data;
  
      return (
        <table>
          <thead>
            <tr>
              <th onClick={e => this.onSort(e, 'email', 0)}>email</th>
              <th onClick={e => this.onSort(e, 'login', 1)}>login</th>
              <th onClick={e => this.onSort(e, 'verified', 2)}>zweryfikowany</th>
              <th onClick={e => this.onSort(e, 'user', 3)}>Użytkownik</th>
              <th onClick={e => this.onSort(e, 'adminofacility', 4)}>A. Obiektu</th>
              <th onClick={e => this.onSort(e, 'moderator', 5)}>Moderator</th>
              <th onClick={e => this.onSort(e, 'admin', 6)}>Admin</th>
            </tr>
          </thead>
          <tbody>
            {newdata.map(function(userDetails, index) {
              return (
                <tr key={index} data-item={userDetails}>
                    <td data-title="Email">{userDetails.email}</td>
                    <td data-title="Login">{userDetails.login}</td>
                    <td data-title="Zweryfikowany">{userDetails.verified=="1"? "TAK":"NIE"}</td>   
                    <td data-title="Uzytkownik" style={userDetails.user=="1"?{backgroundColor:"green"}:{backgroundColor:"red"}}></td>  
                    <td data-title="Administrator Obiektu" style={userDetails.adminofacility=="1"?{backgroundColor:"green"}:{backgroundColor:"red"}}></td>  
                    <td data-title="Moderator" style={userDetails.moderator=="1"?{backgroundColor:"green"}:{backgroundColor:"red"}}></td>  
                    <td data-title="Administrator" style={userDetails.admin=="1"?{backgroundColor:"green"}:{backgroundColor:"red"}}></td>  
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  }
  
  export default UsersTable;