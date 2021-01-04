import Data from '../Data_Objects.json'
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
         data: Data,
         are_any_changes: false,
         value:"",
         changed_objects:[],
      };
      this.handler = this.handler.bind(this);
      this.changeHandler = this.changeHandler.bind(this);
      this.tableChangeConfirm = this.tableChangeConfirm.bind(this);
      this.handleSync = this.handleSync.bind(this);
      this.gotoATmoduleAddObject = this.gotoATmoduleAddObject.bind(this);
    }
  

    tableChangeConfirm(id, nazwa, administrator)
    {
      var jsonData = {"id": "", "nazwa":"", "administrator obiektu":""};

        jsonData.id = id;
        jsonData.nazwa = nazwa;
        jsonData.administrator = administrator;

        //console.log(jsonData);
        console.log("tableConfirm")
        this.setState({changed_objects:jsonData,are_any_changes:true})
    }

    handleSync()
    {//synchronizacja tabeli z bazą danych 
      console.log("Handle sync clicked!");
      console.log(this.state.changed_objects);
      this.setState({are_any_changes:false});
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
                <ObjectsRow index={index} objectsDetails={objectsDetails} action={self.tableChangeConfirm}/> 
              );
            })}
          </tbody>
        </table>
      );
      
    }
  }
export default TabelaObiektow;