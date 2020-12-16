import Data from '../Data_Users_V2.json'
//import Data from '../generated.json'
import React, {Component} from "react"
import UsersRow from './UsersRow'
//import update from 'react-addons-update';
//npm i react-addons-update   ->  do clickList
//import { FaArrowDown, FaArrowUp } from "react-icons/fa";

class UsersTable extends Component 
{
    constructor() 
    {
      super();
      this.state = 
      {
         data: Data,
         clickList: [true,true,true,true,false,false,false,false,false],
         value:"",
         edytowani_uzytkownicy:[]
      };
      this.onSort = this.onSort.bind(this);
      this.handler = this.handler.bind(this);
      this.changeHandler = this.changeHandler.bind(this);
      this.tableChangeConfirm = this.tableChangeConfirm.bind(this);
    }
  
  
    onSort(event, sortKey,index)
    {
      const data = this.state.data;
  
      let corrected_clickList = this.state.clickList
      for(var i=0; i<9; i++)
      {
        if(index===i)
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

   

    tableChangeConfirm(id, email, login, zweryfikowany, uprawnienia, ban)
    {
      //console.log("ACTION "+nazwa+" "+administrator);
      var tablica_uzytkownikow = this.state.edytowani_uzytkownicy;
      console.log(id+""+email+" "+login+" "+zweryfikowany+" "+uprawnienia+" "+ban)
      var jsonData = {"id": "", "email":"", "login":"", "zweryfikowany":"", "uprawnienia":"", "ban":""};

        jsonData.id = id;
        jsonData.email = email;
        jsonData.login = login;
        jsonData.zweryfikowany = zweryfikowany;
        jsonData.uprawnienia = uprawnienia;
        jsonData.ban = ban;
        tablica_uzytkownikow.push(jsonData);

        
        console.log(tablica_uzytkownikow);
        for(var i=0; i<tablica_uzytkownikow.length-1; i++)
        {//usuwanie z tablicy uzytkownikow z więcej niż jedną zmianą (liczy się tylko ostatnia zmiana)
          if(jsonData.id===tablica_uzytkownikow[i].id)
            tablica_uzytkownikow.splice(i,1);
        }
        

        this.setState({edytowani_uzytkownicy:tablica_uzytkownikow})
    }
    


    handleSubmit()
    {
      console.log("Handle submit clicked!");
      console.log(this.state.edytowani_uzytkownicy);
      //sent data from edytowani_uzytkownicy to API 
    }

    changeHandler()
    {
      this.setState({change_clicked:true});
    }

    handler(v)
    {
      this.setState({value: v});
      //console.log("HELLO THERE: "+v);
    }

    render() {
      var newdata = this.state.data;
      const self = this; //!!!!
      
      return (
        <table id="admin_table">
          <thead>
            <tr>
              <th onClick={e => this.onSort(e, 'id', 0)}>ID</th>
              <th onClick={e => this.onSort(e, 'email', 1)}>email</th>
              <th onClick={e => this.onSort(e, 'login', 2)}>login</th>
              <th onClick={e => this.onSort(e, 'zweryfikowany', 3)}>zweryfikowany</th>
              <th onClick={e => this.onSort(e, 'uprawnienia', 4)}>uprawnienia</th>
              <th onClick={e => this.onSort(e, 'ban', 5)}>Ban?</th>
            </tr>
          </thead>
          <tbody id="tbody">
            {newdata.map(function(userDetails, index) {
              return (
                <UsersRow index={index} userDetails={userDetails} action={self.tableChangeConfirm}/>
              );
            })}
          </tbody>
        </table>
      );
      
    }
  }
  
  export default UsersTable;

//TODO
/* childComponent spróbować w selectie i options */

  /*const tbody = document.querySelector('#position tbody');
      tbody.addEventListener('click', function (e) 
      {
        const cell = e.target.closest('td');
        if (!cell) {return;} // Quit, not clicked on a cell
        const row = cell.parentElement;
        console.log(cell.innerHTML, row.rowIndex, cell.cellIndex);
      });*/