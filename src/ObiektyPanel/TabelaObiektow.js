import {getObjectsAdminData, setObjectAdmin} from '../FetchData'
import React, {Component} from "react"
import ObjectsRow from "./ObjectsRow"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSync } from "@fortawesome/free-solid-svg-icons";

library.add(faSync);

class TabelaObiektow extends Component 
{
    constructor() 
    {
      super();
      this.state = 
      {
         data: getObjectsAdminData(),
         are_any_changes: false,
         value:"",
         changed_object:[],
      };
      this.handler = this.handler.bind(this);
      this.changeHandler = this.changeHandler.bind(this);
      this.tableChangeConfirm = this.tableChangeConfirm.bind(this);
      this.handleSync = this.handleSync.bind(this);
      this.gotoATmoduleAddObject = this.gotoATmoduleAddObject.bind(this);
    }
  

    tableChangeConfirm(id, nazwa, administrator, bool)
    {
      var jsonData = {"id": "", "nazwa":"", "administrator obiektu":""};

      jsonData.id = id;
      jsonData.nazwa = nazwa;
      jsonData.administrator = administrator;

      //console.log(jsonData);
      //console.log("tableConfirm ", this.state.are_any_changes, " ", bool)
      if(this.state.are_any_changes===false && bool===true)
      {
        this.setState({are_any_changes:true})
        this.setState({changed_object:jsonData})
        setObjectAdmin(id, administrator);  
      }
      else
      {
        if(this.state.are_any_changes===true && bool===true)
        {
          this.setState({changed_object:jsonData})
          setObjectAdmin(id, administrator);  
        }
      }
    }

    handleSync()
    {//synchronizacja tabeli z bazą danych 
      console.log("Handle sync clicked!");
      //console.log(this.state.changed_object);
      //this.setState({are_any_changes:false});
      window.location.reload(false);
    }

    gotoATmoduleAddObject()
    {
      console.log("AT moduł");
    }

    handler(v)
    {
      this.setState({value: v});
    }

    changeHandler()
    {
      this.setState({change_clicked:true});
    }

    render() {
      var newdata = this.state.data;
      const self = this; //!!!!
      return (
        <table id="objects_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>nazwa</th>
              <th>administrator obiektu</th>
              {this.state.are_any_changes?
                <th className="confirmAll">
                  <FontAwesomeIcon 
                      icon="sync"
                      cursor="pointer"
                      title="synchronizuj dane z bazą danych"
                      onClick={this.handleSync}
                  />
                </th>
                :<th></th>}
              <th onClick={this.gotoATmoduleAddObject} style={{backgroundColor:"green", color:"white", cursor:"pointer"}}>Dodaj obiekt</th>
            </tr>
          </thead>
          <tbody id="tbody">
            {newdata.map(function(objectsDetails, index) {
              return (
                <ObjectsRow key={objectsDetails.id} index={index} objectsDetails={objectsDetails} action={self.tableChangeConfirm}/> 
              );
            })}
          </tbody>
        </table>
      );
      
    }
  }
export default TabelaObiektow;