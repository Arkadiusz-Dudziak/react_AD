//import Data from '../Data_Users_V2.json'
import {clearBan, setBanDate, setPernamentBan, getUsersData, setVerified, setAccountPermissons} from '../FetchData'
//import Data from '../generated.json'
import React, {Component} from "react"
import UsersRow from './UsersRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSync } from "@fortawesome/free-solid-svg-icons";
library.add(faSync);
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
         data: "",
         value:"",
         edytowany_uzytkownik:[],
         are_any_changes: false
      };
      this.handler = this.handler.bind(this);
      this.changeHandler = this.changeHandler.bind(this);
      this.tableChangeConfirm = this.tableChangeConfirm.bind(this);
      this.handleSync = this.handleSync.bind(this);
    }
  

    tableChangeConfirm(id, email, login, zweryfikowany, uprawnienia, ban, zmiana_weryfikacji, zmiana_uprawnien, zmiana_bana)
    {
      console.log("login: ",login," zweryfikowany: ",zweryfikowany," uprawnienia: ",uprawnienia," ban: ",ban)
      var jsonData = {"id": "", "email":"", "login":"", "zweryfikowany":"", "uprawnienia":"", "ban":""};

      jsonData.id = id;
      jsonData.email = email;
      jsonData.login = login;
      jsonData.zweryfikowany = zweryfikowany;
      jsonData.uprawnienia = uprawnienia;
      jsonData.ban = ban;

      if(zmiana_weryfikacji)
      {
        setVerified(id);
        this.setState({edytowany_uzytkownik:jsonData, are_any_changes:true});
      }
      if(zmiana_bana)
      {
        this.setState({edytowany_uzytkownik:jsonData, are_any_changes:true});
        if(ban!=="")
        {
          if(ban==="permanentny")
            setPernamentBan(id);
          else
            setBanDate(id, ban);

         
        }
        else
          clearBan(id);
      }
      if(zmiana_uprawnien)
      {
        this.setState({edytowany_uzytkownik:jsonData, are_any_changes:true});
        setAccountPermissons(id, uprawnienia);
      }
      //setVerified(id);
      console.log("tableConfirm: ",jsonData);
      //console.log("tableConfirm, ", ban)
      //console.log("send data to API");
    }
    
    componentWillMount()
    {
      this.setState({data: getUsersData()})
      console.log("componentWillMount")
    }


    handleSync()
    {//synchronizacja tabeli z bazą danych 
      console.log("Handle sync clicked!");
      //this.setState({are_any_changes:false});
      //this.setState({data: getUsersData()})
      window.location.reload(false);
    }

    changeHandler()
    {
      this.setState({change_clicked:true});
    }

    handler(v)
    {
      this.setState({value: v});
    }

    render() {
      //var newdata = this.state.data;
      const self = this; //!!!!
      
      return (
        <table id="admin_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>email</th>
              <th>login</th>
              <th>zweryfikowany</th>
              <th>uprawnienia</th>
              <th>ban</th>
              {this.state.are_any_changes?
                <th className="confirmAll">
                  <FontAwesomeIcon 
                      icon="sync"
                      cursor="pointer"
                      title="synchronizuj dane z bazą danych"
                      onClick={this.handleSync}
                  />
                </th>
                :null}
            </tr>
          </thead>
          <tbody id="tbody">
            {self.state.data.map(function(userDetails, index) {
              return (
                <UsersRow key={userDetails.id} index={index} userDetails={userDetails} action={self.tableChangeConfirm}/>
              );
            })}
          </tbody>
        </table>
      );
      
    }
  }
  export default UsersTable;