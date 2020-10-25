import Data from '../Data.json'
import React, {Component} from "react"
import update from 'react-addons-update';
//npm i react-addons-update   ->  do clickList
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

class UsersTable extends Component 
{
    constructor(props) 
    {
      super(props);
      this.state = 
      {
         data: Data,
         clickList: [true,true,true,true,true,true,true,true],
         are_any_changes: false,
         changed_users:[]
      };
      this.onSort = this.onSort.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
    }
  
  
    onSort(event, sortKey,index)
    {
      const data = this.state.data;
  
      let corrected_clickList = this.state.clickList
      for(var i=0; i<8; i++)
      {
        if(index==i)
        {
          corrected_clickList[i] = !corrected_clickList[i];
        }
      }

      //zmiana sposobu sortowania
      if(corrected_clickList[index])
      {
        if(sortKey==="id")
          data.sort(function(a,b){return a.id - b.id})
        else
          data.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))  //dla pol tekstowych
      }
      else
      {
        if(sortKey==="id")
          data.sort(function(a,b){return b.id - a.id})
        else
          data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))  //dla pol tekstowych
      }

      this.setState({data,corrected_clickList})
    }

    componentDidMount()
    {
      const tbody = document.querySelector('#tbody');
      var table = document.getElementById("admin_table");
      const self = this;
      var user_array = this.state.changed_users;

      tbody.addEventListener('click', function (e) 
      {
        const cell = e.target.closest('td');
        var jsonData = {"id": "", "email":"", "login":"", "verified":"", "user": "", "adminofacility":"", "moderator":"", "admin":""};
        if (!cell) {return;} // Quit, not clicked on a cell
        const row = cell.parentElement;
        //console.log(cell.innerHTML, row.rowIndex, cell.cellIndex, cell.backgroundColor);
        if(cell.style.backgroundColor == "green")
          cell.style.backgroundColor = "red";
        else
          cell.style.backgroundColor = "green";
        
       //console.log(table.rows[row.rowIndex].cells[0]);

        jsonData.id = table.rows[row.rowIndex].cells[0].innerHTML;
        jsonData.email = table.rows[row.rowIndex].cells[1].innerHTML;
        jsonData.login = table.rows[row.rowIndex].cells[2].innerHTML;
        jsonData.verified = table.rows[row.rowIndex].cells[3].innerText==="TAK"?"1":"0";  //?? innerText, innerHTML nie działa
        jsonData.user = table.rows[row.rowIndex].cells[4].style.backgroundColor==="green"?"1":"0";
        jsonData.adminofacility = table.rows[row.rowIndex].cells[5].style.backgroundColor==="green"?"1":"0";
        jsonData.moderator = table.rows[row.rowIndex].cells[6].style.backgroundColor==="green"?"1":"0";
        jsonData.admin = table.rows[row.rowIndex].cells[7].style.backgroundColor==="green"?"1":"0";
        user_array.push(jsonData);
        console.log(user_array);
        console.log(table.rows[row.rowIndex].cells[3].innerHTML);
        //self.setState({are_any_changes:true})
        self.setState({changed_users:user_array})
      });
    }

    render() {
      var newdata = this.state.data;
        
      return (
        <table id="admin_table">
          <thead>
            <tr>
              <th onClick={e => this.onSort(e, 'id', 0)}>ID</th>
              <th onClick={e => this.onSort(e, 'email', 1)}>email</th>
              <th onClick={e => this.onSort(e, 'login', 2)}>login</th>
              <th onClick={e => this.onSort(e, 'verified', 3)}>zweryfikowany</th>
              <th onClick={e => this.onSort(e, 'user', 4)}>Użytkownik</th>
              <th onClick={e => this.onSort(e, 'adminofacility', 5)}>A. Obiektu</th>
              <th onClick={e => this.onSort(e, 'moderator', 6)}>Moderator</th>
              <th onClick={e => this.onSort(e, 'admin', 7)}>Admin</th>
              {this.state.are_any_changes?<th>Potwierdź wszystko</th>:null}
            </tr>
          </thead>
          <tbody id="tbody">
            {newdata.map(function(userDetails, index) {
              return (
                <tr key={index} data-item={userDetails}>
                    <td data-title="ID">{userDetails.id}</td>
                    <td data-title="Email">{userDetails.email}</td>
                    <td data-title="Login">{userDetails.login}</td>
                    <td data-title="Zweryfikowany">{userDetails.verified==="1"? "TAK":"NIE"} </td>   
                    <td data-title="Uzytkownik" style={userDetails.user==="1"?{backgroundColor:"green"}:{backgroundColor:"red"}}></td>  
                    <td data-title="Administrator Obiektu" style={userDetails.adminofacility==="1"?{backgroundColor:"green"}:{backgroundColor:"red"}}></td>  
                    <td data-title="Moderator" style={userDetails.moderator==="1"?{backgroundColor:"green"}:{backgroundColor:"red"}}></td>  
                    <td data-title="Administrator" style={userDetails.admin==="1"?{backgroundColor:"green"}:{backgroundColor:"red"}}></td>  
                </tr>
              );
            })}
          </tbody>
        </table>
      );
      
    }
  }
  
  export default UsersTable;

  /*const tbody = document.querySelector('#position tbody');
      tbody.addEventListener('click', function (e) 
      {
        const cell = e.target.closest('td');
        if (!cell) {return;} // Quit, not clicked on a cell
        const row = cell.parentElement;
        console.log(cell.innerHTML, row.rowIndex, cell.cellIndex);
      });*/